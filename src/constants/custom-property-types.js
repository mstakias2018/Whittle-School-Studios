import PropTypes from 'prop-types';

import { IMAGE_SIZE, IMAGE_SHAPE, IMAGE_TYPE } from './images';
import { PAGE_TYPES } from './settings';
import { BREAKPOINTS_NAME } from './breakpoints';
import { SOCIAL_NETWORK } from './social-networks';
import {
  LANGUAGE,
  LANGUAGE_CONTENTFUL_LOCALE,
  REGION_LANGUAGES,
} from './regions';

const isValidSourcesBySize = ({ id, ...sourcesBySize }) =>
  Object.keys(sourcesBySize).every((breakpoint) => {
    const { src, srcSet } = sourcesBySize[breakpoint];
    return (
      Object.values(IMAGE_SIZE).includes(breakpoint) &&
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

const MARKDOWN = PropTypes.shape({
  markdown: PropTypes.string.isRequired,
}).isRequired;

const createTypenameChecker = desiredValue => (props, propName) =>
  (props[propName] === desiredValue ? undefined : new Error('invalid typename'));

const BODY_TEXT = PropTypes.shape({
  __typename: createTypenameChecker('ContentfulBodyText'),
  content: MARKDOWN,
});

const INLINE_IMAGE = PropTypes.shape({
  __typename: createTypenameChecker('ContentfulInlineImage'),
  ...getInlineImagePropTypes(),
});

const OPENAPPLY_IFRAME = PropTypes.shape({
  __typename: createTypenameChecker('ContentfulOpenApplyIFrame'),
  description: MARKDOWN,
});

const quotePropTypes = {
  content: PropTypes.shape({
    content: PropTypes.string,
  }).isRequired,
  quoteType: PropTypes.string,
  source: PropTypes.string,
};

const QUOTE = PropTypes.shape({
  __typename: createTypenameChecker('ContentfulQuote'),
  ...quotePropTypes,
});

const SLIDESHOW_CAROUSEL = PropTypes.shape({
  __typename: createTypenameChecker('ContentfulSlideshowCarousel'),
  slides: PropTypes.arrayOf(PropTypes.shape(getInlineImagePropTypes(true))),
});

const threeUpBreakerPropTypes = {
  content1: MARKDOWN,
  content2: MARKDOWN,
  content3: MARKDOWN,
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
};

const THREE_UP_BREAKER = PropTypes.shape({
  __typename: createTypenameChecker('ContentfulThreeUpBreaker'),
  ...threeUpBreakerPropTypes,
});

const validateGlobalSettings = (props, propName) => {
  const globalSettings = props[propName];
  const isValid = Object.keys(globalSettings).every(language =>
    REGION_LANGUAGES[process.env.GATSBY_REGION].includes(language) && typeof globalSettings[language] === 'object');
  return isValid ? undefined : new Error('invalid global settings');
};

const footerLinkArray = PropTypes.arrayOf(PropTypes.shape({
  link: PropTypes.string.isRequired,
  subLinks: PropTypes.footerLinkArray,
  title: PropTypes.string.isRequired,
}));

const socialNetworkList = PropTypes.arrayOf(PropTypes.shape({
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  network: PropTypes.oneOf(Object.keys(SOCIAL_NETWORK)),
  shareLink: PropTypes.string,
  url: PropTypes.string,
}));

const LIST_ITEM = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

exports.PROP_TYPES = {
  BREAKPOINT: PropTypes.oneOf(Object.keys(BREAKPOINTS_NAME)),
  FOOTER_DATA: PropTypes.shape({
    primaryLinks: footerLinkArray,
    utilityLinks: footerLinkArray,
  }),
  GLOBAL_SETTINGS: PropTypes.shape(validateGlobalSettings),
  HEADER_DATA: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
  HISTORY: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  IMAGE_DATA_BY_TYPE: PropTypes.shape(validateImageDataByType),
  IMAGE_SOURCES: PropTypes.shape(validateSourcesBySize),
  LANGUAGE: PropTypes.oneOf(REGION_LANGUAGES[process.env.GATSBY_REGION]),
  LIST: PropTypes.arrayOf(PropTypes.shape(LIST_ITEM)),
  LIST_ITEM,
  LOCALIZED_SLUG_LIST: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    locale: PropTypes.oneOf([
      LANGUAGE_CONTENTFUL_LOCALE[LANGUAGE.ENGLISH],
      LANGUAGE_CONTENTFUL_LOCALE[LANGUAGE.CHINESE],
    ]).isRequired,
  })),
  MARKDOWN,
  MODULES: PropTypes.arrayOf(PropTypes.oneOfType([
    BODY_TEXT,
    INLINE_IMAGE,
    OPENAPPLY_IFRAME,
    QUOTE,
    SLIDESHOW_CAROUSEL,
    THREE_UP_BREAKER,
  ])),
  PAGE_TYPES: PropTypes.oneOf(PAGE_TYPES),
  SOCIAL_ICONS: PropTypes.shape({
    contentPage: socialNetworkList.isRequired,
    footer: socialNetworkList.isRequired,
  }),
  SUB_NAV_PROPS: PropTypes.shape({
    categoryTitle: PropTypes.string.isRequired,
    navItems: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  }),
};
