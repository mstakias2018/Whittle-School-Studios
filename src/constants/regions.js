const { ENV } = require('./env');

const REGION = {
  CHINA: 'CHINA',
  US: 'US',
};

exports.REGION_SHORT = {
  [REGION.CHINA]: 'CN',
  [REGION.US]: 'US',
};

exports.REGION = REGION;

const LANGUAGE = {
  CHINESE: 'CHINESE',
  ENGLISH: 'ENGLISH',
};

exports.LANGUAGE = LANGUAGE;

exports.LANGUAGE_CLASS = {
  CHINESE: 'Chinese',
  ENGLISH: 'English',
};

exports.REGION_LANGUAGES = {
  [REGION.US]: [LANGUAGE.ENGLISH],
  [REGION.CHINA]: [LANGUAGE.ENGLISH, LANGUAGE.CHINESE],
};

exports.REGION_DEFAULT_LANGUAGE = {
  [REGION.US]: LANGUAGE.ENGLISH,
  [REGION.CHINA]: LANGUAGE.CHINESE,
};

exports.LANGUAGE_PATH = {
  [LANGUAGE.ENGLISH]: 'en',
  [LANGUAGE.CHINESE]: 'zh',
};

exports.LANGUAGE_CONTENTFUL_LOCALE = {
  [exports.LANGUAGE.ENGLISH]: 'en-US',
  [exports.LANGUAGE.CHINESE]: 'zh-CN',
};

exports.REGION_URLS = {
  [ENV.DEV]: {
    [REGION.US]: 'https://master--whit-us.netlify.com/',
    [REGION.CHINA]: 'https://master--whit-cn.netlify.com/',
  },
  [ENV.QA]: {
    [REGION.US]: 'https://qa--whit-us.netlify.com/',
    [REGION.CHINA]: 'https://qa--whit-cn.netlify.com/',
  },
  [ENV.STAGING]: {
    [REGION.US]: 'https://staging--whit-us.netlify.com/',
    [REGION.CHINA]: 'https://staging--whit-cn.netlify.com/',
  },
  [ENV.PRODUCTION]: {
    [REGION.US]: 'https://whit-us.netlify.com/',
    [REGION.CHINA]: 'https://whit-cn.netlify.com/',
  },
};
