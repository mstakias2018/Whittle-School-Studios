import { BREAKPOINTS_NAME } from './breakpoints';

const PARALLAX_HOME_TITLE_VALUES = {
  [BREAKPOINTS_NAME.small]: 60,
  [BREAKPOINTS_NAME.medium]: 105,
  [BREAKPOINTS_NAME.large]: 105,
  [BREAKPOINTS_NAME.extraLarge]: 105,
};

const getParallaxHomeTitleValues = breakpoint => [
  {
    duration: 1000,
    properties: [
      {
        endValue: 0,
        property: 'translateY',
        startValue: PARALLAX_HOME_TITLE_VALUES[breakpoint],
      },
    ],
    start: 0,
  },
];

exports.PARALLAX_HOME_TITLE = {
  [BREAKPOINTS_NAME.small]: getParallaxHomeTitleValues(BREAKPOINTS_NAME.small),
  [BREAKPOINTS_NAME.medium]: getParallaxHomeTitleValues(BREAKPOINTS_NAME.medium),
  [BREAKPOINTS_NAME.large]: getParallaxHomeTitleValues(BREAKPOINTS_NAME.large),
  [BREAKPOINTS_NAME.extraLarge]: getParallaxHomeTitleValues(BREAKPOINTS_NAME.extraLarge),
};
