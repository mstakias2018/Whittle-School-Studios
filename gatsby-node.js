const path = require('path');

const { LANGUAGE_CONTENTFUL_LOCALE, REGION_LANGUAGES } = require('./src/constants/regions');
const { IMAGE_TYPE, MAIN_IMAGE_TYPE } = require('./src/constants/images');
const { getIsoCode } = require('./src/utils/regions');
const { createQuery, resetImageDir, saveImage } = require('./src/utils/save-images');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  const promises = REGION_LANGUAGES[process.env.GATSBY_REGION].map(language =>
    new Promise((resolve, reject) => {
      graphql(`
          {
            allContentfulContentPage(
              filter: {
                node_locale: { eq: "${LANGUAGE_CONTENTFUL_LOCALE[language]}" }
              }
            ) {
              edges {
                node {
                  id
                  pageType
                  parentCategory: contentpage {
                    id
                  }
                  slug
                  ${createQuery(IMAGE_TYPE.CATEGORY_MAIN)}
                  subcategories {
                    id
                    pageType
                    slug
                    ${createQuery(IMAGE_TYPE.ARTICLE_MAIN)}
                  }
                }
              }
            }
          }
        `).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }

        resetImageDir();

        const contentPageTemplate = path.resolve('./src/templates/content-page/index.js');
        const isoCode = getIsoCode(language);

        const buildPage = (id, slugs, imageDataByType) => {
          createPage({
            path: `${isoCode}/${slugs.join('/')}/`,
            component: contentPageTemplate,
            context: {
              id,
              imageDataByType,
            },
          });
        };

        const buildPageAndSubcategories = (node, prevSlugs = []) => {
          const {
            slug, id, pageType, subcategories,
          } = node;
          const slugs = [...prevSlugs, slug];

          const imageDataByType = {};
          const mainImageType = MAIN_IMAGE_TYPE[pageType];

          const mainImageSourcesBySize = saveImage(node, mainImageType);
          if (mainImageSourcesBySize) {
            imageDataByType[mainImageType] = mainImageSourcesBySize;
          }

          buildPage(id, slugs, imageDataByType);

          if (subcategories) {
            subcategories.forEach((subcategory) => {
              buildPageAndSubcategories(subcategory, slugs);
            });
          }
        };

        result.data.allContentfulContentPage.edges.forEach(({ node }) => {
          // Skip subcategories
          if (!node.parentCategory) {
            buildPageAndSubcategories(node);
            resolve();
          }
        });
      });
    }));

  return Promise.all(promises);
};
