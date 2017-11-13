const { BREAKPOINT } = require('./breakpoints');
const { PAGE_TYPE } = require('./settings');

const IMAGE_TYPE = {
  CATEGORY_MAIN: 'cm',
  ARTICLE_MAIN: 'am',
};

exports.MAIN_IMAGE_TYPE = {
  [PAGE_TYPE.ARTICLE]: IMAGE_TYPE.ARTICLE_MAIN,
  [PAGE_TYPE.CATEGORY]: IMAGE_TYPE.CATEGORY_MAIN,
};

exports.IMAGE_TYPE = IMAGE_TYPE;

exports.NODE_NAME = {
  [IMAGE_TYPE.CATEGORY_MAIN]: 'mainImage',
  [IMAGE_TYPE.ARTICLE_MAIN]: 'mainImage',
};

// TODO Finalize sizes
// All _MAX values are tests for now
exports.IMAGE_CONFIG = {
  [IMAGE_TYPE.CATEGORY_MAIN]: {
    [BREAKPOINT.SMALL]: {
      width: 270,
      height: 270,
    },
    [BREAKPOINT.SMALL_MID]: {
      width: 494, // 76% of 650
      height: 494,
    },
    [BREAKPOINT.MEDIUM]: {
      width: 620,
      height: 350,
    },
    [BREAKPOINT.MEDIUM_MID]: {
      width: 825, // 75% of 1100
      height: 466,
    },
    [BREAKPOINT.LARGE]: {
      width: 940,
      height: 400,
    },
    [BREAKPOINT.LARGE_MID]: {
      width: 1300,
      height: 550,
    },
  },
  [IMAGE_TYPE.ARTICLE_MAIN]: {
    [BREAKPOINT.SMALL]: {
      width: 270,
      height: 270,
    },
    [BREAKPOINT.SMALL_MID]: {
      width: 494, // 76% of 650
      height: 494,
    },
    [BREAKPOINT.MEDIUM]: {
      width: 620,
      height: 380,
    },
    [BREAKPOINT.MEDIUM_MID]: {
      width: 825, // 75% of 1100
      height: 506,
    },
    [BREAKPOINT.LARGE]: {
      width: 780,
      height: 440,
    },
    [BREAKPOINT.LARGE_MID]: {
      width: 1080,
      height: 608,
    },
  },
};
