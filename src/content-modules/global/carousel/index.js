import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import styles from './carousel.module.css';

import { adaptSourcesBySize } from '../../../utils/images';
import {
  getInlineImagePropTypes,
  PROP_SHAPES,
} from '../../../constants/custom-property-types';

import { KEYS } from './../../../constants/keys';

const propTypes = {
  imageSources: PropTypes.arrayOf(PROP_SHAPES.IMAGE_SOURCES).isRequired,
  slides: PropTypes.arrayOf(PropTypes.shape(getInlineImagePropTypes(true))).isRequired,
};

const { CLASSES } = require('./../../../constants/classes');

const { TIMINGS } = require('./../../../constants/timings');

const CAROUSEL_DIRECTION = {
  LEFT: -1,
  RIGHT: 1,
};

const pictureTagName = 'PICTURE';

class Carousel extends Component {
  state = {
    currentCaption: this.props.slides[0].caption,
    currentSlide: 0,
    fading: false,
  };

  componentWillMount() {
    const { imageSources, slides } = this.props;

    this.formattedItems = imageSources.map((itemImageSources, i) => {
      const { alt, shape } = slides[i];
      const { sourceList, largestSrc } = adaptSourcesBySize(itemImageSources);

      return {
        imageSet: sourceList,
        original: largestSrc,
        originalAlt: alt,
        originalClass: `_is${shape}`,
      };
    });
  }

  componentDidMount = () => {
    this.handleARIA();
  }

  componentDidUpdate = () => {
    this.handleARIA();
  }

  onClickModalClose = () => {
    this.gallery.exitFullScreen();
  }

  onClickLeft = () => {
    this.changeSlide(CAROUSEL_DIRECTION.LEFT);
  }

  onClickRight = () => {
    this.changeSlide(CAROUSEL_DIRECTION.RIGHT);
  }

  onClickImage = (e) => {
    let imageClassList = null;
    if (e.target.parentNode.nodeName.toLowerCase() === pictureTagName.toLowerCase()) {
      imageClassList = e.target.parentNode.parentNode.parentNode.classList;
    } else {
      imageClassList = e.target.parentNode.parentNode.classList;
    }
    if (imageClassList.contains(CLASSES.GALLERY_IMAGE_CENTER)) {
      // Full screen mode is temporarily disabled.
      // this.gallery.fullScreen();
    } else if (imageClassList.contains(CLASSES.GALLERY_IMAGE_RIGHT)) {
      this.onClickRight();
    } else if (imageClassList.contains(CLASSES.GALLERY_IMAGE_LEFT)) {
      this.onClickLeft();
    }
  }

  onFullScreenClick = () => {
    this.gallery.fullScreen();
  }

  onSlide = (e) => {
    this.setState({
      fading: true,
    });
    setTimeout(() => {
      this.setState({
        currentCaption: this.props.slides[e].caption,
        fading: false,
      });
    }, TIMINGS.CAROUSEL_CAPTION_CHANGE_TIME);
  }

  changeSlide = (direction) => {
    this.setState({
      currentSlide: this.gallery.getCurrentIndex() + direction,
    });
    this.gallery.slideToIndex(this.gallery.getCurrentIndex() + direction);
  }

  handleARIA = () => {
    let allGalleryItems;
    let currentItem;
    let peekingImages;
    if (typeof window !== 'undefined') {
      allGalleryItems = document.querySelectorAll(`.${CLASSES.GALLERY_IMAGE} img`);
      // We use querySelectorAll here in case we have more than one carousel on page
      currentItem = document.querySelectorAll(`.${CLASSES.GALLERY_IMAGE_CENTER} .${CLASSES.GALLERY_IMAGE} img`);

      peekingImages = document.querySelectorAll(`.${CLASSES.GALLERY_IMAGE_SLIDE}`);
      // IE fix
      for (let i = 0, len = allGalleryItems.length; i < len; i += 1) {
        allGalleryItems[i].setAttribute('aria-hidden', 'true');
      }
      for (let i = 0, len = currentItem.length; i < len; i += 1) {
        currentItem[i].setAttribute('aria-hidden', 'false');
      }
      for (let i = 0, len = peekingImages.length; i < len; i += 1) {
        peekingImages[i].setAttribute('aria-hidden', 'true');
      }
    }
  }

  handleKey = (e) => {
    const preventKeys = [KEYS.left, KEYS.right];

    if ((e.keyCode === KEYS.left && this.isPrevButtonDisabled())
    || (e.keyCode === KEYS.right && this.isNextButtonDisabled())) {
      return;
    }

    if (preventKeys.includes(e.keyCode)) {
      e.preventDefault();
    }

    switch (e.keyCode) {
      case KEYS.left:
        this.onClickLeft();
        break;
      case KEYS.right:
        this.onClickRight();
        break;
      default:
        break;
    }
  }

  isNextButtonDisabled = () => this.state.currentSlide === this.props.slides.length - 1;

  isPrevButtonDisabled = () => this.state.currentSlide === 0;

  renderLeftNav = () => {
    const { translation } = this.context;
    return (
      <button
        aria-disabled={this.isPrevButtonDisabled()}
        aria-label={translation('carousel.prevAriaLabel')}
        className={cx(
          CLASSES.LEFT_ARROW,
          styles.arrow,
          styles.arrowLeft,
          { [styles.arrow_isDisabled]: this.isPrevButtonDisabled() }
        )}
        onClick={this.onClickLeft}
        onKeyDown={this.handleKey}
      />
    );
  }

  renderRightNav = () => {
    const { translation } = this.context;

    return (
      <button
        aria-disabled={this.isNextButtonDisabled()}
        aria-label={translation('carousel.nextAriaLabel')}
        className={cx(
          CLASSES.RIGHT_ARROW,
          styles.arrow,
          styles.arrowRight,
          { [styles.arrow_isDisabled]: this.isNextButtonDisabled() }
        )}
        onClick={this.onClickRight}
        onKeyDown={this.handleKey}
      />
    );
  }

  renderFullscreenButton = () => {
    const { translation } = this.context;

    return (
      <button
        aria-label={translation('carousel.fullScreenAriaLabel')}
        className={styles.fullScreenButton}
        onClick={this.onFullScreenClick}
      />
    );
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.componentWrapper}>
          <div className={styles.componentContent}>
            <ImageGallery
              disableArrowKeys
              infinite={false}
              items={this.formattedItems}
              onClick={this.onClickImage}
              onSlide={this.onSlide}
              ref={(el) => { this.gallery = el; }}
              showFullscreenButton={false}
              showNav={false}
              showPlayButton={false}
              showThumbnails={false}
              useBrowserFullscreen={false}
            />
            {/* Full screen mode is temporarily disabled. */}
            {/* <button
              className={styles.closeButton}
              onClick={this.onClickModalClose}
            >
              Close
            </button> */}
            <div className={styles.carouselInfo}>
              <div className={cx(
                  styles.caption,
                  { [styles.caption_isFading]: this.state.fading }
                )}
              >
                {this.state.currentCaption}
              </div>
              {this.renderLeftNav()}
              {this.renderRightNav()}
              {/* Full screen mode is temporarily disabled. */}
              {/* {this.renderFullscreenButton()} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Carousel.contextTypes = { translation: PropTypes.func.isRequired };
Carousel.propTypes = propTypes;

export default Carousel;
