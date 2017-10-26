module.exports = {
  plugins: [
    require('postcss-reporter'),
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-discard-duplicates'),
    require('postcss-custom-media'),
    require('postcss-nested'),
    require('postcss-extend'),
    require('postcss-pxtorem'),
  ],
};
