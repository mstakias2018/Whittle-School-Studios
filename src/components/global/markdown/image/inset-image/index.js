import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import WithVideo from '../../../../../hocs/with-video';
import { PROP_TYPES } from '../../../../../constants/custom-property-types';
import styles from './inset-image.module.css';

const propTypes = {
  ...PROP_TYPES.WITH_VIDEO,
  caption: PropTypes.string,
  indicators: PropTypes.arrayOf(PropTypes.string),
};

const INDICATORS = {
  ALIGN_LEFT: 'left',
  SHAPE_CIRCLE: 'circle',
};

const InsetImage = ({
  assetWithVideo,
  hasPlayButton,
  hasVideo,
  indicators,
  caption,
}) => {
  const wrapperClasses = cx(styles.wrapper, {
    [styles.wrapper_hasCaption]: caption,
    [styles.wrapper_hasPlayButton]: hasPlayButton,
    [styles.wrapper_isAlignLeft]: indicators.includes(INDICATORS.ALIGN_LEFT),
    _isCircle: indicators.includes(INDICATORS.SHAPE_CIRCLE) && !hasVideo,
  });

  return (
    <span className={wrapperClasses}>
      {assetWithVideo}
      {caption && <span className={styles.caption}>{caption}</span>}
    </span>
  );
};

InsetImage.propTypes = propTypes;

export default WithVideo(InsetImage, { isSmall: true });
