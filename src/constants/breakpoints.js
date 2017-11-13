// TODO consolidate this with other constants
exports.BREAKPOINTS = {
  BREAKPOINT_SM: 0,
  BREAKPOINT_MD: 650,
  BREAKPOINT_LG: 1100,
  BREAKPOINT_XLG: 1600,
};

const BREAKPOINT = {
  SMALL: 'sm',
  SMALL_MID: 'smMid',
  MEDIUM: 'md',
  MEDIUM_MID: 'mdMid',
  LARGE: 'lg',
  LARGE_MID: 'lgMid',
};

exports.BREAKPOINT = BREAKPOINT;

// TODO convert to rem
exports.MEDIA_QUERIES = {
  [BREAKPOINT.SMALL]: '(max-width: 500px)',
  [BREAKPOINT.SMALL_MID]: '(max-width: 650px) and (min-width: 500px)',
  [BREAKPOINT.MEDIUM]: '(max-width: 875px) and (min-width: 650px)',
  [BREAKPOINT.MEDIUM_MID]: '(max-width: 1100px) and (min-width: 875px)',
  [BREAKPOINT.LARGE]: '(max-width: 1350px) and (min-width: 1100px)',
  [BREAKPOINT.LARGE_MID]: '(min-width: 1350px)',
};
