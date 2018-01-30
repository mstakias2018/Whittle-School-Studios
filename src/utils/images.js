const { IMAGE_SIZE, IMAGE_MQ } = require('../constants/images');

exports.adaptSourcesBySize = (sourcesBySize) => {
  // We use the IMAGE_SIZE keys to ensure breakpoints
  // are in the correct order
  const sourceList = Object.keys(IMAGE_SIZE).reduce((acc, key) => {
    const breakpoint = IMAGE_SIZE[key];
    const sourceInfo = sourcesBySize[breakpoint];
    if (sourceInfo) {
      acc.push({
        breakpoint,
        media: IMAGE_MQ[breakpoint],
        src: sourceInfo.src,
        srcSet: sourceInfo.srcSet,
      });
    }
    return acc;
  }, []);

  const largestImageInfo = sourceList[sourceList.length - 1];

  return {
    largestBreakpoint: largestImageInfo ? largestImageInfo.breakpoint : '',
    largestSrc: largestImageInfo ? largestImageInfo.src : '',
    sourceList,
  };
};

/*
   Image URL formats are:
   //images.contentful.com/[space id]/[image id]/[image locale id]/filename

   Example:
   //images.contentful.com/udx5f2jyw09i/5iM0C8Tviguwks0kMCkyQE/95e623e0bdf68408c3206d8cc495ea56/campus.jpg
*/

exports.getIdFromImgUrl = (url) => {
  const matches = url.match(/\/\/images\.contentful\.com\/\w+\/(\w+)/);
  return matches && matches[1];
};

exports.getLocaleIdFromImgUrl = (url) => {
  const matches = url.match(/\/\/images\.contentful\.com\/\w+\/\w+\/(\w+)/);
  return matches && matches[1];
};

const cleanImageSources = imageSources =>
  (imageSources && Object.keys(imageSources).length ? imageSources : undefined);

// Replace empty objects we usedto prevent a weakmap error with undefined
exports.cleanImageData = imageData =>
  imageData.map(data =>
    (Array.isArray(data) ? data.map(cleanImageSources) : cleanImageSources(data)));
