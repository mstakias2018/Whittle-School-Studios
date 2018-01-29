import React from 'react';
import cx from 'classnames';

import WithVideo from '../../../hocs/with-video';
import { IMAGE_SHAPE } from '../../../constants/images';

import styles from './inline-image.module.css';

import {
  getInlineImagePropTypes,
  PROP_TYPES,
} from '../../../constants/custom-property-types';

const propTypes = {
  ...getInlineImagePropTypes(),
  ...PROP_TYPES.WITH_VIDEO,
};

// Used for *two* contentful modules: InlineImage and InlineVideo
const InlineImage = ({
  assetWithVideo,
  caption,
  hasPlayButton,
  shape = IMAGE_SHAPE.RECTANGLE,
}) => (
  <div className={cx(styles.wrapper, {
    [styles.wrapper_hasPlayButton]: hasPlayButton,
  })}
  >
    <div className={styles.componentWrapper}>
      <div className={cx(styles.image, styles[`image_is${shape}`])}>
        {assetWithVideo}
      </div>
      {caption && (
        <div className={styles.caption}>
          {caption}
        </div>
      )}
    </div>
  </div>
);

InlineImage.propTypes = propTypes;

export default WithVideo(InlineImage);
