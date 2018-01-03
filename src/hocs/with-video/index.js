import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './with-video.module.css';
import Picture from '../../components/global/picture';
import WithWindowListener from '../withWindow';

import { PROP_TYPES } from '../../constants/custom-property-types';
import { BREAKPOINTS_NAME } from '../../constants/breakpoints';

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
      const src = videoEmbedCode &&
        videoEmbedCode.embedCode &&
        videoEmbedCode.embedCode.match(/src="(https?:\/\/[\w.-/?=&]*)"/)[1];

      this.setState({
        isVimeo: !!(src && src.match('player.vimeo.com')),
        src,
      });
    }

    componentWilReceiveProps(props) {
      this.setVideoState(props);
    }

    toggleVideo = () =>
      (this.state.isPlaying ? this.player.pause() : this.player.play());

    toggleVideoState = (isPlaying) => {
      if (
        isPlaying && (
          options.isSmall ||
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
      const {
        hasPlayed,
        isPlaying,
        isVimeo,
        src,
      } = this.state;
      const hasVideo = !!src;
      const hasPlayButton = isVimeo;
      const shouldUseCoverPhoto = isVimeo;
      const isCoverPhotoInBackground = hasVideo && (!shouldUseCoverPhoto || hasPlayed);
      const hasCoverPhoto = shouldUseCoverPhoto && imageSources;

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
              <div
                className={cx(styles.wrapper, {
                  [styles.wrapper_hasCoverPhoto]: hasCoverPhoto,
                  [styles.wrapper_hasPlayed]: hasPlayed,
                  [styles.wrapper_isPlaying]: isPlaying,
                })}
              >
                {hasCoverPhoto && (
                  <div aria-hidden={hasPlayed}>
                    {asset}
                  </div>
                )}
                <div className={styles.videoWrapper}>
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
                  {hasCoverPhoto && !isCoverPhotoInBackground && (
                    <button
                      aria-hidden="true"
                      className={styles.hiddenButton}
                      onClick={this.toggleVideo}
                      tabIndex="-1"
                    />
                  )}
                  {hasPlayButton && (
                    <button
                      aria-label={this.context.translations.video[isPlaying ? 'pause' : 'play']}
                      className={cx(styles.button, {
                        [styles.button_isSmall]: options.isSmall,
                      })}
                      onClick={this.toggleVideo}
                    />
                  )}
                </div>
              </div>
            ) : asset
          }
          hasPlayButton={hasPlayButton}
        />
      );
    }
  }

  Video.propTypes = propTypes;
  Video.contextTypes = { translations: PropTypes.object.isRequired };

  return WithWindowListener(Video);
};

export default WithVideo;
