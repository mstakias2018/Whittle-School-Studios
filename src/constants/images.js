/* IMAGE BREAKPOINTS
   Images have their own special breakpoints so we can have more granularity
   about asset sizes per viewport width. */

/* eslint-disable sort-keys */
// Keep these in order
const IMAGE_BP = {
  SMALL: 'sm',
  SMALL_MID: 'smMid',
  MEDIUM: 'md',
  MEDIUM_MID: 'mdMid',
  LARGE: 'lg',
  LARGE_MID: 'lgMid',
};
/* eslint-enable sort-keys */

exports.IMAGE_BP = IMAGE_BP;

exports.IMAGE_MQ = {
  /* 375px */
  [IMAGE_BP.SMALL]: '(max-width: 23.4375rem)',
  /* 650px */
  [IMAGE_BP.SMALL_MID]: '(max-width: 40.625em)',
  /* 872px */
  [IMAGE_BP.MEDIUM]: '(max-width: 54.5em)',
  /* 1100px */
  [IMAGE_BP.MEDIUM_MID]: '(max-width: 68.75em)',
  /* 1280px */
  [IMAGE_BP.LARGE]: '(max-width: 80em)',
  /* 1280px */
  [IMAGE_BP.LARGE_MID]: '(min-width: 80em)',
};

/* IMAGE CONFIG */

const IMAGE_TYPE = {
  INLINE: 'inline',
  MAIN: 'main',
};

exports.IMAGE_TYPE = IMAGE_TYPE;

const IMAGE_SUBTYPE = {
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

const commonFullWidthSquareSizes = {
  [IMAGE_BP.SMALL]: {
    height: 317,
    width: 317,
  },
  [IMAGE_BP.SMALL_MID]: {
    height: 499,
    width: 499,
  },
};

const inlineRectangularVideo = {
  [IMAGE_BP.SMALL]: {
    height: 178,
    width: 317,
  },
  [IMAGE_BP.MEDIUM]: {
    height: 278,
    width: 494,
  },
  [IMAGE_BP.LARGE]: {
    height: 357,
    width: 634,
  },
  [IMAGE_BP.LARGE_MID]: {
    height: 447,
    width: 794,
  },
};

exports.IMAGE_CONFIG = {
  [IMAGE_SUBTYPE.MAIN_CATEGORY]: {
    [IMAGE_BP.SMALL]: commonFullWidthSquareSizes[IMAGE_BP.SMALL],
    [IMAGE_BP.SMALL_MID]: commonFullWidthSquareSizes[IMAGE_BP.SMALL_MID],
    [IMAGE_BP.MEDIUM]: {
      height: 369,
      width: 654,
    },
    [IMAGE_BP.MEDIUM_MID]: {
      height: 466,
      width: 825,
    },
    [IMAGE_BP.LARGE]: {
      height: 409,
      width: 960,
    },
    [IMAGE_BP.LARGE_MID]: {
      height: 550,
      width: 1300,
    },
  },
  [IMAGE_SUBTYPE.MAIN_ARTICLE]: {
    [IMAGE_BP.SMALL]: commonFullWidthSquareSizes[IMAGE_BP.SMALL],
    [IMAGE_BP.SMALL_MID]: commonFullWidthSquareSizes[IMAGE_BP.SMALL_MID],
    [IMAGE_BP.MEDIUM]: {
      height: 369,
      width: 654,
    },
    [IMAGE_BP.MEDIUM_MID]: {
      height: 466,
      width: 825,
    },
    [IMAGE_BP.LARGE]: {
      height: 450,
      width: 797,
    },
    [IMAGE_BP.LARGE_MID]: {
      height: 608,
      width: 1080,
    },
  },
  [IMAGE_SUBTYPE.INLINE_SQ]: {
    [IMAGE_BP.SMALL]: commonFullWidthSquareSizes[IMAGE_BP.SMALL],
    [IMAGE_BP.MEDIUM]: {
      height: 495,
      width: 495,
    },
    [IMAGE_BP.LARGE_MID]: {
      height: 623,
      width: 623,
    },
  },
  [IMAGE_SUBTYPE.INLINE_RT_VIDEO]: inlineRectangularVideo,
  [IMAGE_SUBTYPE.INLINE_RT]: {
    [IMAGE_BP.SMALL]: commonFullWidthSquareSizes[IMAGE_BP.SMALL],
    [IMAGE_BP.SMALL_MID]: commonFullWidthSquareSizes[IMAGE_BP.SMALL_MID],
    [IMAGE_BP.MEDIUM]: inlineRectangularVideo[IMAGE_BP.MEDIUM],
    [IMAGE_BP.LARGE]: inlineRectangularVideo[IMAGE_BP.LARGE],
    [IMAGE_BP.LARGE_MID]: inlineRectangularVideo[IMAGE_BP.LARGE_MID],
  },
};
