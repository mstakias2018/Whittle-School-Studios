const { BREAKPOINTS_NAME } = require('../constants/breakpoints');
const { IMAGE_SIZE } = require('../constants/images');

const VIEWPORT_PX = {
  [IMAGE_SIZE.SMALL]: 375,
  [IMAGE_SIZE.SMALL_MID]: 650,
  [IMAGE_SIZE.MEDIUM]: 872,
  [IMAGE_SIZE.MEDIUM_MID]: 1100,
  [IMAGE_SIZE.LARGE]: 1280,
};

// keep in sync with --container-xl CSS variable
const XL_VIEWPORT_PX = 1300;

// keep in sync with --container-margin CSS variables
const CONTAINER_MARGIN_PERCENT = {
  [IMAGE_SIZE.SMALL]: 0.05,
  [IMAGE_SIZE.SMALL_MID]: 0.1079,
  [IMAGE_SIZE.MEDIUM]: 0.06946,
  [IMAGE_SIZE.MEDIUM_MID]: 0.07,
  [IMAGE_SIZE.LARGE]: 0.1083,
};

// keep in sync with --component-wrapper-margin CSS variables
const PAGE_MARGIN_PX = {
  [IMAGE_SIZE.SMALL]: 10,
  [IMAGE_SIZE.SMALL_MID]: 10,
  [IMAGE_SIZE.MEDIUM]: 24,
  [IMAGE_SIZE.MEDIUM_MID]: 24,
  [IMAGE_SIZE.LARGE]: 40,
};

// keep in sync with --grid-gutter CSS variables
const GRID_GUTTER_PX = {
  [IMAGE_SIZE.SMALL]: 5,
  [IMAGE_SIZE.SMALL_MID]: 5,
  [IMAGE_SIZE.MEDIUM]: 10,
  [IMAGE_SIZE.MEDIUM_MID]: 10,
  [IMAGE_SIZE.LARGE]: 10,
  [IMAGE_SIZE.LARGE_MID]: 10,
};

// This way, we only define config for three breakpoints, but our settings
// get mapped to six granular breakpoints so we always load the smallest image
const BP_TO_IMAGE_SIZE = {
  [BREAKPOINTS_NAME.large]: [IMAGE_SIZE.LARGE, IMAGE_SIZE.LARGE_MID],
  [BREAKPOINTS_NAME.medium]: [IMAGE_SIZE.MEDIUM, IMAGE_SIZE.MEDIUM_MID],
  [BREAKPOINTS_NAME.small]: [IMAGE_SIZE.SMALL, IMAGE_SIZE.SMALL_MID],
};

// Get image dimensions for a given breakpoint based on columns and ratio
const calcDimensionsForBP = (bp, colRatio, heightRatio, widthRatio = 1) => {
  let gridWidth;
  if (bp === IMAGE_SIZE.LARGE_MID) {
    gridWidth = XL_VIEWPORT_PX;
  } else {
    const pageWidth = VIEWPORT_PX[bp] - (2 * PAGE_MARGIN_PX[bp]);
    gridWidth = pageWidth * (1 - (2 * CONTAINER_MARGIN_PERCENT[bp]));
  }
  const gutterWidth = 2 * GRID_GUTTER_PX[bp];

  // Calculate the size of the frame
  // This is usually the same as the width, but sometimes (sq carousel images)
  // we need to apply a ratio to the frame
  let frame = ((gridWidth + gutterWidth) * colRatio) - gutterWidth;
  frame = Math.ceil(frame);

  return {
    height: Math.ceil(frame * heightRatio),
    width: widthRatio ? Math.ceil(frame * widthRatio) : frame,
  };
};

exports.calcDimensionsForBP = calcDimensionsForBP;

/*
  Turn this:
  {
    [IMAGE_SUBTYPE.MAIN_CATEGORY]: {
      [BREAKPOINTS_NAME.small]: { colRatio: 1, heightRatio: RATIO.SQUARE },
      [BREAKPOINTS_NAME.medium]: { colRatio: 1, heightRatio: RATIO.RECT },
      ...
  }

  Into this:
  {
    [IMAGE_SUBTYPE.MAIN_CATEGORY]: {
      [IMAGE_BP.SMALL]: { height: 270, width: 270 },
      [IMAGE_BP.SMALL_MID]: { height: 492, width: 492 },
      [IMAGE_BP.MEDIUM]: { height: 640, width: 400 },
      [IMAGE_BP.MEDIUM_MID]: { height: 800, width: 600 },
      ...
  }
}
*/
exports.calcDimensions = imageConfig =>
  Object.keys(imageConfig).reduce((newConf, imageSubtype) => {
    const subtypeConfig = imageConfig[imageSubtype];
    const bps = Object.keys(imageConfig[imageSubtype]);

    const calculatedSizes = bps.reduce((newSubtypeConf, bp) => {
      const { colRatio, heightRatio, widthRatio } = subtypeConfig[bp];
      const sizeData = BP_TO_IMAGE_SIZE[bp].reduce((data, size) =>
        Object.assign({}, data, {
          [size]: calcDimensionsForBP(size, colRatio, heightRatio, widthRatio),
        }), {});
      return Object.assign({}, newSubtypeConf, sizeData);
    }, {});

    return Object.assign({}, newConf, {
      [imageSubtype]: calculatedSizes,
    });
  }, {});
