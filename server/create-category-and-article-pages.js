const path = require('path');

const { CONTENT_MODULE } = require('../src/constants/contentful');
const { ENV } = require('../src/constants/env');
const {
  LANGUAGE_CONTENTFUL_LOCALE,
  LANGUAGE_PATH,
  REGION_LANGUAGES,
} = require('../src/constants/regions');
const { IMAGE_TYPE, IMAGE_SUBTYPE } = require('../src/constants/images');
const { getIdFromImgUrl } = require('../src/utils/images');
const { parseInsetContent } = require('../src/utils/strings');
const {
  createQuery,
  saveCarouselImage,
  saveImage,
  saveInlineImage,
  saveMainImage,
  saveThumbnailListImage,
  saveVideoCoverPhotos,
} = require('./save-images');

const getAssetById = (acc, node) => (node.file ? Object.assign({}, acc, {
  // Get ID from URL instead of using unreliable Gatsby ID
  // https://github.com/gatsbyjs/gatsby/pull/3158
  // TODO: This PR has been merged but didn't take effect on images,
  // so we need to create a new PR
  [getIdFromImgUrl(node.file.url)]: node,
}) : acc);

const createCategoryAndArticlePages = (graphql, createPage) =>
  REGION_LANGUAGES[process.env.GATSBY_REGION].map(language =>
    new Promise((resolve, reject) => {
      const locale = LANGUAGE_CONTENTFUL_LOCALE[language];

      // query run on all content pages,
      // whether category or article, top-level or nested
      const sharedQuery = `
        id: contentful_id
        pageType
        slug

        dummycontentindex {
          id
        }

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
          ... on ContentfulInlineVideo {
            asset {
              ${createQuery(IMAGE_SUBTYPE.INLINE_RT_VIDEO)}
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
          ... on ContentfulThumbnailList {
            imageShape
            item1VideoEmbedCode {
              embedCode: item1VideoEmbedCode,
            }
            item2VideoEmbedCode {
              embedCode: item2VideoEmbedCode,
            }
            item3VideoEmbedCode {
              embedCode: item3VideoEmbedCode,
            }
            item4VideoEmbedCode {
              embedCode: item4VideoEmbedCode,
            }
            item5VideoEmbedCode {
              embedCode: item5VideoEmbedCode,
            }
            item6VideoEmbedCode {
              embedCode: item6VideoEmbedCode,
            }
            squareItem1Asset: item1Asset {
              ${createQuery(IMAGE_SUBTYPE.INSET_SQ)}
            }
            squareItem2Asset: item2Asset {
              ${createQuery(IMAGE_SUBTYPE.INSET_SQ)}
            }
            squareItem3Asset: item3Asset {
              ${createQuery(IMAGE_SUBTYPE.INSET_SQ)}
            }
            squareItem4Asset: item4Asset {
              ${createQuery(IMAGE_SUBTYPE.INSET_SQ)}
            }
            squareItem5Asset: item5Asset {
              ${createQuery(IMAGE_SUBTYPE.INSET_SQ)}
            }
            squareItem6Asset: item6Asset {
              ${createQuery(IMAGE_SUBTYPE.INSET_SQ)}
            }
            rectItem1Asset: item1Asset {
              ${createQuery(IMAGE_SUBTYPE.INSET_RT)}
            }
            rectItem2Asset: item2Asset {
              ${createQuery(IMAGE_SUBTYPE.INSET_RT)}
            }
            rectItem3Asset: item3Asset {
              ${createQuery(IMAGE_SUBTYPE.INSET_RT)}
            }
            rectItem4Asset: item4Asset {
              ${createQuery(IMAGE_SUBTYPE.INSET_RT)}
            }
            rectItem5Asset: item5Asset {
              ${createQuery(IMAGE_SUBTYPE.INSET_RT)}
            }
            rectItem6Asset: item6Asset {
              ${createQuery(IMAGE_SUBTYPE.INSET_RT)}
            }
          }
          ... on ContentfulTeams {
            heroImage {
              ${createQuery(IMAGE_SUBTYPE.TEAMS_HERO_SQ)}
            }
            sections {
              person1Image {
                ${createQuery(IMAGE_SUBTYPE.TEAMS_BIO_SQ)}
              }
              person2Image {
                ${createQuery(IMAGE_SUBTYPE.TEAMS_BIO_SQ)}
              }
              person3Image {
                ${createQuery(IMAGE_SUBTYPE.TEAMS_BIO_SQ)}
              }
              person4Image {
                ${createQuery(IMAGE_SUBTYPE.TEAMS_BIO_SQ)}
              }
              person5Image {
                ${createQuery(IMAGE_SUBTYPE.TEAMS_BIO_SQ)}
              }
              person6Image {
                ${createQuery(IMAGE_SUBTYPE.TEAMS_BIO_SQ)}
              }
            }
          }
          ... on ContentfulVideos {
            video1AssetCoverPhoto {
              ${createQuery(IMAGE_SUBTYPE.INLINE_RT_HERO_VIDEO)}
            }
            video1AssetCoverPhotoLarge: video1AssetCoverPhoto {
              ${createQuery(IMAGE_SUBTYPE.INLINE_RT_HERO_VIDEO_LARGE)}
            }
            video2AssetCoverPhoto {
              ${createQuery(IMAGE_SUBTYPE.INLINE_RT_HERO_VIDEO_SMALL)}
            }
            video2VideoEmbedCode {
              embedCode: video2VideoEmbedCode
            }
            video3AssetCoverPhoto {
              ${createQuery(IMAGE_SUBTYPE.INLINE_RT_HERO_VIDEO_SMALL)}
            }
            video3VideoEmbedCode {
              embedCode: video3VideoEmbedCode
            }
          }
        }
      `;

      const localeFilter = `filter: {
        node_locale: { eq: "${locale}" }
      }`;

      graphql(`
          {
            # We can't query directly for inset images, since they're buried
            # inside markdown, so let's get inset dimensions for all assets
            allContentfulAsset(${localeFilter}) {
              edges {
                dataSq: node {
                  ${createQuery(IMAGE_SUBTYPE.INSET_SQ)}
                }
                dataRt: node {
                  ${createQuery(IMAGE_SUBTYPE.INSET_RT)}
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
                    id: contentful_id
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
          console.log(result.errors); // eslint-disable-line no-console
          reject(result.errors);
        }
        const { allContentfulContentPage, allContentfulAsset } = result.data;

        const contentfulAssetsById = {};
        contentfulAssetsById.sq = allContentfulAsset.edges.reduce((acc, { dataSq: node }) =>
          getAssetById(acc, node), {});
        contentfulAssetsById.rt = allContentfulAsset.edges.reduce((acc, { dataRt: node }) =>
          getAssetById(acc, node), {});

        const contentPageTemplate = path.resolve('./src/templates/content-page/index.js');

        const buildPage = (id, slugs, imageDataByType) => {
          const context = {
            id,
            imageDataByType,
            locale,
          };

          createPage({
            component: contentPageTemplate,
            context,
            path: `${LANGUAGE_PATH[language]}/${slugs.join('/')}/`,
          });

          if (process.env.GATSBY_ENV === ENV.STAGING) {
            createPage({
              component: contentPageTemplate,
              context,
              path: `${LANGUAGE_PATH[language]}/${id}/`,
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
          if (mainImagePromise && mainImagePromise.then) {
            setupPromises.push(mainImagePromise.then((imageData) => {
              imageDataByType[IMAGE_TYPE.MAIN] = imageData;
            }));
          }

          if (modules) {
            const modulePromises = modules.map((module, i) => {
              const { __typename } = module;
              switch (__typename) {
                case CONTENT_MODULE.INLINE_IMAGE:
                  return saveInlineImage(module, [id, i]);
                case CONTENT_MODULE.INLINE_VIDEO:
                  return saveImage(module.asset, IMAGE_TYPE.MODULE, IMAGE_SUBTYPE.INLINE_RT_VIDEO, [id, i]);
                case CONTENT_MODULE.CAROUSEL:
                  return Promise.all(module.slides.map((s, j) => saveCarouselImage(s, [id, i, j])));
                case CONTENT_MODULE.BODY_TEXT: {
                  const { assets } = parseInsetContent(module.content.content);
                  return Promise.all(assets.map(({ hasVideo, imageUrl }, j) => {
                    if (!imageUrl) return {};

                    const asset = contentfulAssetsById[hasVideo ? 'rt' : 'sq'][getIdFromImgUrl(imageUrl)];
                    return saveImage(
                      asset,
                      IMAGE_TYPE.MODULE,
                      hasVideo ? IMAGE_SUBTYPE.INSET_RT : IMAGE_SUBTYPE.INSET_SQ,
                      [id, i, j]
                    );
                  }));
                }
                case CONTENT_MODULE.THUMBNAIL_LIST:
                  return Promise.all(Array(6).fill(0).map((_, j) => saveThumbnailListImage(module, j, [id, i, j])));
                case CONTENT_MODULE.TEAMS:
                  return Promise.all([
                    module.heroImage,
                    module.sections,
                  ].map((asset, j) => (
                    j === 0 ?
                      saveImage(asset, IMAGE_TYPE.MODULE, IMAGE_SUBTYPE.TEAMS_HERO_SQ, [id, i, j]) :
                      asset.map(subAsset => (
                        [
                          subAsset.person1Image,
                          subAsset.person2Image,
                          subAsset.person3Image,
                          subAsset.person4Image,
                          subAsset.person5Image,
                          subAsset.person6Image,
                        ].map((image, k) => (
                          saveImage(image, IMAGE_TYPE.MODULE, IMAGE_SUBTYPE.TEAMS_BIO_SQ, [id, i, j, k])
                        ))
                      ))
                  )));
                case CONTENT_MODULE.VIDEOS: {
                  const isOnlyOneVideo = !module.video2VideoEmbedCode && !module.video3VideoEmbedCode;
                  const firstVideoImage = isOnlyOneVideo ?
                    module.video1AssetCoverPhotoLarge :
                    module.video1AssetCoverPhoto;

                  return Promise.all([
                    firstVideoImage,
                    module.video2AssetCoverPhoto,
                    module.video3AssetCoverPhoto,
                  ].map((asset, j) => (asset ? saveVideoCoverPhotos(asset, j, isOnlyOneVideo, [id, i, j]) : {})));
                }
                default:
                  return {};
              }
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
          // Skip subcategories and dummy content
          if (node.parentCategory || node.dummycontentindex) return undefined;
          return buildPageAndSubcategories(node);
        });

        return Promise.all(createPagePromises).then(resolve);
      });
    }));

module.exports = createCategoryAndArticlePages;
