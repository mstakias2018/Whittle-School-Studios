const { IMAGE_SIZE, IMAGE_MQ } = require('../constants/images');

exports.adaptSourcesBySize = (sourcesBySize) => {
  // We use the IMAGE_SIZE keys to ensure breakpoints
  // are in the correct order
  const sourceList = Object.values(IMAGE_SIZE).reduce((acc, breakpoint) => {
    const sourceInfo = sourcesBySize[breakpoint];
    if (sourceInfo) {
      acc.push({
        media: IMAGE_MQ[breakpoint],
        src: sourceInfo.src,
        srcSet: sourceInfo.srcSet,
      });
    }
    return acc;
  }, []);

  const largestSrc = sourceList[sourceList.length - 1].src;

  return {
    largestSrc,
    sourceList,
  };
};

exports.getIdFromImgUrl = (url) => {
  const matches = url.match(/\/\/images\.contentful\.com\/\w+\/(\w+)/);
  return matches && matches[1];
};
