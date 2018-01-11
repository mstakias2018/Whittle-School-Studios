const { BREAKPOINTS_NAME } = require('./breakpoints');

exports.PAGE_PADDING = {
  PAGE_PADDING_LG: 40,
  PAGE_PADDING_MD: 24,
  PAGE_PADDING_SM: 10,
};

exports.COMPONENT_BOTTOM_PADDING = {
  [BREAKPOINTS_NAME.extraLarge]: 60,
  [BREAKPOINTS_NAME.large]: 60,
  [BREAKPOINTS_NAME.medium]: 60,
  [BREAKPOINTS_NAME.small]: 30,
};

exports.FAB_SIZE = {
  [BREAKPOINTS_NAME.extraLarge]: 130,
  [BREAKPOINTS_NAME.large]: 130,
  [BREAKPOINTS_NAME.medium]: 100,
  [BREAKPOINTS_NAME.small]: 100,
};
