// TODO env variables
const { BRANCH_ENV_MAP, ENV } = require('./src/constants/env');
const { CONTENTFUL } = require('./src/constants/contentful');

process.env.GATSBY_ENV = BRANCH_ENV_MAP[process.env.BRANCH] || ENV.DEV;

exports.CONTENTFUL = CONTENTFUL;

module.exports = {
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    {
      options: CONTENTFUL[process.env.GATSBY_ENV][process.env.GATSBY_REGION],
      resolve: 'gatsby-source-contentful',
    },
    'gatsby-transformer-remark',
  ],
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
};
