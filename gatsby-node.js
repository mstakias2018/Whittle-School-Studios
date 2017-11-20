const { GraphQLString } = require('graphql');

const createCategoryAndArticlePages = require('./server/create-category-and-article-pages');
const { resetImageDir } = require('./server/save-images');

const copyNetlifyVariables = () =>
  ['BRANCH', 'COMMIT_REF'].forEach((variableName) => {
    process.env[`GATSBY_${variableName}`] = process.env[variableName];
  });

// We need to stringify our JSON fields https://github.com/gatsbyjs/gatsby/issues/1703
exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name === 'ContentfulGlobalSettings') {
    return {
      translations: {
        type: GraphQLString,
        resolve: node => JSON.stringify(node.translations),
      },
    };
  }

  return {};
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  copyNetlifyVariables();
  resetImageDir();

  return createCategoryAndArticlePages(graphql, createPage);
};
