const { REGION } = require('./regions');
const { ENV } = require('./env');

// TODO env vars
exports.CONTENTFUL = {
  [ENV.DEV]: {
    [REGION.US]: {
      accessToken: '1fcf43999b75ddd00146569b70089a03d6e7c686739596ede714f02c41aeb3ab',
      spaceId: 'oddfnk02van2',
      spaceName: 'US - Dev',
    },
    [REGION.CHINA]: {
      accessToken: '930860097f4c7dae286d0eb05692bc4c0355c835686cf5d4fb6cbafb547ed87c',
      spaceId: 'udx5f2jyw09i',
      spaceName: 'China - Dev',
    },
  },
  [ENV.QA]: {
    [REGION.US]: {
      accessToken: 'f963757dd3a912fbd0fc5af56eeaa3aa834ccb3dfbc2becbbe9657035a1c4079',
      spaceId: 'w6h2a8mys1um',
      spaceName: 'US - QA',
    },
    [REGION.CHINA]: {
      accessToken: '738257cffeae0feab06ea584e4daafc8eade85903ad4ff775b98729d6b3e5242',
      spaceId: '5wvb725fovi7',
      spaceName: 'China - QA',
    },
  },
  [ENV.STAGING]: {
    [REGION.US]: {
      accessToken: '4f53f78990f035c64d7a0ec1139e901ed20d184728a46081dc2274e11ea0145b',
      host: 'preview.contentful.com',
      spaceId: 'xtcb8dlyfcnx',
      spaceName: 'US - Production/Staging',
    },
    [REGION.CHINA]: {
      accessToken: '958bab79df1117633995394028c9bb1a6983e9c6f038ce22975a9e94131bddcb',
      host: 'preview.contentful.com',
      spaceId: 'eqfzelyc8uhd',
      spaceName: 'China - Production/Staging',
    },
  },
  [ENV.PRODUCTION]: {
    [REGION.US]: {
      accessToken: '602075ebdd0b6ace43042ae26c9a300ba5d9bb34a16c93bd456f1e72401cca45',
      spaceId: 'xtcb8dlyfcnx',
      spaceName: 'US - Production/Staging',
    },
    [REGION.CHINA]: {
      accessToken: '7718e56bdcb5b6abda7c69b9988fa3c6d4f2682b1b10f37de4ff7f9a8df36d61',
      spaceId: 'eqfzelyc8uhd',
      spaceName: 'China - Production/Staging',
    },
  },
};
