import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import VideoItem from './video-item';

import { PROP_SHAPES } from '../../../../constants/custom-property-types';

import styles from './videos.module.css';

const propTypes = {
  ...PROP_SHAPES.HERO_VIDEOS,
  isOnContentPage: PropTypes.bool,
};

const VIDEOS_RANGE = [1, 2, 3];

class Videos extends Component {
  prepareData = () => {
    const videos = [];

    VIDEOS_RANGE.forEach((n) => {
      const [description, imageSources, alt, link, title, videoEmbedCode] = [
        this.props[`video${n}Description`],
        this.props.imageSources[n - 1],
        this.props[`video${n}ImageVideoAlt`],
        this.props[`video${n}Link`],
        this.props[`video${n}Title`],
        this.props[`video${n}VideoEmbedCode`],
      ];

      if (videoEmbedCode) {
        videos.push({
          alt,
          description,
          imageSources,
          link,
          title,
          videoEmbedCode,
        });
      }
    });

    return videos;
  };

  render() {
    const { title, isOnContentPage } = this.props;
    const videos = this.prepareData();

    return (
      <div className={cx(styles.wrapper, {
        [styles.videos_isOnContentPage]: isOnContentPage,
      })}
      >
        <div className={styles.innerWrapper}>
          {title && <h2 className={styles.title}>{title}</h2>}
          <div className={cx(styles.videosWrapper, {
            [styles.videos_onlyOneItem]: videos.length < 2,
          })}
          >
            <div className={styles.largeVideo}>
              <VideoItem {...videos[0]} />
            </div>
            <div className={styles.smallVideosWrapper}>
              {videos.length > 1 && videos.map((item, index) => index > 0 && (
                <div
                  className={styles.smallVideo}
                  key={index}
                >
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
  }
}

Videos.propTypes = propTypes;

export default Videos;
