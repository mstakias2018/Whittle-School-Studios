import React from 'react';
import PropTypes from 'prop-types';

import Picture from '../../../components/global/picture';

import styles from './inline-image.module.css';

import { PROP_TYPES } from '../../../constants/custom-property-types';

const propTypes = {
  caption: PropTypes.string,
  imageProps: PROP_TYPES.IMAGE_PROPS,
};

const InlineImage = ({ caption, imageProps }) => (
  <div className={styles.componentWrapper}>
    <div className={styles.image}>
      <Picture {...imageProps} />
    </div>
    {caption && <div className={styles.caption}>{caption}</div>}
  </div>
);

InlineImage.propTypes = propTypes;

export default InlineImage;
