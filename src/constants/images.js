/* IMAGE BREAKPOINTS
   Images have their own special breakpoints so we can have more granularity
   about asset sizes per viewport width. */

/* eslint-disable sort-keys */
// Keep these in order
const IMAGE_SIZE = {
  SMALL: 'sm',
  SMALL_MID: 'smMid',
  MEDIUM: 'md',
  MEDIUM_MID: 'mdMid',
  LARGE: 'lg',
  LARGE_MID: 'lgMid',
};
/* eslint-enable sort-keys */

exports.IMAGE_SIZE = IMAGE_SIZE;

exports.IMAGE_MQ = {
  /* 375px */
  [IMAGE_SIZE.SMALL]: '(max-width: 23.4375rem)',
  /* 650px */
  [IMAGE_SIZE.SMALL_MID]: '(max-width: 40.625em)',
  /* 872px */
  [IMAGE_SIZE.MEDIUM]: '(max-width: 54.5em)',
  /* 1100px */
  [IMAGE_SIZE.MEDIUM_MID]: '(max-width: 68.75em)',
  /* 1280px */
  [IMAGE_SIZE.LARGE]: '(max-width: 80em)',
  /* 1280px */
  [IMAGE_SIZE.LARGE_MID]: '(min-width: 80em)',
};

/* IMAGE CONFIG */

const IMAGE_TYPE = {
  INLINE: 'inline',
  MAIN: 'main',
};

exports.IMAGE_TYPE = IMAGE_TYPE;

const IMAGE_SUBTYPE = {
  CAROUSEL_SQ: 'carouselSquare',
  INLINE_RT: 'inlineRectangular',
  INLINE_RT_VIDEO: 'inlineRectangularVideo',
  INLINE_SQ: 'inlineSquare',
  MAIN_ARTICLE: 'mainSquare',
  MAIN_CATEGORY: 'mainCategory',
};

exports.IMAGE_SUBTYPE = IMAGE_SUBTYPE;

exports.MODULE_IMAGE_TYPE_MAP = {
  ContentfulInlineImage: IMAGE_TYPE.INLINE,
  ContentfulSlideshowCarousel: IMAGE_TYPE.INLINE,
};

// must match Contentful values
exports.IMAGE_SHAPE = {
  CIRCLE: 'Circle',
  RECTANGLE: 'Rectangle',
  SQUARE: 'Square',
};
