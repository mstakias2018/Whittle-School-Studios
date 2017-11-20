import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'gatsby-link';

import Plx from 'react-plx';

import styles from './fab.module.css';

import FabTextImage from '../../../assets/images/fab-text-en.svg';
import FabTextImageCn from '../../../assets/images/fab-text-cn.svg';
import FabArrowImage from '../../../assets/images/fab-arrow.svg';

const {
  BREAKPOINTS,
} = require('./../../../constants/breakpoints');

const {
  PAGE_PADDING, FAB_SIZE,
} = require('./../../../constants/dimensions');

const {
  CLASSES,
} = require('./../../../constants/classes');

class Fab extends React.Component {
  state = {
    elementHeight: 0,
    clientHeight: 0,
    footerHeight: 0,
    startAppearAt: 0,
    appearDuration: 0,
    startRotationAt: 0,
    footerPadding: 0,
    clientWidth: 0,
  }

  componentDidMount = () => {
    setTimeout(() => {
      const clientHeight = window.innerHeight;
      const clientWidth = window.innerWidth;
      const elementHeight = clientWidth < BREAKPOINTS.BREAKPOINT_LG ? FAB_SIZE.SMALL : FAB_SIZE.LARGE;
      const footerHeight = document.querySelector(`.${CLASSES.FOOTER}`).clientHeight;
      let footerPadding = 0;
      if (clientWidth < BREAKPOINTS.BREAKPOINT_MD) {
        footerPadding = PAGE_PADDING.PAGE_PADDING_SM;
      } else if (clientWidth < BREAKPOINTS.BREAKPOINT_LG) {
        footerPadding = PAGE_PADDING.PAGE_PADDING_MD;
      } else footerPadding = PAGE_PADDING.PAGE_PADDING_LG;
      const pageContentTop = document.querySelector(`.${CLASSES.PAGE_CONTENT}`).offsetTop;

      this.setState({
        elementHeight,
        clientHeight,
        footerHeight,
        startAppearAt: pageContentTop,
        appearDuration: 3 * elementHeight,
        startRotationAt: pageContentTop + (3 * elementHeight),
        footerPadding,
        clientWidth,
      });
    }, 0);
  }

  onFocus = () => {
    if (this.fabButton.scrollManager.scrollPosition < this.state.startAppearAt + (3 * this.state.elementHeight)) {
      window.scrollTo(0, this.state.startAppearAt + (3 * this.state.elementHeight));
    }
  }

  render() {
    const { translations } = this.context;

    return (
      <div role="complementary">
        <Plx
          animateWhenNotInViewport
          className={styles.wrapper}
          onFocus={this.onFocus}
          parallaxData={
            this.state.clientWidth > BREAKPOINTS.BREAKPOINT_LG ?
            [
              {
                start: this.state.startAppearAt,
                duration: this.state.appearDuration,
                name: 'first',
                properties: [
                  {
                    startValue: 2 * this.state.elementHeight,
                    endValue: 0,
                    property: 'translateY',
                  },

                ],
              },
              {
                start: `.${CLASSES.FOOTER}`,
                duration: (this.state.footerHeight + this.state.footerPadding),
                offset: -this.state.clientHeight,
                name: 'third',
                properties: [
                  {
                    startValue: 0,
                    endValue: -this.state.footerHeight - this.state.footerPadding,
                    property: 'translateY',
                  },
                ],
              },
            ] :
            [
              {
                start: `.${CLASSES.FOOTER}`,
                duration: 150,
                offset: -this.state.clientHeight - 150,
                name: 'third',
                properties: [
                  {
                    startValue: 1,
                    endValue: 0,
                    property: 'opacity',
                  },
                ],
              },
            ]

          }
          ref={(el) => { this.fabButton = el; }}
        >
          <Plx
            animateWhenNotInViewport
            className={styles.content}
            parallaxData={[
              {
                start: this.state.startRotationAt,
                duration: `.${CLASSES.FOOTER}`,
                name: 'second',
                properties: [
                  {
                    startValue: 0,
                    endValue: this.state.clientWidth < BREAKPOINTS.BREAKPOINT_LG ? 0 : 360,
                    property: 'rotate',
                  },
                ],
              },
            ]}
          >
            <Link
              aria-label={translations.fab.ariaLabel}
              to="/#"
            >
              <img
                alt=""
                className={cx(styles.content, styles.circleEn)}
                src={FabTextImage}
              />
              <img
                alt=""
                className={cx(styles.content, styles.circleCn)}
                src={FabTextImageCn}
              />
            </Link>
          </Plx>
          <img
            alt=""
            className={styles.fabArrow}
            src={FabArrowImage}
          />
        </Plx>
      </div>
    );
  }
}

Fab.contextTypes = { translations: PropTypes.object };

export default Fab;
