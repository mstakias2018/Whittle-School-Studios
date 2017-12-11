const path = require('path');

const {
  LANGUAGE_CONTENTFUL_LOCALE,
  LANGUAGE_PATH,
  REGION_LANGUAGES,
} = require('../src/constants/regions');

const createHomePages = (graphql, createPage) =>
  REGION_LANGUAGES[process.env.GATSBY_REGION].map(language =>
    new Promise((resolve, reject) => {
      graphql(`
          {
            contentfulHomePage(
              node_locale: { eq: "${LANGUAGE_CONTENTFUL_LOCALE[language]}" }
            ) {
              id
            }
          }
        `).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }

        const homePageTemplate = path.resolve('./src/templates/home-page/index.js');

        const buildPage = ({ id }) =>
          createPage({
            component: homePageTemplate,
            context: { id },
            path: LANGUAGE_PATH[language],
          });

        buildPage(result.data.contentfulHomePage);
        resolve();
      });
    }));

module.exports = createHomePages;
