/* eslint-disable sort-keys */
module.exports = {
  plugins: {
    'postcss-import': {
      root: 'styles',
    },
    'postcss-mixins': {},
    'postcss-for': {},
    'postcss-simple-vars': {},
    'postcss-calc': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
    'postcss-nested': {},
    'postcss-pxtorem': {
      rootValue: 10,
      propList: ['*'],
    },
    'postcss-extend': {},
    'postcss-conditionals': {},
    'postcss-discard-duplicates': {},
  },
};
