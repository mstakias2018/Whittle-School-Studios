const { ENV } = require('./env');
const { REGION } = require('./regions');

const PAGE_TYPE = {
  ARTICLE: 'Article', // must match Contentful value
  CATEGORY: 'Category', // must match Contentful value
  HOME: 'Home',
};

exports.NAV_DIRECTIONS = {
  NEXT: 'next',
  PREVIOUS: 'previous',
};

exports.PAGE_TYPE = PAGE_TYPE;

exports.QUOTE_TYPE = {
  BLOCK: 'block-quote', // must match Contentful value
  PULL: 'pull-quote', // must match Contentful value
};

exports.PAGE_TYPES = [PAGE_TYPE.ARTICLE, PAGE_TYPE.CATEGORY, PAGE_TYPE.HOME];


exports.SUBMENU_BREAK = { SMALL: 2 };

exports.HOME_SECTION_TITLE_COLOR = {
  GRAY: 'gray',
  YELLOW: 'yellow',
};

exports.HOME_SECTION_TITLE_POSITION = {
  LEFT: 'left',
  RIGHT: 'right',
};

exports.HOME_TEAMS_STATISTIC_TYPE = {
  PERCENTAGE: 'percentage', // must match Contentful value
  RATIO: 'ratio', // must match Contentful value
};

exports.GOOGLE_ANALYTICS = {
  [ENV.DEV]: {
    [REGION.US]: 'UA-112001805-1',
    [REGION.CHINA]: 'UA-112001805-2',
  },
  [ENV.QA]: {
    [REGION.US]: 'UA-112001805-3',
    [REGION.CHINA]: 'UA-112001805-4',
  },
  [ENV.STAGING]: {
    [REGION.US]: 'UA-112001805-5',
    [REGION.CHINA]: 'UA-112001805-6',
  },
  [ENV.PRODUCTION]: {
    [REGION.US]: 'UA-112001805-7',
    [REGION.CHINA]: 'UA-112001805-8',
  },
};
