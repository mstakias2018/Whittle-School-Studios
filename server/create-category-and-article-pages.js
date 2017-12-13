const path = require('path');

const { ENV } = require('../src/constants/env');
const {
  LANGUAGE_CONTENTFUL_LOCALE,
  LANGUAGE_PATH,
  REGION_LANGUAGES,
} = require('../src/constants/regions');
const { IMAGE_TYPE, IMAGE_SUBTYPE } = require('../src/constants/images');
const { getIdFromImgUrl } = require('../src/utils/images');
const {
  createQuery,
  saveImage,
  saveCarouselImage,
  saveInlineImage,
  saveMainImage,
} = require('./save-images');

const createCategoryAndArticlePages = (graphql, createPage) =>
  REGION_LANGUAGES[process.env.GATSBY_REGION].map(language =>
    new Promise((resolve, reject) => {
      // query run on all content pages,
      // whether category or article, top-level or nested
      const sharedQuery = `
        id
        pageType
        slug

        articleMainImage: mainImage {
          ${createQuery(IMAGE_SUBTYPE.MAIN_ARTICLE)}
        }

        modules {
          __typename
          ... on ContentfulBodyText {
            content {
              content
            }
          }
          ... on ContentfulInlineImage {
            shape
            squareInlineImage: asset {
              ${createQuery(IMAGE_SUBTYPE.INLINE_SQ)}
            }
            rectInlineImage: asset {
              ${createQuery(IMAGE_SUBTYPE.INLINE_RT)}
            }
          }
          ... on ContentfulSlideshowCarousel {
            slides {
              shape
              squareInlineImage: asset {
                ${createQuery(IMAGE_SUBTYPE.CAROUSEL_SQ)}
              }
              rectInlineImage: asset {
                ${createQuery(IMAGE_SUBTYPE.INLINE_RT)}
              }
            }
          }
        }
      `;

      const localeFilter = `filter: {
        node_locale: { eq: "${LANGUAGE_CONTENTFUL_LOCALE[language]}" }
      }`;

      graphql(`
          {
            # We can't query directly for inset images, since they're buried
            # inside markdown, so let's get inset dimensions for all assets
            allContentfulAsset(${localeFilter}) {
              edges {
                node {
                  ${createQuery(IMAGE_SUBTYPE.INSET)}
                }
              }
            }

            allContentfulContentPage(${localeFilter}) {
              edges {
                node {
                  ${sharedQuery}

                  categoryMainImage: mainImage {
                    ${createQuery(IMAGE_SUBTYPE.MAIN_CATEGORY)}
                  }

                  parentCategory: contentpage {
                    id
                  }
                  subcategories {
                    ${sharedQuery}
                  }
                }
              }
            }
          }
        `).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }
        const { allContentfulContentPage, allContentfulAsset } = result.data;

        const contentfulAssetsById = allContentfulAsset.edges.reduce((acc, { node }) =>
          (node.file ? Object.assign({}, acc, {
            // Get ID from URL instead of using unreliable Gatsby ID
            // https://github.com/gatsbyjs/gatsby/pull/3158
            [getIdFromImgUrl(node.file.url)]: node,
          }) : acc), {});

        const contentPageTemplate = path.resolve('./src/templates/content-page/index.js');

        const buildPage = (id, slugs, imageDataByType) => {
          // Content page IDs are in the form
          // - '[baseId]' (for default locale)
          // - '[baseId]___[locale]' (for other locales)
          const baseId = id.split('___')[0];

          const context = {
            id,
            // Create a regular expression that will fetch a content pages
            // for a given baseId in all locales
            idRegex: `/^${baseId}(___[A-z\\-]+)?$/`,
            imageDataByType,
          };

          createPage({
            component: contentPageTemplate,
            context,
            path: `${LANGUAGE_PATH[language]}/${slugs.join('/')}/`,
          });

          if (process.env.GATSBY_ENV === ENV.STAGING) {
            // Fix for inconsistent padding on Gatsby IDs
            // https://github.com/gatsbyjs/gatsby/pull/3158
            const stagingId = `${baseId.length < 23 ? 'c' : ''}${id}`;

            createPage({
              component: contentPageTemplate,
              context,
              path: `${LANGUAGE_PATH[language]}/${stagingId}/`,
            });
          }
        };

        const buildPageAndSubcategories = (node, prevSlugs = []) => {
          const setupPromises = [];
          const {
            id, modules, slug, subcategories,
          } = node;
          const slugs = [...prevSlugs, slug];

          const imageDataByType = {};

          const mainImagePromise = saveMainImage(node, [id]);
          if (mainImagePromise) {
            setupPromises.push(mainImagePromise.then((imageData) => {
              imageDataByType[IMAGE_TYPE.MAIN] = imageData;
            }));
          }

          if (modules) {
            const modulePromises = modules.map((n, i) => {
              const { __typename, content, slides } = n;
              if (__typename === 'ContentfulInlineImage') {
                return saveInlineImage(n, [id, i]);
              } else if (__typename === 'ContentfulSlideshowCarousel') {
                return Promise.all(slides.map((s, j) => saveCarouselImage(s, [id, i, j])));
              } else if (__typename === 'ContentfulBodyText') {
                const CONTENTFUL_REGEX = /\/\/images\.contentful\.com\/(\w*\/)+[\w-]*\.\w{3,4}/gi;
                const matches = content.content.match(CONTENTFUL_REGEX);
                if (matches) {
                  return Promise.all(matches.map((match, j) => {
                    const asset = contentfulAssetsById[getIdFromImgUrl(match)];
                    return saveImage(asset, IMAGE_TYPE.MODULE, IMAGE_SUBTYPE.INSET, [id, i, j]);
                  }));
                }
              }

              return {};
            });

            setupPromises.push(Promise.all(modulePromises).then((imageData) => {
              imageDataByType[IMAGE_TYPE.MODULE] = imageData;
            }));
          }

          if (subcategories) {
            const subcategoryPromises = subcategories.map(subcat => buildPageAndSubcategories(subcat, slugs));
            setupPromises.push(Promise.all(subcategoryPromises));
          }

          return Promise.all(setupPromises).then(() => buildPage(id, slugs, imageDataByType));
        };

        const createPagePromises = allContentfulContentPage.edges.map(({ node }) => {
          // Skip subcategories
          if (node.parentCategory) return undefined;
          return buildPageAndSubcategories(node);
        });

        return Promise.all(createPagePromises).then(resolve);
      });
    }));

module.exports = createCategoryAndArticlePages;
