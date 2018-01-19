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

/* We would prefer to use em but switching back to px because of this Safari bug
   https://bugs.webkit.org/show_bug.cgi?id=159635 */
exports.IMAGE_MQ = {
  [IMAGE_SIZE.SMALL]: '(max-width: 375px)',
  [IMAGE_SIZE.SMALL_MID]: '(max-width: 650px)',
  [IMAGE_SIZE.MEDIUM]: '(max-width: 872px)',
  [IMAGE_SIZE.MEDIUM_MID]: '(max-width: 1100px)',
  [IMAGE_SIZE.LARGE]: '(max-width: 1280px)',
  [IMAGE_SIZE.LARGE_MID]: '(min-width: 1280px',
};

/* IMAGE CONFIG */

const IMAGE_TYPE = {
  FAB_TEXT: 'fabText',
  HEADER_LOGO: 'headerLogo',
  MAIN: 'main',
  MODULE: 'module',
};

exports.IMAGE_TYPE = IMAGE_TYPE;

// values must match contentful field names
exports.GLOBAL_IMAGE_TYPE = {
  [IMAGE_TYPE.FAB_TEXT]: 'fabText',
  [IMAGE_TYPE.HEADER_LOGO]: 'headerLogo',
};

exports.IMAGE_SUBTYPE = {
  CAMPUS: 'campus',
  CAMPUS_ARCHITECT: 'campusArchitect',
  CAMPUS_COVER: 'campusVideo',
  CAROUSEL_SQ: 'carouselSq',
  HERO: 'hero',
  INLINE_RT: 'inlineRt',
  INLINE_RT_HERO_VIDEO: 'inlineRtHeroVideo',
  INLINE_RT_HERO_VIDEO_LARGE: 'inlineRtHeroVideoLarge',
  INLINE_RT_HERO_VIDEO_SMALL: 'inlineRtHeroVideoSmall',
  INLINE_RT_VIDEO: 'inlineRtVideo',
  INLINE_SQ: 'inlineSq',
  INSET_RT: 'insetRt',
  INSET_SQ: 'insetSq',
  MAIN_ARTICLE: 'mainArt',
  MAIN_CATEGORY: 'mainCat',
  TEAMS_BIO_SQ: 'teamsBioSq',
  TEAMS_HERO_SQ: 'teamsHeroSq',
};

// must match Contentful values
exports.IMAGE_SHAPE = {
  CIRCLE: 'Circle',
  RECTANGLE: 'Rectangle',
  SQUARE: 'Square',
};
