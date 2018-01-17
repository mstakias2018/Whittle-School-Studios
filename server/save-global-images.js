const {
  LANGUAGE_CONTENTFUL_LOCALE,
  REGION_LANGUAGES,
} = require('../src/constants/regions');
const { GLOBAL_IMAGE_TYPE } = require('../src/constants/images');
const { saveImage } = require('./save-images');
const uuid = require('uuid/v4');

const saveGlobalImages = (graphql, createNode) =>
  REGION_LANGUAGES[process.env.GATSBY_REGION].map(language =>
    new Promise((resolve, reject) => {
      const locale = LANGUAGE_CONTENTFUL_LOCALE[language];

      const globalImageQueries = Object.keys(GLOBAL_IMAGE_TYPE)
        .map(imageType => `
          ${GLOBAL_IMAGE_TYPE[imageType]} {
            file {
              url
              fileName
            }
          }
        `).join('\n');

      graphql(`
          {
            allContentfulGlobalSettings(
              filter: { node_locale: { eq: "${locale}" } }
            ) {
              edges {
                node {
                  dummycontentindex {
                    id
                  }
                  ${globalImageQueries}
                }
              }
            }
          }
        `).then((result) => {
        if (result.errors) {
          console.log(result.errors); // eslint-disable-line no-console
          reject(result.errors);
        }

        const modulePromises = [];

        let settings;
        result.data.allContentfulGlobalSettings.edges.some(({ node }) => {
          if (!node.dummycontentindex) {
            settings = node;
            return true;
          }
          return false;
        });

        Object.keys(GLOBAL_IMAGE_TYPE).forEach((imageType) => {
          const nodeName = GLOBAL_IMAGE_TYPE[imageType];

          if (settings[nodeName]) {
            modulePromises.push(saveImage(
              settings[nodeName],
              imageType
            ).then((src) => {
              const id = uuid();
              // normally we pass imageDataByType context, but we'll create a
              // WhittleImageData node instead this time because passing context
              // to a layout isn't working
              return createNode({
                children: [],
                id,
                imageType,
                internal: {
                  contentDigest: id,
                  type: 'WhittleImageData',
                },
                node_locale: locale,
                parent: null,
                src,
              });
            }));
          }
        });

        return Promise.all(modulePromises).then(resolve);
      });
    }));

module.exports = saveGlobalImages;
