module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'zne00v7thima',
        accessToken:
          '706046b3c4047c7d84e52c8254245c8739e91927c49d1742e7f75aed6cfb4c51'
      }
    }
  ]
};
