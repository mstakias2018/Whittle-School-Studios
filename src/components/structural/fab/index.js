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
import { PROP_SHAPES } from '../../../constants/custom-property-types';

const propTypes = {
  breakpoint: PROP_SHAPES.BREAKPOINT,
  dimensions: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
};

class Fab extends React.Component {
  state = {
    appearDuration: 0,
    bottomFabBarrier: `.${CLASSES.FOOTER}`,
    clientHeight: 0,
    elementHeight: 0,
    recirculationPadding: 0,
    startAppearAt: 0,
    startRotationAt: 0,
  }

  componentDidMount = () => {
    this.setInitialStates();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dimensions !== this.props.dimensions) {
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
      const elementHeight = FAB_SIZE[this.props.breakpoint];
      const pageContentTop = document.querySelector(`.${CLASSES.PAGE_CONTENT}`).offsetTop;
      const checkRecirculation = document.querySelector(`.${CLASSES.RECIRCULATION}`);
      const bottomFabBarrier = checkRecirculation ?
        `.${CLASSES.RECIRCULATION}` :
        `.${CLASSES.FOOTER}`;
      const recirculationPadding = checkRecirculation ? COMPONENT_BOTTOM_PADDING[this.props.breakpoint] : 0;

      this.setState({
        appearDuration: 3 * elementHeight,
        bottomFabBarrier,
        clientHeight,
        elementHeight,
        recirculationPadding,
        startAppearAt: pageContentTop,
        startRotationAt: pageContentTop + (3 * elementHeight),
      });
    }, 0);
  }

  render() {
    const { fabLink, fabTextImage, translation } = this.context;
    const smallerThanLG = [BREAKPOINTS_NAME.small, BREAKPOINTS_NAME.medium];

    return (
      <div
        className={styles.wrapperAbsolute}
        role="complementary"
      >
        <Plx
          animateWhenNotInViewport
          className={styles.wrapper}
          onFocus={this.onFocus}
          parallaxData={
            !smallerThanLG.includes(this.props.breakpoint) ?
            [
              {
                duration: this.state.appearDuration,
                name: 'first',
                properties: [
                  {
                    endValue: 0,
                    property: 'translateY',
                    startValue: 2 * this.state.elementHeight,
                  },
                ],
                start: this.state.startAppearAt,
              },
              {
                duration: '100%',
                name: 'second',
                properties: [
                  {
                    endValue: 1,
                    property: 'opacity',
                    startValue: 1,
                  },
                ],
                start: this.state.bottomFabBarrier,
                startOffset: -this.state.recirculationPadding,
              },
            ] :
            [
              {
                duration: this.state.clientHeight / 2,
                name: 'third',
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
               end: `.${CLASSES.FOOTER}`,
               name: 'second',
               properties: [
                 {
                   endValue: smallerThanLG.includes(this.props.breakpoint) ?
                    0 : 360,
                   property: 'rotate',
                   startValue: 0,
                 },
               ],
               start: this.state.startRotationAt,
              },
            ]}
          >
            <Link
              aria-label={translation('fab.ariaLabel')}
              className={styles.fabLink}
              onClick={() => sendAnalyticsEvent('FAB', 'click', fabLink)}
              to={fabLink}
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
  fabLink: PropTypes.string.isRequired,
  fabTextImage: PropTypes.string.isRequired,
  translation: PropTypes.func.isRequired,
};

export default WithWindowListener(Fab);
