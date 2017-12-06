const { IMAGE_SUBTYPE } = require('../constants/images');
const { BREAKPOINTS_NAME } = require('../constants/breakpoints');
const calcDimensions = require('../utils/image-config');

const RATIO = {
  RECT: 9 / 16,
  SQUARE: 1,
};

const IMAGE_CONFIG = {
  [IMAGE_SUBTYPE.MAIN_CATEGORY]: {
    [BREAKPOINTS_NAME.small]: { colRatio: 1, heightRatio: RATIO.SQUARE },
    [BREAKPOINTS_NAME.medium]: { colRatio: 1, heightRatio: RATIO.RECT },
    [BREAKPOINTS_NAME.large]: { colRatio: 1, heightRatio: 400 / 940 },
  },
  [IMAGE_SUBTYPE.MAIN_ARTICLE]: {
    [BREAKPOINTS_NAME.small]: { colRatio: 1, heightRatio: RATIO.SQUARE },
    [BREAKPOINTS_NAME.medium]: { colRatio: 1, heightRatio: RATIO.RECT },
    [BREAKPOINTS_NAME.large]: { colRatio: 10 / 12, heightRatio: RATIO.RECT },
  },
  [IMAGE_SUBTYPE.INLINE_SQ]: {
    [BREAKPOINTS_NAME.small]: { colRatio: 1, heightRatio: RATIO.SQUARE },
    [BREAKPOINTS_NAME.medium]: { colRatio: 6 / 8, heightRatio: RATIO.SQUARE },
    [BREAKPOINTS_NAME.large]: { colRatio: 6 / 12, heightRatio: RATIO.SQUARE },
  },
  [IMAGE_SUBTYPE.INLINE_RT_VIDEO]: {
    [BREAKPOINTS_NAME.small]: { colRatio: 1, heightRatio: RATIO.RECT },
    [BREAKPOINTS_NAME.medium]: { colRatio: 6 / 8, heightRatio: RATIO.RECT },
    [BREAKPOINTS_NAME.large]: { colRatio: 8 / 12, heightRatio: RATIO.RECT },
  },
  [IMAGE_SUBTYPE.INLINE_RT]: {
    [BREAKPOINTS_NAME.small]: { colRatio: 1, heightRatio: RATIO.SQUARE },
    [BREAKPOINTS_NAME.medium]: { colRatio: 6 / 8, heightRatio: RATIO.RECT },
    [BREAKPOINTS_NAME.large]: { colRatio: 8 / 12, heightRatio: RATIO.RECT },
  },
  [IMAGE_SUBTYPE.CAROUSEL_SQ]: {
    [BREAKPOINTS_NAME.small]: { colRatio: 1, heightRatio: RATIO.SQUARE },
    [BREAKPOINTS_NAME.medium]: { colRatio: 6 / 8, heightRatio: RATIO.RECT, widthRatio: RATIO.RECT },
    [BREAKPOINTS_NAME.large]: { colRatio: 8 / 12, heightRatio: RATIO.RECT, widthRatio: RATIO.RECT },
  },
};

module.exports = calcDimensions(IMAGE_CONFIG);
