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
