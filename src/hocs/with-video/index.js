import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './with-video.module.css';
import Picture from '../../components/global/picture';
import WithWindowListener from '../withWindow';
import LoadingSpinner from '../../components/structural/loading-spinner';

import { PROP_TYPES } from '../../constants/custom-property-types';
import { BREAKPOINTS_NAME } from '../../constants/breakpoints';
import { parseVideoEmbedCode } from '../../utils/strings';

const propTypes = PROP_TYPES.VIDEO;

const WithVideo = (WrappedComponent, options = {}) => {
  class Video extends Component {
    state = {
      hasPlayed: false,
      isPlaying: false,
      isVimeo: false,
      src: '',
    };

    componentWillMount() {
      this.setVideoState();
    }

    componentDidMount() {
      if (this.state.isVimeo) {
        const Player = require('@vimeo/player'); // eslint-disable-line global-require
        this.player = new Player(this.iframe);
        this.player.on('play', this.toggleVideoState.bind(null, true));
        this.player.on('pause', this.toggleVideoState.bind(null, false));
      }
    }

    setVideoState({ videoEmbedCode } = this.props) {
      this.setState(parseVideoEmbedCode(videoEmbedCode));
    }

    componentWilReceiveProps(props) {
      this.setVideoState(props);
    }

    toggleVideo = () =>
      (this.state.isPlaying ? this.player.pause() : this.player.play());

    toggleVideoState = (isPlaying) => {
      if (
        isPlaying && (
          (options.isSmall || this.props.isSmall) ||
          this.props.breakpoint === BREAKPOINTS_NAME.small
        )
      ) this.toggleFullscreen();

      this.setState({
        hasPlayed: this.state.hasPlayed || isPlaying,
        isPlaying,
      });
    }

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
      } else if (this.iframe.requestFullscreen) {
        this.iframe.requestFullscreen();
      } else if (this.iframe.mozRequestFullScreen) {
        this.iframe.mozRequestFullScreen();
      } else if (this.iframe.webkitRequestFullscreen) {
        this.iframe.webkitRequestFullscreen();
      } else if (this.iframe.msRequestFullscreen) {
        this.iframe.msRequestFullscreen();
      }
    }

    render() {
      const { alt, imageSources } = this.props;
      const { hasPlayed, isVimeo, src } = this.state;
      const hasVideo = !!src;
      const shouldUseCoverPhoto = isVimeo;
      const isCoverPhotoInBackground = hasVideo && (!shouldUseCoverPhoto || hasPlayed);
      const hasCoverPhoto = shouldUseCoverPhoto && imageSources;
      const hasPlayButton = Boolean(isVimeo && !hasPlayed && hasCoverPhoto);

      const asset = imageSources && (
        <Picture
          alt={alt}
          isAriaHidden={isCoverPhotoInBackground}
          sourcesBySize={imageSources}
        />
      );

      return (
        <WrappedComponent
          {...this.props}
          assetWithVideo={
            hasVideo ? (
              <span
                className={cx(styles.wrapper, {
                  [styles.wrapper_hasCoverPhoto]: hasCoverPhoto,
                  [styles.wrapper_hasPlayed]: hasPlayed,
                  [styles.wrapper_isVimeo]: isVimeo,
                })}
              >
                {hasCoverPhoto && (
                  <span className={styles.sectionWrapper}>
                    <span
                      aria-hidden={hasPlayed}
                      className={styles.sectionWrapperInner}
                    >
                      {asset}
                    </span>
                  </span>
                )}
                <span className={styles.sectionWrapper}>
                  {!hasCoverPhoto && !isVimeo && <LoadingSpinner isSmall={options.isSmall || this.props.isSmall} />}
                  <span className={styles.sectionWrapperInner}>
                    <iframe
                      allowFullScreen
                      className={styles.iframe}
                      frameBorder="0"
                      mozallowfullscreen="true"
                      ref={(el) => { this.iframe = el; }}
                      src={src}
                      title={alt}
                      webkitallowfullscreen="true"
                    />
                  </span>
                  {hasCoverPhoto && !isCoverPhotoInBackground && (
                    <button
                      aria-hidden="true"
                      className={styles.buttonOverCoverPhoto}
                      onClick={this.toggleVideo}
                      tabIndex="-1"
                    />
                  )}
                  {hasPlayButton && (
                    <button
                      aria-label={this.context.translation('video.play')}
                      className={cx(styles.button, {
                        [styles.button_isSmall]: options.isSmall || this.props.isSmall,
                      })}
                      onClick={this.toggleVideo}
                    />
                  )}
                </span>
              </span>
            ) : asset
          }
          hasPlayButton={hasPlayButton}
          hasVideo={hasVideo}
        />
      );
    }
  }

  Video.propTypes = propTypes;
  Video.contextTypes = { translation: PropTypes.func.isRequired };

  return WithWindowListener(Video);
};

export default WithVideo;
