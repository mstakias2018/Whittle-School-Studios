import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Picture from '../../../components/global/picture';

import styles from './inline-image.module.css';

import { getInlineImagePropTypes } from '../../../constants/custom-property-types';

const propTypes = {
  ...getInlineImagePropTypes(),
  children: PropTypes.node,
  isInBackground: PropTypes.bool,
  isVideoCover: PropTypes.bool,
};

const InlineImage = ({
  alt,
  caption,
  children,
  imageSources,
  isInBackground,
  isVideoCover,
  shape,
}) => {
  const captionClasses = cx(styles.caption, {
    [styles.caption_isVideo]: isVideoCover,
  });

  return (
    <div className={styles.componentWrapper}>
      <div className={cx(styles.image, styles[`image_is${shape}`])}>
        <div className={styles.imageInner}>
          <Picture
            alt={alt}
            isAriaHidden={isInBackground}
            sourcesBySize={imageSources}
          />
          {children}
        </div>
      </div>
      {caption && (
        <div className={captionClasses}>
          {caption}
        </div>
      )}
    </div>
  );
};

InlineImage.propTypes = propTypes;

export default InlineImage;
