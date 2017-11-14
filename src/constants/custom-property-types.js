import PropTypes from 'prop-types';

import { IMAGE_TYPE } from './images';
import { PAGE_TYPES } from './settings';
import { BREAKPOINT } from './breakpoints';
import { LANGUAGE, REGION } from './regions';

const isValidSourcesBySize = sourcesBySize =>
  Object.keys(sourcesBySize).every((breakpoint) => {
    const { src, srcSet } = sourcesBySize[breakpoint];
    return (
      Object.values(BREAKPOINT).includes(breakpoint) &&
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
    const sourcesBySize = imageDataByType[imageType];
    return Object.values(IMAGE_TYPE).includes(imageType) && isValidSourcesBySize(sourcesBySize);
  });
  return isValid ? undefined : new Error('invalid image data by type');
};

const IMAGE_PROP_TYPES = {
  alt: PropTypes.string.isRequired,
  sourcesBySize: validateSourcesBySize,
};

exports.PROP_TYPES = {
  PAGE_TYPES: PropTypes.oneOf(PAGE_TYPES),
  IMAGE_DATA_BY_TYPE: validateImageDataByType,
  IMAGE_PROP_TYPES,
  IMAGE_PROPS: PropTypes.shape(IMAGE_PROP_TYPES),
  LANGUAGE: PropTypes.oneOf([LANGUAGE.ENGLISH, LANGUAGE.CHINESE]),
  REGION: PropTypes.oneOf([REGION.US, REGION.CHINA]),
};
