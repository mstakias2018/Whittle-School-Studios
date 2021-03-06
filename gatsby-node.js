const moment = require('moment-timezone');

const createHomePages = require('./server/create-home-pages');
const saveGlobalImages = require('./server/save-global-images');
const createCategoryAndArticlePages = require('./server/create-category-and-article-pages');
const { resetImageDir } = require('./server/save-images');
const { getDefaultLangPath } = require('./src/utils/regions');
const deleteDevPages = require('./server/delete-dev-pages');
const { ENV } = require('./src/constants/env');

const copyNetlifyVariables = () =>
  ['COMMIT_REF'].forEach((variableName) => {
    // only variables beginning with GATSBY_ are available client-side
    process.env[`GATSBY_${variableName}`] = process.env[variableName];
  });

exports.onCreatePage = process.env.GATSBY_ENV === ENV.PRODUCTION ?
  deleteDevPages : undefined;

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createRedirect, createNode, createPage } = boundActionCreators;

  createRedirect({
    fromPath: '/',
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/${getDefaultLangPath()}`,
  });

  copyNetlifyVariables();
  resetImageDir();
  process.env.GATSBY_BUILD_TIME = moment().tz('America/New_York').format('MMM Do, h:mm a z');

  return Promise.all([
    ...createCategoryAndArticlePages(graphql, createPage),
    ...createHomePages(graphql, createPage),
    ...saveGlobalImages(graphql, createNode),
  ]);
};
