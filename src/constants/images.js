/* IMAGE BREAKPOINTS
   Images have their own special breakpoints so we can have more granularity
   about asset sizes per viewport width. */

const IMAGE_BP = {
  SMALL: 'sm',
  SMALL_MID: 'smMid',
  MEDIUM: 'md',
  MEDIUM_MID: 'mdMid',
  LARGE: 'lg',
  LARGE_MID: 'lgMid',
};

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
  MAIN: 'main',
  INLINE: 'inline',
};

exports.IMAGE_TYPE = IMAGE_TYPE;

const IMAGE_SUBTYPE = {
  MAIN_CATEGORY: 'mainCategory',
  MAIN_ARTICLE: 'mainSquare',
  INLINE_SQ: 'inlineSquare',
  INLINE_RT: 'inlineRectangular',
  INLINE_RT_VIDEO: 'inlineRectangularVideo',
};

exports.IMAGE_SUBTYPE = IMAGE_SUBTYPE;

exports.MODULE_IMAGE_TYPE_MAP = {
  ContentfulInlineImage: IMAGE_TYPE.INLINE,
  ContentfulSlideshowCarousel: IMAGE_TYPE.INLINE,
};

// must match Contentful values
exports.IMAGE_SHAPE = {
  CIRCLE: 'Circle',
  SQUARE: 'Square',
  RECTANGLE: 'Rectangle',
};

const commonFullWidthSquareSizes = {
  [IMAGE_BP.SMALL]: {
    width: 317,
    height: 317,
  },
  [IMAGE_BP.SMALL_MID]: {
    width: 499,
    height: 499,
  },
};

const inlineRectangularVideo = {
  [IMAGE_BP.SMALL]: {
    width: 317,
    height: 178,
  },
  [IMAGE_BP.MEDIUM]: {
    width: 494,
    height: 278,
  },
  [IMAGE_BP.LARGE]: {
    width: 634,
    height: 357,
  },
  [IMAGE_BP.LARGE_MID]: {
    width: 794,
    height: 447,
  },
};

exports.IMAGE_CONFIG = {
  [IMAGE_SUBTYPE.MAIN_CATEGORY]: {
    [IMAGE_BP.SMALL]: commonFullWidthSquareSizes[IMAGE_BP.SMALL],
    [IMAGE_BP.SMALL_MID]: commonFullWidthSquareSizes[IMAGE_BP.SMALL_MID],
    [IMAGE_BP.MEDIUM]: {
      width: 654,
      height: 369,
    },
    [IMAGE_BP.MEDIUM_MID]: {
      width: 825,
      height: 466,
    },
    [IMAGE_BP.LARGE]: {
      width: 960,
      height: 409,
    },
    [IMAGE_BP.LARGE_MID]: {
      width: 1300,
      height: 550,
    },
  },
  [IMAGE_SUBTYPE.MAIN_ARTICLE]: {
    [IMAGE_BP.SMALL]: commonFullWidthSquareSizes[IMAGE_BP.SMALL],
    [IMAGE_BP.SMALL_MID]: commonFullWidthSquareSizes[IMAGE_BP.SMALL_MID],
    [IMAGE_BP.MEDIUM]: {
      width: 654,
      height: 369,
    },
    [IMAGE_BP.MEDIUM_MID]: {
      width: 825,
      height: 466,
    },
    [IMAGE_BP.LARGE]: {
      width: 797,
      height: 450,
    },
    [IMAGE_BP.LARGE_MID]: {
      width: 1080,
      height: 608,
    },
  },
  [IMAGE_SUBTYPE.INLINE_SQ]: {
    [IMAGE_BP.SMALL]: commonFullWidthSquareSizes[IMAGE_BP.SMALL],
    [IMAGE_BP.MEDIUM]: {
      width: 495,
      height: 495,
    },
    [IMAGE_BP.LARGE_MID]: {
      width: 623,
      height: 623,
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
