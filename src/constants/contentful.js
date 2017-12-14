const { REGION } = require('./regions');
const { ENV } = require('./env');

exports.CONTENTFUL = {
  [ENV.DEV]: {
    [REGION.US]: {
      accessToken: process.env.CONTENTFUL_DEV_US_ACCESS_TOKEN,
      spaceId: process.env.CONTENTFUL_DEV_US_SPACE_ID,
      spaceName: 'US - Dev',
    },
    [REGION.CHINA]: {
      accessToken: process.env.CONTENTFUL_DEV_CHINA_ACCESS_TOKEN,
      spaceId: process.env.CONTENTFUL_DEV_CHINA_SPACE_ID,
      spaceName: 'China - Dev',
    },
  },
  [ENV.QA]: {
    [REGION.US]: {
      accessToken: process.env.CONTENTFUL_QA_US_ACCESS_TOKEN,
      spaceId: process.env.CONTENTFUL_QA_US_SPACE_ID,
      spaceName: 'US - QA',
    },
    [REGION.CHINA]: {
      accessToken: process.env.CONTENTFUL_QA_CHINA_ACCESS_TOKEN,
      spaceId: process.env.CONTENTFUL_QA_CHINA_SPACE_ID,
      spaceName: 'China - QA',
    },
  },
  [ENV.STAGING]: {
    [REGION.US]: {
      accessToken: process.env.CONTENTFUL_STAGING_US_ACCESS_TOKEN,
      host: 'preview.contentful.com',
      spaceId: process.env.CONTENTFUL_STAGING_US_SPACE_ID,
      spaceName: 'US - Production/Staging',
    },
    [REGION.CHINA]: {
      accessToken: process.env.CONTENTFUL_STAGING_CHINA_ACCESS_TOKEN,
      host: 'preview.contentful.com',
      spaceId: process.env.CONTENTFUL_STAGING_CHINA_SPACE_ID,
      spaceName: 'China - Production/Staging',
    },
  },
  [ENV.PRODUCTION]: {
    [REGION.US]: {
      accessToken: process.env.CONTENTFUL_PRODUCTION_US_ACCESS_TOKEN,
      spaceId: process.env.CONTENTFUL_PRODUCTION_US_SPACE_ID,
      spaceName: 'US - Production/Staging',
    },
    [REGION.CHINA]: {
      accessToken: process.env.CONTENTFUL_PRODUCTION_CHINA_ACCESS_TOKEN,
      spaceId: process.env.CONTENTFUL_PRODUCTION_CHINA_SPACE_ID,
      spaceName: 'China - Production/Staging',
    },
  },
};
