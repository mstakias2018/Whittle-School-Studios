import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import VideoItem from './video-item';
import WithWindowListener from '../../../hocs/withWindow';
import { BREAKPOINTS_NAME } from '../../../constants/breakpoints';

import { PROP_TYPES } from '../../../constants/custom-property-types';

import styles from './videos.module.css';

const propTypes = {
  ...PROP_TYPES.WITH_WINDOW,
  ...PROP_TYPES.HERO_VIDEOS,
  isOnContentPage: PropTypes.bool,
};

const VIDEOS_RANGE = [1, 2, 3];

class Videos extends Component {
  state = {
    bottomMargin: 0,
    breakpoint: BREAKPOINTS_NAME.large,
  };

  componentDidMount() {
    this.setState({
      breakpoint: this.props.breakpoint,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.breakpoint !== this.props.breakpoint) {
      setTimeout(() => {
        this.setState({
          breakpoint: this.props.breakpoint,
        });
      }, 0);
    }
  }

  getVideoContentHeight = (height) => {
    this.setState({
      bottomMargin: height,
    });
  };

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
    const { bottomMargin, breakpoint } = this.state;
    const videos = this.prepareData();
    const largeBreakpoint = breakpoint === BREAKPOINTS_NAME.large || breakpoint === BREAKPOINTS_NAME.extraLarge;

    return (
      <div className={cx(styles.wrapper, {
        [styles.videos_isOnContentPage]: isOnContentPage,
      })}
      >
        <div
          className={styles.innerWrapper}
          style={{
            marginBottom: largeBreakpoint ? bottomMargin : 0,
          }}
        >
          {title && <h2 className={styles.title}>{title}</h2>}
          <div className={cx(styles.videosWrapper, {
            [styles.videos_onlyOneItem]: videos.length < 2,
          })}
          >
            <div className={styles.largeVideo}>
              <VideoItem
                {...videos[0]}
                getVideoContentHeight={this.getVideoContentHeight}
              />
            </div>
            <div className={styles.smallVideosWrapper}>
              {videos.length > 1 && videos.map((item, index) => index > 0 && (
                <div
                  className={styles.smallVideo}
                  key={index}
                >
                  <VideoItem
                    {...item}
                    isSecond={index === 2}
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

export default WithWindowListener(Videos);
