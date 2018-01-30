import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './with-video.module.css';
import Picture from '../../components/global/picture';
import WithWindowListener from '../withWindow';
import LoadingSpinner from '../../components/structural/loading-spinner';
import playIcon from '../../assets/images/video-play.svg';

import { PROP_TYPES } from '../../constants/custom-property-types';
import { BREAKPOINTS_NAME } from '../../constants/breakpoints';
import { parseVideoEmbedCode } from '../../utils/strings';

const propTypes = PROP_TYPES.VIDEO;

const WithVideo = (WrappedComponent, options = {}) => {
  class Video extends Component {
    state = {
      hasPlayed: false,
      isLoaded: false,
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
        this.player.on('loaded', () => this.setState({ isLoaded: true }));
        this.player.on('play', this.toggleVideoState.bind(null, true));
        this.player.on('pause', this.toggleVideoState.bind(null, false));
      }
    }

    // When user clicks one of our UI elements to play the video
    onUIPlay = () => {
      this.player.play();
      this.toggleVideoState(true);
    }

    setVideoState({ videoEmbedCode } = this.props) {
      this.setState(parseVideoEmbedCode(videoEmbedCode));
    }

    toggleVideoState = (isPlaying) => {
      if (this.state.isPlaying === isPlaying) return;

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

    componentWilReceiveProps(props) {
      this.setVideoState(props);
    }

    // Adapted from https://github.com/vimeo/player.js/issues/52#issuecomment-337246627
    toggleFullscreen = () => {
      const hasFullScreenElement = document.fullscreenElement
        || document.mozFullScreenElement
        || document.webkitFullscreenElement
        || document.msFullscreenElement;

      // This means the browser sorted it out on its own - this happens on Android
      if (hasFullScreenElement) return;

      if (this.iframe.requestFullscreen) {
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
        isLoaded,
        isVimeo,
        src,
      } = this.state;
      const hasVideo = !!src;
      const shouldUseCoverPhoto = isVimeo;
      const isCoverPhotoInBackground = hasVideo && (!shouldUseCoverPhoto || hasPlayed);
      const hasCoverPhoto = shouldUseCoverPhoto && imageSources;
      const hasPlayButton = !!(isVimeo && !hasPlayed && hasCoverPhoto);
      const isLoadingVimeo = isVimeo && !isLoaded;

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
                  [styles.wrapper_hasPlayButton]: hasPlayButton,
                  [styles.wrapper_hasPlayed]: hasPlayed,
                  [styles.wrapper_isLoaded]: isLoaded,
                  [styles.wrapper_isVimeo]: isVimeo,
                })}
              >
                <LoadingSpinner
                  className={cx(styles.loadingSpinner)}
                  isSmall={options.isSmall || this.props.isSmall}
                />
                <span className={cx(styles.sectionWrapper, styles.coverPhotoWrapper)}>
                  <span
                    aria-hidden={hasPlayed}
                    className={styles.sectionWrapperInner}
                  >
                    {asset}
                  </span>
                </span>
                <span className={styles.sectionWrapper}>
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
                  {hasCoverPhoto && !isCoverPhotoInBackground && !isLoadingVimeo && (
                    <button
                      aria-hidden="true"
                      className={styles.buttonOverCoverPhoto}
                      onClick={this.onUIPlay}
                      tabIndex="-1"
                    />
                  )}
                  <button
                    aria-label={this.context.translation(isLoadingVimeo ? 'video.playLoading' : 'video.play')}
                    className={cx(styles.button, {
                      [styles.button_isSmall]: options.isSmall || this.props.isSmall,
                    })}
                    disabled={isLoadingVimeo}
                    onClick={isLoadingVimeo ? undefined : this.onUIPlay}
                  >
                    <span className={styles.buttonInner}>
                      <span className={cx(styles.buttonIconWrapper, styles.buttonIconWrapper_isPlayButton)}>
                        <img
                          alt=""
                          className={styles.playIcon}
                          src={playIcon}
                        />
                      </span>
                    </span>
                    <span className={styles.buttonInner}>
                      <span className={cx(styles.buttonIconWrapper, styles.buttonIconWrapper_isLoadingSpinner)}>
                        <LoadingSpinner className={cx(styles.loadingSpinner, styles.loadingSpinner_isInButton)} />
                      </span>
                    </span>
                  </button>
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
