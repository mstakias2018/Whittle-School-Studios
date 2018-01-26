const {
  LANGUAGE_PATH,
  REGION_DEFAULT_LANGUAGE,
  REGION_LANGUAGES,
} = require('../constants/regions');

exports.getDefaultLangPath = (region = process.env.GATSBY_REGION) =>
  LANGUAGE_PATH[REGION_DEFAULT_LANGUAGE[region]];

exports.getLanguageFromPathname = (pathname) => {
  const match = pathname.match(/\/(\w*)(\/.*)?/);
  if (!match) return REGION_DEFAULT_LANGUAGE[process.env.GATSBY_REGION];

  const languagePath = match[1];
  const lang = Object.keys(LANGUAGE_PATH).find(language => LANGUAGE_PATH[language] === languagePath);
  const regionLanguages = REGION_LANGUAGES[process.env.GATSBY_REGION];

  return regionLanguages.includes(lang) ? lang : REGION_DEFAULT_LANGUAGE[process.env.GATSBY_REGION];
};
