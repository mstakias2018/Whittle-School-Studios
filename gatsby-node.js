const path = require('path');

const {
  LANGUAGE_PATH, LANGUAGE_CONTENTFUL_LOCALE, REGION_LANGUAGES, REGION_PATH,
} = require('./src/constants/regions');

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  const promises = REGION_LANGUAGES[process.env.REGION].map(language =>
    new Promise((resolve, reject) => {
      // The “graphql” function allows us to run arbitrary
      // queries against the local Contentful graphql schema. Think of
      // it like the site has a built-in database constructed
      // from the fetched data that you can run queries against.
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
                  parentCategory: contentpage {
                    id
                  }
                  slug
                  subcategories {
                    id
                    slug
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
        const isoCode = `${LANGUAGE_PATH[language]}-${REGION_PATH[process.env.REGION]}`;

        const buildPage = (id, slugs) => {
          createPage({
            path: `${isoCode}/${slugs.join('/')}/`,
            component: contentPageTemplate,
            context: {
              id,
            },
          });
        };

        const buildPageAndSubcategories = ({ slug, id, subcategories }, prevSlugs = []) => {
          const slugs = [...prevSlugs, slug];
          buildPage(id, slugs);
          if (subcategories) {
            subcategories.forEach((node) => {
              buildPageAndSubcategories(node, slugs);
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
