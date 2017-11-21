const { LANGUAGE, LANGUAGE_PATH, REGION_PATH } = require('../constants/regions');

exports.getIsoCode = language => `${LANGUAGE_PATH[language]}-${REGION_PATH[process.env.GATSBY_REGION]}`;

exports.getLanguageFromPathname = (pathname) => {
  const match = pathname.match(/\/([\w-]*)\//);
  if (!match) return LANGUAGE.ENGLISH;

  const isoCode = match[1];
  const [languagePath] = isoCode.split('-');
  return Object.keys(LANGUAGE_PATH).find(language => LANGUAGE_PATH[language] === languagePath);
};
