const { REGION } = require('./regions');
const { ENV } = require('./env');

exports.CONTENTFUL_SPACE = {
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

/* These values are the Contentful module names,
   prefaced by 'Contentful' (added by Gatsby) */
exports.CONTENT_MODULE = {
  BODY_TEXT: 'ContentfulBodyText',
  CAROUSEL: 'ContentfulSlideshowCarousel',
  INLINE_IMAGE: 'ContentfulInlineImage',
  INLINE_VIDEO: 'ContentfulInlineVideo',
  LIST: 'ContentfulList',
  OPENAPPLY_IFRAME: 'ContentfulOpenApplyIFrame',
  POST: 'ContentfulPost',
  QUOTE: 'ContentfulQuote',
  SECTION_TITLE: 'ContentfulSectionTitle',
  TEAMS: 'ContentfulTeams',
  THREE_UP_BREAKER: 'ContentfulThreeUpBreaker',
  THUMBNAIL_LIST: 'ContentfulThumbnailList',
  VIDEOS: 'ContentfulVideos',
};

exports.STRUCTURAL_COMPONENTS = {
  HOME_CAMPUSES: 'ContentfulCampuses',
  HOME_HERO: 'ContentfulHero',
  HOME_TEAMS: 'ContentfulTeams',
};
