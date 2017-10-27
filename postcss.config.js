module.exports = {
  plugins: {
    'postcss-conditionals': {},
    'postcss-import': {
      root: 'styles',
    },
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'postcss-for': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
    'postcss-nested': {},
    'postcss-pxtorem': {
      rootValue: 10,
      propList: ['*']
    },
    'postcss-extend': {},
    'postcss-discard-duplicates': {},
  },
};
