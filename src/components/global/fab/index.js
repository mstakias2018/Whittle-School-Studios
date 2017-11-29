import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import cx from 'classnames';

import Plx from 'react-plx';

import styles from './fab.module.css';

import FabArrowImage from '../../../assets/images/fab-arrow.svg';

import WithWindowListener from '../../../hocs/withWindow';

import { BREAKPOINTS } from '../../../constants/breakpoints';
import { PAGE_PADDING, FAB_SIZE } from '../../../constants/dimensions';
import { CLASSES } from '../../../constants/classes';
import { PROP_TYPES } from '../../../constants/custom-property-types';

const propTypes = {
  breakpoint: PROP_TYPES.BREAKPOINT,
};

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
    this.setInitialStates();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.breakpoint !== this.props.breakpoint) {
      this.setInitialStates();
    }
  }

  onFocus = () => {
    if (this.fabButton.scrollManager.scrollPosition < this.state.startAppearAt + (3 * this.state.elementHeight)) {
      window.scrollTo(0, this.state.startAppearAt + (3 * this.state.elementHeight));
    }
  }

  setInitialStates = () => {
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

  render() {
    const { fabTextImage, translations } = this.context;

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
              className={styles.fabLink}
              to="/#"
            >
              <img
                alt=""
                className={cx(styles.content, styles.contentText)}
                src={fabTextImage}
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

Fab.propTypes = propTypes;
Fab.contextTypes = {
  fabTextImage: PropTypes.string,
  translations: PropTypes.object,
};

export default WithWindowListener(Fab);
