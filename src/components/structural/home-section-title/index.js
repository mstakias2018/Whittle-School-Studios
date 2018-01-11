import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Plx from 'react-plx';
import WithWindowListener from '../../../hocs/withWindow';

import styles from './home-section-title.module.css';

const propTypes = {
  color: PropTypes.string,
  containerIsWide: PropTypes.bool,
  dimensions: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  isBreakingTop: PropTypes.bool,
  position: PropTypes.string,
  text: PropTypes.string.isRequired,
};

class HomeSectionTitle extends React.Component {
  state = {
    clientHeight: 0,
  }

  componentDidMount = () => {
    this.setInitialStates();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dimensions !== this.props.dimensions) {
      this.setInitialStates();
    }
  }

  setInitialStates = () => {
    setTimeout(() => {
      const clientHeight = window.innerHeight;
      this.setState({
        clientHeight,
      });
    }, 0);
  }

  render() {
    const {
      color, containerIsWide, isBreakingTop, text, position,
    } = this.props;

    return (
      <Plx
        animateWhenNotInViewport
        className={cx(
            styles.wrapper,
            { [styles.wideContainer]: containerIsWide }
        )}
        parallaxData={
          [{
            duration: this.state.clientHeight * 1.5,
            offset: -this.state.clientHeight,
            properties: [
              {
                endValue: -210,
                property: 'translateY',
                startValue: 0,
              },
            ],
            start: 'self',
          }]
        }
      >
        <div className={cx(
            styles.text,
            styles[color],
            styles[position],
            isBreakingTop ? styles.top : styles.center
          )}
        >
          {text}
        </div>
      </Plx>
    );
  }
}

HomeSectionTitle.propTypes = propTypes;

export default WithWindowListener(HomeSectionTitle);
