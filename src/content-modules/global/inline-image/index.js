import React from 'react';
import cx from 'classnames';

import Picture from '../../../components/global/picture';

import styles from './inline-image.module.css';

import { getInlineImagePropTypes, PROP_TYPES } from '../../../constants/custom-property-types';

const propTypes = {
  ...getInlineImagePropTypes(),
  imageSources: PROP_TYPES.IMAGE_SOURCES.isRequired,
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
