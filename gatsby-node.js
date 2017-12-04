const moment = require('moment-timezone');

const createHomePages = require('./server/create-home-pages');
const createCategoryAndArticlePages = require('./server/create-category-and-article-pages');
const { resetImageDir } = require('./server/save-images');
const { getIsoCode } = require('./src/utils/regions');
const { REGION_DEFAULT_LANGUAGE } = require('./src/constants/regions');

const copyNetlifyVariables = () =>
  ['BRANCH', 'COMMIT_REF'].forEach((variableName) => {
    process.env[`GATSBY_${variableName}`] = process.env[variableName];
  });

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createRedirect, createPage } = boundActionCreators;

  createRedirect({
    fromPath: '/',
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/${getIsoCode(REGION_DEFAULT_LANGUAGE[process.env.GATSBY_REGION])}`,
  });

  copyNetlifyVariables();
  resetImageDir();
  process.env.GATSBY_BUILD_TIME = moment().tz('America/New_York').format('MMM Do, h:mm a z');

  return Promise.all([
    ...createCategoryAndArticlePages(graphql, createPage),
    ...createHomePages(graphql, createPage),
  ]);
};
