const fs = require('file-system');
const request = require('request');

const {
  IMAGE_SHAPE, IMAGE_SUBTYPE, IMAGE_TYPE,
} = require('../src/constants/images');
const IMAGE_CONFIG = require('../src/constants/image-config');
const { PAGE_TYPE } = require('../src/constants/settings');
const { ENV } = require('../src/constants/env');
const { getIdFromImgUrl } = require('../src/utils/images');

const STATIC_IMAGE_PATH = './static/images/';

const formatPathForBrowser = path => path.replace('./static', '');

// Only download images on Netlify - otherwise it's too slow
const shouldSkipDownloadingImages = process.env.GATSBY_ENV === ENV.DEV;

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
exports.createQuery = (imageSubtype) => {
  const imageConfig = IMAGE_CONFIG[imageSubtype];
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
      url
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
     |- 123344555 <page ID>
       |- 1 <module index> (if applicable)
         |-sm <image size>
           |- filename.jpg
           |-1x
             |- filename.jpg
           |-1.5x
             |- filename.jpg
           |-2x
             |- filename.jpg

   Return image data by size:
   {
     sm: {
       srcSet: [ '<imagepath>.jpg 1x', '<imagepath>.jpg 1.5x' ],
       src: '<imagepath>.jpg'
     },
     ...
   }
*/
const saveImage = (imageNode, type, subtype, nestedFolders) => {
  if (!imageNode) return {};

  let imageTypeDir = `${STATIC_IMAGE_PATH}${type}/`;
  if (!shouldSkipDownloadingImages) {
    if (!fs.existsSync(imageTypeDir)) {
      fs.mkdirSync(imageTypeDir);
    }

    if (nestedFolders) {
      nestedFolders.forEach((folderName) => {
        imageTypeDir = `${imageTypeDir}${folderName}/`;
        if (!fs.existsSync(imageTypeDir)) {
          fs.mkdirSync(imageTypeDir);
        }
      });
    }
  }

  const { file: { fileName, url } } = imageNode;
  const sourcesBySize = { id: getIdFromImgUrl(url) };

  const promises = Object.keys(IMAGE_CONFIG[subtype]).map((imageSize) => {
    const imageSizePromises = [];
    const imageData = { srcSet: [] };
    const { src, srcSet } = imageNode[imageSize];

    const sizeDir = `${imageTypeDir}${imageSize}/`;

    // download and save src
    if (shouldSkipDownloadingImages) {
      imageData.src = src;
    } else {
      fs.mkdirSync(sizeDir);

      const srcName = `${sizeDir}${fileName}`;
      imageSizePromises.push(downloadPromise(`http:${src}`, srcName).then(() => {
        imageData.src = formatPathForBrowser(srcName);
      }));
    }

    if (srcSet) {
      srcSet.split(',\n').forEach((srcSetItem) => {
        // split up 'filename.jpg 1.5x'
        const matches = srcSetItem.match(/(.*)\s(\d\.?\d?x)/);
        const [, itemFileName, resolution] = matches;

        // download and save srcSet item
        if (shouldSkipDownloadingImages) {
          imageData.srcSet.push(`${itemFileName} ${resolution}`);
        } else {
          const resDir = `${sizeDir}${resolution}/`;
          fs.mkdirSync(resDir);

          const srcSetName = `${resDir}${fileName}`;
          imageSizePromises.push(downloadPromise(`http:${itemFileName}`, srcSetName).then(() => {
            imageData.srcSet.push(formatPathForBrowser(`${srcSetName} ${resolution}`));
          }));
        }
      });
    }

    return Promise.all(imageSizePromises).then(() => {
      sourcesBySize[imageSize] = imageData;
    });
  });

  return Promise.all(promises).then(() => sourcesBySize);
};

exports.saveImage = saveImage;

exports.saveMainImage = ({ articleMainImage, categoryMainImage, pageType }, nestedFolders) => {
  if (!(articleMainImage || categoryMainImage)) return undefined;

  const [mainImage, mainImageSubtype] = pageType === PAGE_TYPE.CATEGORY ?
    [categoryMainImage, IMAGE_SUBTYPE.MAIN_CATEGORY] :
    [articleMainImage, IMAGE_SUBTYPE.MAIN_ARTICLE];

  return saveImage(mainImage, IMAGE_TYPE.MAIN, mainImageSubtype, nestedFolders);
};

exports.saveCarouselImage = ({
  shape,
  rectInlineImage,
  squareInlineImage,
}, nestedFolders) => {
  const [inlineImage, inlineImageSubtype] = shape === IMAGE_SHAPE.RECTANGLE ?
    [rectInlineImage, IMAGE_SUBTYPE.INLINE_RT] :
    [squareInlineImage, IMAGE_SUBTYPE.CAROUSEL_SQ];
  return saveImage(inlineImage, IMAGE_TYPE.MODULE, inlineImageSubtype, nestedFolders);
};

exports.saveInlineImage = ({
  shape,
  rectInlineImage,
  squareInlineImage,
}, nestedFolders) => {
  const [inlineImage, inlineImageSubtype] = shape === IMAGE_SHAPE.RECTANGLE ?
    [rectInlineImage, IMAGE_SUBTYPE.INLINE_RT] :
    [squareInlineImage, IMAGE_SUBTYPE.INLINE_SQ];
  return saveImage(inlineImage, IMAGE_TYPE.MODULE, inlineImageSubtype, nestedFolders);
};
