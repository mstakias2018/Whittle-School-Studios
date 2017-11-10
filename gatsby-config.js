module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        // TODO[@sarahatwork] env variables
        spaceId: process.env.GATSBY_REGION === 'US' ? 'w6h2a8mys1um' : '5wvb725fovi7',
        accessToken:
          process.env.GATSBY_REGION === 'US'
            ? 'f963757dd3a912fbd0fc5af56eeaa3aa834ccb3dfbc2becbbe9657035a1c4079'
            : '738257cffeae0feab06ea584e4daafc8eade85903ad4ff775b98729d6b3e5242',
      },
    },
    'gatsby-transformer-remark',
  ],
};
