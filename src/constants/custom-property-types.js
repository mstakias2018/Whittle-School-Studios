import PropTypes from 'prop-types';

import { IMAGE_BP, IMAGE_SHAPE, IMAGE_TYPE } from './images';
import { PAGE_TYPES } from './settings';
import { BREAKPOINTS_NAME } from './breakpoints';
import { SOCIAL_NETWORK } from './social-networks';
import {
  LANGUAGE,
  LANGUAGE_CONTENTFUL_LOCALE,
  REGION_LANGUAGES,
} from './regions';

const isValidSourcesBySize = sourcesBySize =>
  Object.keys(sourcesBySize).every((breakpoint) => {
    const { src, srcSet } = sourcesBySize[breakpoint];
    return (
      Object.values(IMAGE_BP).includes(breakpoint) &&
      typeof src === 'string' &&
      srcSet.every(item => /.* \d\.?\d?x/.test(item))
    );
  });

const validateSourcesBySize = (props, propName) => {
  const sourcesBySize = props[propName];
  return isValidSourcesBySize(sourcesBySize) ? undefined : new Error('invalid sources by size');
};

const validateImageDataByType = (props, propName) => {
  const imageDataByType = props[propName];
  const isValid = Object.keys(imageDataByType).every((imageType) => {
    const imageData = imageDataByType[imageType];
    return Object.values(IMAGE_TYPE).includes(imageType) &&
      Array.isArray(imageData) ?
      imageData.every(sources => !sources || isValidSourcesBySize(sources)) :
      isValidSourcesBySize(imageData);
  });
  return isValid ? undefined : new Error('invalid image data by type');
};

const getInlineImagePropTypes = (withCircle = false) => ({
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  shape: PropTypes.oneOf(withCircle ?
    [IMAGE_SHAPE.CIRCLE, IMAGE_SHAPE.SQUARE, IMAGE_SHAPE.RECTANGLE] :
    [IMAGE_SHAPE.SQUARE, IMAGE_SHAPE.RECTANGLE]).isRequired,
});

exports.getInlineImagePropTypes = getInlineImagePropTypes;

const createTypenameChecker = desiredValue => (props, propName) =>
  (props[propName] === desiredValue ? undefined : new Error('invalid typename'));

const BODY_TEXT = PropTypes.shape({
  __typename: createTypenameChecker('ContentfulBodyText'),
  content: PropTypes.shape({
    markdown: PropTypes.string.isRequired,
  }).isRequired,
});

const INLINE_IMAGE = PropTypes.shape({
  __typename: createTypenameChecker('ContentfulInlineImage'),
  ...getInlineImagePropTypes(),
});

const SLIDESHOW_CAROUSEL = PropTypes.shape({
  __typename: createTypenameChecker('ContentfulSlideshowCarousel'),
  slides: PropTypes.arrayOf(PropTypes.shape(getInlineImagePropTypes(true))),
});

const validateGlobalSettings = (props, propName) => {
  const globalSettings = props[propName];
  const isValid = Object.keys(globalSettings).every(language =>
    REGION_LANGUAGES[process.env.GATSBY_REGION].includes(language) && typeof globalSettings[language] === 'object');
  return isValid ? undefined : new Error('invalid global settings');
};

const footerLinkArray = PropTypes.arrayOf(PropTypes.shape({
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  subLinks: PropTypes.footerLinkArray,
}));

const socialNetworkList = PropTypes.arrayOf(PropTypes.shape({
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  network: PropTypes.oneOf(Object.keys(SOCIAL_NETWORK)),
  shareLink: PropTypes.string,
  url: PropTypes.string,
}));

exports.PROP_TYPES = {
  BREAKPOINT: PropTypes.oneOf(Object.keys(BREAKPOINTS_NAME)),
  HEADER_DATA: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })),
  FOOTER_DATA: PropTypes.shape({
    primaryLinks: footerLinkArray,
    utilityLinks: footerLinkArray,
  }),
  SUB_NAV_PROPS: PropTypes.shape({
    categoryTitle: PropTypes.string.isRequired,
    navItems: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  }),
  GLOBAL_SETTINGS: PropTypes.shape(validateGlobalSettings),
  HISTORY: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  IMAGE_DATA_BY_TYPE: PropTypes.shape(validateImageDataByType),
  IMAGE_SOURCES: PropTypes.shape(validateSourcesBySize),
  LANGUAGE: PropTypes.oneOf(REGION_LANGUAGES[process.env.GATSBY_REGION]),
  LOCALIZED_SLUG_LIST: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    locale: PropTypes.oneOf([
      LANGUAGE_CONTENTFUL_LOCALE[LANGUAGE.ENGLISH],
      LANGUAGE_CONTENTFUL_LOCALE[LANGUAGE.CHINESE],
    ]).isRequired,
  })),
  MODULES: PropTypes.arrayOf(PropTypes.oneOfType([BODY_TEXT, INLINE_IMAGE, SLIDESHOW_CAROUSEL])),
  PAGE_TYPES: PropTypes.oneOf(PAGE_TYPES),
  SOCIAL_ICONS: PropTypes.shape({
    contentPage: socialNetworkList.isRequired,
    footer: socialNetworkList.isRequired,
  }),
};
