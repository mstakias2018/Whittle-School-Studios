module.exports = {
  plugins: {
    'postcss-conditionals': {},
    'postcss-import': {
      root: 'styles',
    },
    'postcss-mixins': {},
    'postcss-for': {},
    'postcss-simple-vars': {},
    'postcss-calc': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
      features: {
        customProperties: {
          preserve: true,
          warnings: false
        }
      }
    },
    'postcss-nested': {},
    'postcss-pxtorem': {
      rootValue: 10,
      propList: ['*'],
    },
    'postcss-extend': {},
    'postcss-discard-duplicates': {},
  },
};
