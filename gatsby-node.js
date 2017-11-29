const moment = require('moment-timezone');

const createCategoryAndArticlePages = require('./server/create-category-and-article-pages');
const { resetImageDir } = require('./server/save-images');

const copyNetlifyVariables = () =>
  ['BRANCH', 'COMMIT_REF'].forEach((variableName) => {
    process.env[`GATSBY_${variableName}`] = process.env[variableName];
  });

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  copyNetlifyVariables();
  resetImageDir();
  process.env.GATSBY_BUILD_TIME = moment().tz('America/New_York').format('MMM Do, h:mm a z');

  return createCategoryAndArticlePages(graphql, createPage);
};
