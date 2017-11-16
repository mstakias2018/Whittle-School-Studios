// TODO env variables

const NETLIFY_BRANCH_MAP = {
  qa: 'QA',
};

const env = NETLIFY_BRANCH_MAP[process.env.BRANCH] || 'DEV';

const CONTENTFUL = {
  DEV: {
    US: {
      spaceId: 'oddfnk02van2',
      accessToken: '1fcf43999b75ddd00146569b70089a03d6e7c686739596ede714f02c41aeb3ab',
    },
    CHINA: {
      spaceId: 'udx5f2jyw09i',
      accessToken: '930860097f4c7dae286d0eb05692bc4c0355c835686cf5d4fb6cbafb547ed87c',
    },
  },
  QA: {
    US: {
      spaceId: 'w6h2a8mys1um',
      accessToken: 'f963757dd3a912fbd0fc5af56eeaa3aa834ccb3dfbc2becbbe9657035a1c4079',
    },
    CHINA: {
      spaceId: '5wvb725fovi7',
      accessToken: '738257cffeae0feab06ea584e4daafc8eade85903ad4ff775b98729d6b3e5242',
    },
  },
};

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: CONTENTFUL[env][process.env.GATSBY_REGION],
    },
    'gatsby-transformer-remark',
  ],
};
