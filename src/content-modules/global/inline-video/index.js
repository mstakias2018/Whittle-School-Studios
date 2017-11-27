import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './inline-video.module.css';

import InlineImage from '../../../content-modules/global/inline-image';

import { BREAKPOINTS } from '../../../constants/breakpoints';
import { IMAGE_SHAPE } from '../../../constants/images';
import { PROP_TYPES } from '../../../constants/custom-property-types';

const propTypes = {
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  coverImageSources: PROP_TYPES.IMAGE_SOURCES.isRequired,
  src: PropTypes.string.isRequired,
};

// TODO Extract part of this into a Video class when we build a second video type
class InlineVideo extends Component {
  state = {
    hasPlayed: false,
  };

  componentDidMount() {
    const Player = require('@vimeo/player'); // eslint-disable-line global-require
    this.player = new Player(this.iframe);
    this.player.on('play', this.toggleVideoState);
  }

  playVideo = () => {
    const clientWidth = window.innerWidth;
    if (clientWidth < BREAKPOINTS.BREAKPOINT_MD) {
      this.toggleFullscreen();
    }
    this.player.play();
  }

  toggleVideoState = (isPlaying = true) => {
    this.setState({
      hasPlayed: this.state.hasPlayed || !!isPlaying,
    });
  };

  // Adapted from https://github.com/vimeo/player.js/issues/52#issuecomment-337246627
  toggleFullscreen = () => {
    // Check for fullscreen support
    if (
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement
    ) {
      // If there's currently an element fullscreen, exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      // Otherwise, enter fullscreen
      // `videoWrapper` is just a `div` element wrapping the video
    } else if (this.videoWrapper.requestFullscreen) {
      this.videoWrapper.requestFullscreen();
    } else if (this.videoWrapper.mozRequestFullScreen) {
      this.videoWrapper.mozRequestFullScreen();
    } else if (this.videoWrapper.webkitRequestFullscreen) {
      this.videoWrapper.webkitRequestFullscreen();
    } else if (this.videoWrapper.msRequestFullscreen) {
      this.videoWrapper.msRequestFullscreen();
    }
  }

  render() {
    const {
      alt,
      caption,
      coverImageSources,
      src,
    } = this.props;
    const { hasPlayed } = this.state;

    return (
      <div className={styles.wrapper}>
        <InlineImage
          alt={alt}
          caption={caption}
          imageSources={coverImageSources}
          isInBackground={hasPlayed}
          isVideoCover
          shape={IMAGE_SHAPE.RECTANGLE}
        >
          <div className={styles.videoWrapper}>
            <div
              className={styles.videoWrapperInner}
              ref={(el) => { this.videoWrapper = el; }}
            >
              <iframe
                allowFullScreen
                className={cx(styles.iframe, {
                  [styles.iframe_hasPlayed]: hasPlayed,
                })}
                frameBorder="0"
                mozallowfullscreen="true"
                ref={(el) => { this.iframe = el; }}
                src={src}
                title={alt}
                webkitallowfullscreen="true"
              />
            </div>
            {!hasPlayed && (
              <button
                aria-label="Play video"
                className={styles.button}
                onClick={this.playVideo}
              />
            )}
          </div>
        </InlineImage>
      </div>
    );
  }
}

InlineVideo.propTypes = propTypes;

export default InlineVideo;
