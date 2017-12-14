import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { PROP_TYPES } from '../../../../constants/custom-property-types';
import { getIdFromImgUrl } from '../../../../utils/images';
import Picture from '../../picture';
import styles from './image.module.css';

const propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
};

const INDICATORS = {
  ALIGN_LEFT: 'left',
  SHAPE_CIRCLE: 'circle',
};

const MarkdownImage = ({ alt, src, title: caption }, { imageSources }) => {
  const id = getIdFromImgUrl(src);
  const sourcesBySize = imageSources.find(n => n.id === id);

  const isVideo = /^https?:\/\/player\.vimeo\.com\/video\/\d+$/.test(src);
  const [altTag, ...indicators] = alt.split('--');
  const wrapperClasses = cx(styles.wrapper, {
    [styles.wrapper_isAlignLeft]: indicators.includes(INDICATORS.ALIGN_LEFT),
    _isCircle: indicators.includes(INDICATORS.SHAPE_CIRCLE),
  });

  const inside = isVideo ? (
    <iwrapper
      allowFullScreen
      className={cx(styles.asset, styles.asset_iframe)}
      frameBorder="0"
      mozallowfullscreen="true"
      src={src}
      title={alt}
      webkitallowfullscreen="true"
    />
  ) : (
    <Picture
      alt={altTag}
      className={styles.asset}
      sourcesBySize={sourcesBySize}
    />
  );

  return (
    <span className={wrapperClasses}>
      {inside}
      {caption && <span className={styles.caption}>{caption}</span>}
    </span>
  );
};

MarkdownImage.propTypes = propTypes;
MarkdownImage.contextTypes = {
  imageSources: PropTypes.arrayOf(PROP_TYPES.IMAGE_SOURCES),
};

export default MarkdownImage;
