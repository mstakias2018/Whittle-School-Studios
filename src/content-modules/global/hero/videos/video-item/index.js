import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import cx from 'classnames';

import Markdown from '../../../../../components/global/markdown';
import WithVideo from '../../../../../hocs/with-video';

import { PROP_SHAPES, PROP_TYPES } from '../../../../../constants/custom-property-types';

import styles from './video-item.module.css';
import commonStyles from '../videos.module.css';

const propTypes = {
  ...PROP_SHAPES.HERO_VIDEO,
  ...PROP_TYPES.WITH_VIDEO,
  isSmall: PropTypes.bool,
};

const VideoItem = ({
  assetWithVideo,
  description,
  hasPlayButton,
  isSmall,
  link,
  title,
}, { translations }) => (
  <div className={cx(styles.wrapper, {
         [styles.video_isSmall]: isSmall,
         [styles.video_hasPlayButton]: hasPlayButton,
       })}
  >
    <div className={styles.asset}>
      {assetWithVideo}
    </div>
    <div className={styles.content}>
      <div className={styles.titleWrapper}>
        <h4 className={styles.title}>
          {title}
        </h4>
        <Link
          className={commonStyles.link}
          to={link}
        >
          {translations.general.learnMore}
        </Link>
      </div>
      <Markdown
        className={cx(styles.description, 'hideSm')}
        source={description.markdown}
      />
    </div>
  </div>
);

VideoItem.propTypes = propTypes;
VideoItem.contextTypes = { translations: PropTypes.object.isRequired };

export default WithVideo(VideoItem);
