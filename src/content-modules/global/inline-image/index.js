import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Picture from '../../../components/global/picture';

import styles from './inline-image.module.css';

import { PROP_TYPES } from '../../../constants/custom-property-types';
import { IMAGE_SHAPE } from '../../../constants/images';

const propTypes = {
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  imageSources: PROP_TYPES.IMAGE_SOURCES.isRequired,
  shape: PropTypes.oneOf([IMAGE_SHAPE.SQUARE, IMAGE_SHAPE.RECTANGLE]).isRequired,
};

const InlineImage = ({
  alt,
  caption,
  imageSources,
  shape,
}) => (
  <div className={styles.componentWrapper}>
    <div className={cx(styles.image, styles[`image_is${shape}`])}>
      <Picture
        alt={alt}
        sourcesBySize={imageSources}
      />
    </div>
    {caption && <div className={styles.caption}>{caption}</div>}
  </div>
);

InlineImage.propTypes = propTypes;

export default InlineImage;
