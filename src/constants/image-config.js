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
  [IMAGE_SUBTYPE.INLINE_RT_HERO_VIDEO]: {
    [BREAKPOINTS_NAME.small]: { colRatio: 1, heightRatio: RATIO.RECT },
    [BREAKPOINTS_NAME.medium]: { colRatio: 1, heightRatio: RATIO.RECT },
    [BREAKPOINTS_NAME.large]: { colRatio: 6 / 12, heightRatio: RATIO.RECT },
  },
  [IMAGE_SUBTYPE.INLINE_RT_HERO_VIDEO_SMALL]: {
    [BREAKPOINTS_NAME.small]: { colRatio: 2 / 4, heightRatio: RATIO.RECT },
    [BREAKPOINTS_NAME.medium]: { colRatio: 4 / 8, heightRatio: RATIO.RECT },
    [BREAKPOINTS_NAME.large]: { colRatio: 2 / 12, heightRatio: RATIO.RECT },
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
  [IMAGE_SUBTYPE.INSET_SQ]: {
    [BREAKPOINTS_NAME.small]: { colRatio: 2 / 4, heightRatio: RATIO.SQUARE },
    [BREAKPOINTS_NAME.medium]: { colRatio: 2 / 8, heightRatio: RATIO.SQUARE },
    [BREAKPOINTS_NAME.large]: { colRatio: 3 / 12, heightRatio: RATIO.SQUARE },
  },
  [IMAGE_SUBTYPE.INSET_RT]: {
    [BREAKPOINTS_NAME.small]: { colRatio: 2 / 4, heightRatio: RATIO.RECT },
    [BREAKPOINTS_NAME.medium]: { colRatio: 3 / 8, heightRatio: RATIO.RECT },
    [BREAKPOINTS_NAME.large]: { colRatio: 3 / 12, heightRatio: RATIO.RECT },
  },
  [IMAGE_SUBTYPE.TEAMS_HERO_SQ]: {
    [BREAKPOINTS_NAME.small]: { colRatio: 3 / 4, heightRatio: RATIO.SQUARE },
    [BREAKPOINTS_NAME.medium]: { colRatio: 3 / 8, heightRatio: RATIO.SQUARE },
    [BREAKPOINTS_NAME.large]: { colRatio: 3 / 12, heightRatio: RATIO.SQUARE },
  },
  [IMAGE_SUBTYPE.TEAMS_BIO_SQ]: {
    [BREAKPOINTS_NAME.small]: { colRatio: 2 / 4, heightRatio: RATIO.SQUARE },
    [BREAKPOINTS_NAME.medium]: { colRatio: 3 / 8, heightRatio: RATIO.SQUARE },
    [BREAKPOINTS_NAME.large]: { colRatio: 2 / 12, heightRatio: RATIO.SQUARE },
  },
};

module.exports = calcDimensions(IMAGE_CONFIG);
