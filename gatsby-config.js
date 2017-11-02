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
        spaceId: process.env.REGION === 'US' ? 'zne00v7thima' : 'mtz9jogvuzoh',
        accessToken:
          process.env.REGION === 'US'
            ? '706046b3c4047c7d84e52c8254245c8739e91927c49d1742e7f75aed6cfb4c51'
            : '21f6ad852687a8e1a08979509aa8fb9ca0a72e3ade3dae5f9fff5c18f15efdd3',
      },
    },
    'gatsby-transformer-remark',
  ],
};
