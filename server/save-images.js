const fs = require('file-system');
const request = require('request');

const {
  IMAGE_CONFIG, IMAGE_SHAPE, IMAGE_SUBTYPE, IMAGE_TYPE,
} = require('../src/constants/images');
const { PAGE_TYPE } = require('../src/constants/settings');

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
    id
    file {
      fileName
    }
    ${queries}
  `;
};

const downloadPromise = (url, dest) =>
  new Promise((resolve) => {
    const writeStream = fs.createWriteStream(dest);
    request(url).pipe(writeStream);
    writeStream.on('finish', resolve);
  });

/* Create an images directory in this format
   main <image type>
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
const saveImage = (imageNode, type, subtype, index) => {
  let imageTypeDir = `${STATIC_IMAGE_PATH}${type}/`;
  if (!fs.existsSync(imageTypeDir)) {
    fs.mkdirSync(imageTypeDir);
  }

  if (typeof index !== 'undefined') {
    imageTypeDir = `${imageTypeDir}${index}/`;
    if (!fs.existsSync(imageTypeDir)) {
      fs.mkdirSync(imageTypeDir);
    }
  }

  const { id, file: { fileName } } = imageNode;
  const sourcesBySize = {};

  const nodeDir = `${imageTypeDir}${id}__${fileName}/`;
  fs.mkdirSync(nodeDir);

  const promises = Object.keys(IMAGE_CONFIG[subtype]).map((imageSize) => {
    const imageSizePromises = [];
    const imageData = { srcSet: [] };
    const { src, srcSet } = imageNode[imageSize];

    const sizeDir = `${nodeDir}${imageSize}/`;
    fs.mkdirSync(sizeDir);

    // download and save src
    const srcName = `${sizeDir}src__${fileName}`;
    imageSizePromises.push(downloadPromise(`http:${src}`, srcName).then(() => {
      imageData.src = formatPathForBrowser(srcName);
    }));

    if (srcSet) {
      srcSet.split(',\n').forEach((srcSetItem) => {
        // split up 'filename.jpg 1.5x'
        const matches = srcSetItem.match(/(.*)\s(\d\.?\d?x)/);
        const [, itemFileName, resolution] = matches;

        // download and save srcSet item
        const srcSetName = `${sizeDir}${resolution}__${fileName}`;
        imageSizePromises.push(downloadPromise(`http:${itemFileName}`, srcSetName).then(() => {
          imageData.srcSet.push(formatPathForBrowser(`${srcSetName} ${resolution}`));
        }));
      });
    }

    return Promise.all(imageSizePromises).then(() => {
      sourcesBySize[imageSize] = imageData;
    });
  });

  return Promise.all(promises).then(() => sourcesBySize);
};

exports.saveMainImage = ({ articleMainImage, categoryMainImage, pageType }) => {
  if (!(articleMainImage || categoryMainImage)) return undefined;

  const [mainImage, mainImageSubtype] = pageType === PAGE_TYPE.CATEGORY ?
    [categoryMainImage, IMAGE_SUBTYPE.MAIN_CATEGORY] :
    [articleMainImage, IMAGE_SUBTYPE.MAIN_ARTICLE];

  return saveImage(mainImage, IMAGE_TYPE.MAIN, mainImageSubtype);
};

exports.saveInlineImage = ({
  shape,
  rectInlineImage,
  squareInlineImage,
}, i) => {
  const [inlineImage, inlineImageSubtype] = shape === IMAGE_SHAPE.SQUARE ?
    [squareInlineImage, IMAGE_SUBTYPE.INLINE_SQ] :
    [rectInlineImage, IMAGE_SUBTYPE.INLINE_RT];
  return saveImage(inlineImage, IMAGE_TYPE.INLINE, inlineImageSubtype, i);
};
