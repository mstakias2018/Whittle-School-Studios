const path = require('path');

const { ENV } = require('../src/constants/env');
const { LANGUAGE_CONTENTFUL_LOCALE, REGION_LANGUAGES } = require('../src/constants/regions');
const { IMAGE_TYPE, IMAGE_SUBTYPE } = require('../src/constants/images');
const { getIsoCode } = require('../src/utils/regions');
const {
  createQuery,
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
                ${createQuery(IMAGE_SUBTYPE.INLINE_SQ)}
              }
              rectInlineImage: asset {
                ${createQuery(IMAGE_SUBTYPE.INLINE_RT)}
              }
            }
          }
        }
      `;

      graphql(`
          {
            allContentfulContentPage(
              filter: {
                node_locale: { eq: "${LANGUAGE_CONTENTFUL_LOCALE[language]}" }
              }
            ) {
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

        const contentPageTemplate = path.resolve('./src/templates/content-page/index.js');
        const isoCode = getIsoCode(language);


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
            path: `${isoCode}/${slugs.join('/')}/`,
          });

          if (process.env.GATSBY_ENV === ENV.STAGING) {
            createPage({
              component: contentPageTemplate,
              context,
              path: `${isoCode}/${id}/`,
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
              const { __typename, slides } = n;
              if (__typename === 'ContentfulInlineImage') {
                return saveInlineImage(n, [id, i]);
              } else if (__typename === 'ContentfulSlideshowCarousel') {
                return Promise.all(slides.map((s, j) => saveInlineImage(s, [id, i, j])));
              }

              return undefined;
            });

            setupPromises.push(Promise.all(modulePromises).then((imageData) => {
              imageDataByType[IMAGE_TYPE.INLINE] = imageData;
            }));
          }


          if (subcategories) {
            const subcategoryPromises = subcategories.map(subcat => buildPageAndSubcategories(subcat, slugs));
            setupPromises.push(Promise.all(subcategoryPromises));
          }

          return Promise.all(setupPromises).then(() => buildPage(id, slugs, imageDataByType));
        };

        const createPagePromises = result.data.allContentfulContentPage.edges.map(({ node }) => {
          // Skip subcategories
          if (node.parentCategory) return undefined;
          return buildPageAndSubcategories(node);
        });

        return Promise.all(createPagePromises).then(resolve);
      });
    }));

module.exports = createCategoryAndArticlePages;
