import React from 'react';
import PropTypes from 'prop-types';

import Picture from '../../../components/global/picture';

import styles from './inline-image.module.css';

import { PROP_TYPES } from '../../../constants/customPropertyTypes';

const propTypes = {
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  image: PROP_TYPES.IMAGE_SET.isRequired,
};

const InlineImage = ({
  alt,
  caption,
  image,
}) => (
  <div className={styles.componentWrapper}>
    <div className={styles.image}>
      <Picture
        alt={alt}
        image={image}
      />
    </div>
    {caption && <div className={styles.caption}>{caption}</div>}
  </div>
);

InlineImage.propTypes = propTypes;

export default InlineImage;
