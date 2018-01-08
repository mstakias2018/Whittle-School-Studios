require('dotenv').config();

const { ENV } = require('./src/constants/env');
const { CONTENTFUL_SPACE } = require('./src/constants/contentful');
const { GOOGLE_ANALYTICS } = require('./src/constants/settings');

const BRANCHES = {
  PRODUCTION: 'production',
  QA: 'qa',
  STAGING: 'staging',
};

const BRANCH_ENV_MAP = {
  [BRANCHES.QA]: ENV.QA,
  [BRANCHES.STAGING]: ENV.STAGING,
  [BRANCHES.PRODUCTION]: ENV.PRODUCTION,
};

process.env.GATSBY_ENV = BRANCH_ENV_MAP[process.env.BRANCH] || ENV.DEV;

exports.CONTENTFUL_SPACE = CONTENTFUL_SPACE;

module.exports = {
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    {
      options: CONTENTFUL_SPACE[process.env.GATSBY_ENV][process.env.GATSBY_REGION],
      resolve: 'gatsby-source-contentful',
    },
    'gatsby-transformer-remark',
    {
      options: {
        trackingId: GOOGLE_ANALYTICS[process.env.GATSBY_ENV][process.env.GATSBY_REGION],
      },
      resolve: 'gatsby-plugin-google-analytics',
    },
  ],
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
};
