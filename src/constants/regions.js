const REGION = {
  US: 'US',
  CHINA: 'CHINA',
};

exports.REGION = REGION;

exports.REGION_PATH = {
  [REGION.US]: 'US',
  [REGION.CHINA]: 'CN',
};

const LANGUAGE = {
  ENGLISH: 'ENGLISH',
  CHINESE: 'CHINESE',
};

exports.LANGUAGE = LANGUAGE;

exports.LANGUAGE_CLASS = {
  ENGLISH: 'English',
  CHINESE: 'Chinese',
};

exports.REGION_LANGUAGES = {
  [REGION.US]: [LANGUAGE.ENGLISH],
  [REGION.CHINA]: [LANGUAGE.ENGLISH, LANGUAGE.CHINESE],
};

exports.LANGUAGE_PATH = {
  [LANGUAGE.ENGLISH]: 'en',
  [LANGUAGE.CHINESE]: 'zh',
};

exports.LANGUAGE_CONTENTFUL_LOCALE = {
  [exports.LANGUAGE.ENGLISH]: 'en-US',
  [exports.LANGUAGE.CHINESE]: 'zh-CN',
};
