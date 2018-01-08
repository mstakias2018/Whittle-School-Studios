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
      const locale = LANGUAGE_CONTENTFUL_LOCALE[language];

      graphql(`
          {
            allContentfulHomePage(
              filter: { node_locale: { eq: "${locale}" } }
            ) {
              edges {
                node {
                  dummycontentindex {
                    id
                  }
                  id: contentful_id
                  hero {
                    image {
                      ${createQuery(IMAGE_SUBTYPE.INLINE_RT)}
                    }
                  }
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
            }
          }
        `).then((result) => {
        if (result.errors) {
          console.log(result.errors); // eslint-disable-line no-console
          reject(result.errors);
        }

        const homePageTemplate = path.resolve('./src/templates/home-page/index.js');

        const buildPage = (id, imageDataByType) => {
          const context = {
            id,
            imageDataByType,
            locale,
          };
          createPage({
            component: homePageTemplate,
            context,
            path: LANGUAGE_PATH[language],
          });
        };

        const modulePromises = [];
        const imageDataByType = {};

        let homepage;
        result.data.allContentfulHomePage.edges.some(({ node }) => {
          if (!node.dummycontentindex) {
            homepage = node;
            return true;
          }
          return false;
        });

        const { id, campusModule, hero } = homepage;

        if (hero) {
          imageDataByType[STRUCTURAL_COMPONENTS.HOME_HERO] = {};

          if (hero.image) {
            const heroImage = saveImage(
              hero.image,
              IMAGE_TYPE.MODULE,
              IMAGE_SUBTYPE.INLINE_RT,
              [id, STRUCTURAL_COMPONENTS.HOME_HERO]
            );
            if (heroImage) {
              modulePromises.push(heroImage.then((imageData) => {
                imageDataByType[STRUCTURAL_COMPONENTS.HOME_HERO].image = imageData;
              }));
            }
          }
        }

        if (campusModule) {
          imageDataByType[STRUCTURAL_COMPONENTS.HOME_CAMPUSES] = {};

          if (campusModule.image) {
            const campusImage = saveImage(
              campusModule.image,
              IMAGE_TYPE.MODULE,
              IMAGE_SUBTYPE.INLINE_RT,
              [id, STRUCTURAL_COMPONENTS.HOME_CAMPUSES]
            );
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
              [id, STRUCTURAL_COMPONENTS.HOME_CAMPUSES]
            );
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
