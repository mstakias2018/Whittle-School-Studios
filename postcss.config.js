const postCssImport = require("postcss-import");
const postCssMixins = require("postcss-mixins");
const postCssCustomMedia = require("postcss-custom-media");
const postCssNested = require("postcss-nested");
const postCssExtend = require("postcss-extend");
const postCssPxToRem = require("postcss-pxtorem");
const postCssNext = require("postcss-cssnext");
const postCssDiscardDuplicates = require("postcss-discard-duplicates");
const postCssReporter = require("postcss-reporter");

module.exports = {
  plugins: [
    postCssReporter(),
    postCssImport(),
    postCssMixins(),
    postCssNext(),
    postCssDiscardDuplicates(),
    postCssCustomMedia(),
    postCssNested(),
    postCssExtend(),
    postCssPxToRem(),
  ],
};
