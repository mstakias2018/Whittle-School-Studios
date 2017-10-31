exports.REGION = {
  US: 'US',
  CHINA: 'CHINA',
};

exports.REGION_PATH = {
  [exports.REGION.US]: 'us',
  [exports.REGION.CHINA]: 'cn',
};

exports.LANGUAGE = {
  ENGLISH: 'ENGLISH',
  CHINESE: 'CHINESE',
};

exports.REGION_LANGUAGES = {
  [exports.REGION.US]: [exports.LANGUAGE.ENGLISH],
  [exports.REGION.CHINA]: [exports.LANGUAGE.ENGLISH, exports.LANGUAGE.CHINESE],
};

exports.LANGUAGE_PATH = {
  [exports.LANGUAGE.ENGLISH]: 'en',
  [exports.LANGUAGE.CHINESE]: 'zh',
};

exports.LANGUAGE_LOCALE = {
  [exports.LANGUAGE.ENGLISH]: 'en-US',
  [exports.LANGUAGE.CHINESE]: 'zh-CN',
};
