const path = require('path');

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators;

  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local Contentful graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.
    graphql(
      `
        {
          allContentfulArticlePage(filter: {isTopLevel: {eq: true}}) {
            edges {
              node {
                id
                slug
                childPages {
                  id
                  slug
                  childPages {
                    id
                    slug
                  }
                }
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        reject(result.errors);
      }

      // Create Article pages
      const articleTemplate = path.resolve('./src/templates/article/index.js');

      const buildPage = (id, slugs) => {
        // Gatsby uses Redux to manage its internal state.
        // Plugins and sites can use functions like "createPage"
        // to interact with Gatsby.

        createPage({
          // Each page is required to have a `path` as well
          // as a template component. The `context` is
          // optional but is often necessary so the template
          // can query data specific to each page.
          path: `/${slugs.join('/')}/`,
          component: articleTemplate,
          context: {
            id
          }
        });
      };

      const buildPageAndChildPages = (
        {slug, id, childPages},
        prevSlugs = []
      ) => {
        const slugs = [...prevSlugs, slug];
        buildPage(id, slugs);
        childPages &&
          childPages.forEach(node => {
            buildPageAndChildPages(node, slugs);
          });
      };

      // We want to create a detailed page for each
      // product node. We'll just use the Contentful id for the slug.
      result.data.allContentfulArticlePage.edges.forEach(({node}) => {
        buildPageAndChildPages(node);
        resolve();
      });
    });
  });
};
