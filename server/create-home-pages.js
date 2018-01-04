const path = require('path');

const { STRUCTURAL_COMPONENTS } = require('../src/constants/contentful');
const {
  LANGUAGE_CONTENTFUL_LOCALE,
  LANGUAGE_PATH,
  REGION_LANGUAGES,
} = require('../src/constants/regions');
const { IMAGE_TYPE, IMAGE_SUBTYPE } = require('../src/constants/images');
const {
  createQuery,
  saveImage,
} = require('./save-images');

const createHomePages = (graphql, createPage) =>
  REGION_LANGUAGES[process.env.GATSBY_REGION].map(language =>
    new Promise((resolve, reject) => {
      graphql(`
          {
            contentfulHomePage(
              node_locale: { eq: "${LANGUAGE_CONTENTFUL_LOCALE[language]}" }
            ) {
              id: contentful_id
              campusModule {
                image {
                  ${createQuery(IMAGE_SUBTYPE.INLINE_RT)}
                }
                architectImage {
                  ${createQuery(IMAGE_SUBTYPE.INLINE_SQ)}
                }
              }
            }
          }
        `).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }

        const homePageTemplate = path.resolve('./src/templates/home-page/index.js');

        const buildPage = (id, imageDataByType) => {
          const context = {
            id,
            imageDataByType,
          };
          createPage({
            component: homePageTemplate,
            context,
            path: LANGUAGE_PATH[language],
          });
        };

        const modulePromises = [];
        const imageDataByType = {};

        const {
          id,
          campusModule,
        } = result.data.contentfulHomePage;

        if (campusModule) {
          imageDataByType[STRUCTURAL_COMPONENTS.HOME_CAMPUSES] = {};

          if (campusModule.image) {
            const campusImage = saveImage(
              campusModule.image,
              IMAGE_TYPE.MODULE,
              IMAGE_SUBTYPE.INLINE_RT,
              [id, STRUCTURAL_COMPONENTS.HOME_CAMPUSES]); // eslint-disable-line function-paren-newline
            if (campusImage) {
              modulePromises.push(campusImage.then((imageData) => {
                imageDataByType[STRUCTURAL_COMPONENTS.HOME_CAMPUSES].image = imageData;
              }));
            }
          }

          if (campusModule.architectImage) {
            const architectImage = saveImage(
              campusModule.architectImage,
              IMAGE_TYPE.MODULE,
              IMAGE_SUBTYPE.INLINE_SQ,
              [id, STRUCTURAL_COMPONENTS.HOME_CAMPUSES]); // eslint-disable-line function-paren-newline
            if (architectImage) {
              modulePromises.push(architectImage.then((imageData) => {
                imageDataByType[STRUCTURAL_COMPONENTS.HOME_CAMPUSES].architectImage = imageData;
              }));
            }
          }
        }

        return Promise.all(modulePromises).then(() => buildPage(id, imageDataByType)).then(resolve);
      });
    }));

module.exports = createHomePages;
