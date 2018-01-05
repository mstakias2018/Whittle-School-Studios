import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import VideoItem from './video-item';

import { PROP_SHAPES } from '../../../../constants/custom-property-types';

import styles from './videos.module.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  videos: PropTypes.arrayOf(PROP_SHAPES.HERO_VIDEO),
};

const Videos = ({
  title,
  videos,
}) => (
  <div className={styles.wrapper}>
    <div className={styles.innerWrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div className={cx(styles.videosWrapper, {
        [styles.videos_onlyOneItem]: videos.length < 2,
      })}
      >
        <div className={styles.largeVideo}>
          <VideoItem {...videos[0]} />
        </div>
        <div className={styles.smallVideosWrapper}>
          {videos.length > 1 && videos.map((item, index) => index > 0 && (
            <div className={styles.smallVideo}>
              <VideoItem
                {...item}
                isSmall
                key={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

Videos.propTypes = propTypes;

export default Videos;
