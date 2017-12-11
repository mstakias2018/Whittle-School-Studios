const {
  LANGUAGE,
  LANGUAGE_PATH,
  REGION_DEFAULT_LANGUAGE,
} = require('../constants/regions');

exports.getDefaultLangPath = (region = process.env.GATSBY_REGION) =>
  LANGUAGE_PATH[REGION_DEFAULT_LANGUAGE[region]];

exports.getLanguageFromPathname = (pathname) => {
  const match = pathname.match(/\/(\w*)(\/.*)?/);
  if (!match) return LANGUAGE.ENGLISH;

  const languagePath = match[1];
  return Object.keys(LANGUAGE_PATH).find(language => LANGUAGE_PATH[language] === languagePath);
};
