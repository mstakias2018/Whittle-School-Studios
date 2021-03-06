import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Plx from 'react-plx';

import styles from './fab.module.css';

import FabArrowImage from '../../../assets/images/fab-arrow.svg';

import Link from '../../global/link';
import WithWindowListener from '../../../hocs/withWindow';
import { sendAnalyticsEvent } from '../../../utils/global';

import { BREAKPOINTS_NAME } from '../../../constants/breakpoints';
import { COMPONENT_BOTTOM_PADDING, FAB_SIZE } from '../../../constants/dimensions';
import { CLASSES } from '../../../constants/classes';
import { PROP_SHAPES, PROP_TYPES } from '../../../constants/custom-property-types';
import { IMAGE_TYPE } from '../../../constants/images';

const propTypes = {
  ...PROP_TYPES.WITH_WINDOW,
  isHomePage: PropTypes.bool,
};

const smallerThanLG = [BREAKPOINTS_NAME.small, BREAKPOINTS_NAME.medium];

class Fab extends React.Component {
  state = {
    bottomFabBarrier: `.${CLASSES.FOOTER}`,
    clientHeight: 1,
    elementHeight: 1,
    initiallyDisabled: true,
    rotationOffset: 0,
    secondLGOffset: 0,
    startAppearAt: 0,
    startAppearAtOffset: 0,
    startRotationAt: 0,
  }

  componentDidMount = () => {
    this.setInitialStates(this.props.isHomePage);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dimensions !== this.props.dimensions) {
      this.setInitialStates(this.props.isHomePage);
    }
  }

  onFocus = () => {
    if (this.fabButton.scrollManager.scrollPosition < this.state.startAppearAt + (3 * this.state.elementHeight)) {
      window.scrollTo(0, this.state.startAppearAt + (3 * this.state.elementHeight));
    }
  }

  setInitialStates = (shouldWait = false) => {
    setTimeout(() => {
      const clientHeight = window.innerHeight;
      const elementHeight = FAB_SIZE[this.props.breakpoint];
      const pageContentTop = document.querySelector(`.${CLASSES.PAGE_CONTENT}`).offsetTop;
      const checkRecirculation = document.querySelector(`.${CLASSES.RECIRCULATION}`);
      const countdownComponentWrapper = document.querySelector(`.${CLASSES.COUNTDOWN_COMPONENT_WRAPPER}`);
      const bottomFabBarrier = checkRecirculation ?
        `.${CLASSES.RECIRCULATION}` :
        `.${CLASSES.FOOTER}`;
      const rotationOffset = checkRecirculation ? COMPONENT_BOTTOM_PADDING[this.props.breakpoint] : 0;
      const secondLGOffset = checkRecirculation ? COMPONENT_BOTTOM_PADDING[this.props.breakpoint] - 20 : 0;
      let startAppearAt = pageContentTop;
      let startAppearAtOffset = 0;
      if (countdownComponentWrapper) {
        startAppearAt = countdownComponentWrapper;
        startAppearAtOffset = smallerThanLG.includes(this.props.breakpoint) ?
          countdownComponentWrapper.clientHeight + elementHeight :
          countdownComponentWrapper.clientHeight - (2 * elementHeight);
        if (clientHeight > 1000) {
          startAppearAt = 0;
          startAppearAtOffset = 0;
        }
      }
      this.setState({
        bottomFabBarrier,
        clientHeight,
        elementHeight,
        initiallyDisabled: false,
        rotationOffset,
        secondLGOffset,
        startAppearAt,
        startAppearAtOffset,
        startRotationAt: pageContentTop + (3 * elementHeight),
      });
    }, shouldWait ? 1500 : 0);
  }

  render() {
    const { fabLink, globalImages, translation } = this.context;
    return (
      <div className={styles.wrapperAbsolute}>
        <Plx
          animateWhenNotInViewport
          className={cx(styles.wrapper, { [styles.wrapper_isHidden]: this.state.initiallyDisabled })}
          onFocus={this.onFocus}
          parallaxData={
            !smallerThanLG.includes(this.props.breakpoint) ?
            [
              {
                duration: 2 * this.state.elementHeight,
                name: 'firstLG',
                properties: [
                  {
                    endValue: 0,
                    property: 'translateY',
                    startValue: 2 * this.state.elementHeight,
                  },
                ],
                start: this.state.startAppearAt,
                startOffset: this.state.startAppearAtOffset,
              },
              {
                duration: '100%',
                name: 'secondLG',
                properties: [],
                start: this.state.bottomFabBarrier,
                startOffset: this.props.isHomePage ? 0 : -this.state.secondLGOffset,
              },
            ] :
            [
              {
                duration: this.state.clientHeight / 2,
                name: 'firstSM',
                properties: [
                  {
                    endValue: 1,
                    property: 'opacity',
                    startValue: 0,
                  },
                ],
                start: this.state.startAppearAt,
                startOffset: this.state.startAppearAtOffset,
              },
              {
                duration: this.state.clientHeight / 2,
                name: 'secondSM',
                properties: [
                  {
                    endValue: 0,
                    property: 'opacity',
                    startValue: 1,
                  },
                ],
                start: this.state.bottomFabBarrier,
                startOffset: -this.state.clientHeight / 2,
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
               end: this.state.bottomFabBarrier,
               endOffset: -this.state.rotationOffset,
               name: 'firstRotation',
               properties: [
                 {
                   endValue: 360,
                   property: 'rotate',
                   startValue: 0,
                 },
               ],
               start: this.state.startRotationAt,
              },
            ]}
          >
            <Link
              aria-label={translation && translation('fab.ariaLabel')}
              className={styles.fabLink}
              onClick={() => sendAnalyticsEvent('FAB', 'click', fabLink)}
              to={fabLink}
            >
              <img
                alt=""
                className={cx(styles.content, styles.contentText)}
                src={globalImages && globalImages[IMAGE_TYPE.FAB_TEXT]}
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
  fabLink: PropTypes.string.isRequired,
  globalImages: PROP_SHAPES.GLOBAL_IMAGES.isRequired,
  translation: PropTypes.func.isRequired,
};

export default WithWindowListener(Fab);
