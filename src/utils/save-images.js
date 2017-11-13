const fs = require('file-system');
const request = require('request');

const { NODE_NAME, IMAGE_CONFIG } = require('../constants/images');

const STATIC_IMAGE_PATH = './static/images/';

const formatPathForBrowser = path => path.replace('./static', '');

exports.resetImageDir = () => {
  if (fs.existsSync(STATIC_IMAGE_PATH)) {
    fs.rmdirSync(STATIC_IMAGE_PATH);
  }
  fs.mkdirSync(STATIC_IMAGE_PATH);
};

/* Creates a query in this format:
   mainImage [nodeName] {
     sm: resolutions(...) {
       src
       srcSet
     }
     ...
   }
*/
exports.createQuery = (imageType) => {
  const imageConfig = IMAGE_CONFIG[imageType];
  const queries = Object.keys(imageConfig).reduce((query, imageSize) => {
    const sizeConfig = imageConfig[imageSize];
    return `${query}
      ${imageSize}: resolutions(
        width: ${sizeConfig.width},
        height: ${sizeConfig.height},
        resizingBehavior: FILL,
        quality: 100,
      ) {
        src
        srcSet
      }
    `;
  }, '');

  return `
    ${NODE_NAME[imageType]} {
      id
      file {
        fileName
      }
      ${queries}
    }
  `;
};

/* Create an images directory in this format
   cm <image type>
     id__filename.jpg
       |-sm <image size>
         |-src__filename.jpg
         |-1x__filename.jpg
         |-1.5x__filename.jpg
         |-2x__filename.jpg

   Return image data by size:
   {
     sm: {
       srcSet: [ '<imagepath>.jpg 1x', '<imagepath>.jpg 1.5x' ],
       src: '<imagepath>.jpg'
     },
     ...
   }
*/
exports.saveImage = (node, type) => {
  const imageNode = node[NODE_NAME[type]];
  if (!imageNode) return null;

  const imageTypeDir = `${STATIC_IMAGE_PATH}${type}/`;
  if (!fs.existsSync(imageTypeDir)) {
    fs.mkdirSync(imageTypeDir);
  }

  const { id, file: { fileName } } = imageNode;
  const sourcesBySize = {};

  const nodeDir = `${imageTypeDir}${id}__${fileName}/`;
  fs.mkdirSync(nodeDir);

  Object.keys(IMAGE_CONFIG[type]).forEach((imageSize) => {
    const imageData = { srcSet: [] };
    const { src, srcSet } = imageNode[imageSize];

    const sizeDir = `${nodeDir}${imageSize}/`;
    fs.mkdirSync(sizeDir);

    // download and save src
    const srcName = `${sizeDir}src__${fileName}`;
    request(`http:${src}`).pipe(fs.createWriteStream(srcName));
    imageData.src = formatPathForBrowser(srcName);

    if (srcSet) {
      srcSet.split(',\n').forEach((srcSetItem) => {
        // split up 'filename.jpg 1.5x'
        const matches = srcSetItem.match(/(.*)\s(\d\.?\d?x)/);
        const [, itemFileName, resolution] = matches;

        // download and save srcSet item
        const srcSetName = `${sizeDir}${resolution}__${fileName}`;
        request(`http:${itemFileName}`).pipe(fs.createWriteStream(srcSetName));
        imageData.srcSet.push(formatPathForBrowser(`${srcSetName} ${resolution}`));
      });
    }

    sourcesBySize[imageSize] = imageData;
  });

  return sourcesBySize;
};
