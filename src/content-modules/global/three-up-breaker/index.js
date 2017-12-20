import React, { Component } from 'react';
import styles from './three-up-breaker.module.css';

import Markdown from '../../../components/global/markdown';

import { PROP_SHAPES } from '../../../constants/custom-property-types';
import WithWindowListener from '../../../hocs/withWindow';

const propTypes = PROP_SHAPES.THREE_UP_BREAKER;

class ThreeUpBreaker extends Component {
  state = {
    minTitleHeight: 0,
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setInitialStates();
    }, 0);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dimensions !== this.props.dimensions) {
      this.setState({
        minTitleHeight: 0,
      });
      this.setInitialStates();
    }
  }

  setInitialStates = () => {
    setTimeout(() => {
      const highestTitle =
        Math.max(this.titleOne.clientHeight, this.titleTwo.clientHeight, this.titleThree.clientHeight);
      this.setState({
        minTitleHeight: highestTitle,
      });
    }, 0);
  }

  render() {
    const {
      title1, content1, title2, content2, title3, content3,
    } = this.props;

    const styleMinTitleHight = {
      minHeight: this.state.minTitleHeight,
    };

    return (
      <div className={styles.wideWrapper}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.block}>
              <div className={styles.blockOrder}>
                <div className={styles.blockOrderInner}>01</div>
              </div>
              <div className={styles.blockContent}>
                <h2
                  className={styles.blockTitle}
                  ref={(el) => { this.titleOne = el; }}
                  style={styleMinTitleHight}
                >
                  {title1}
                </h2>
                <Markdown
                  className={styles.blockText}
                  source={content1.markdown}
                />
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.blockOrder}>
                <div className={styles.blockOrderInner}>02</div>
              </div>
              <div className={styles.blockContent}>
                <h2
                  className={styles.blockTitle}
                  ref={(el) => { this.titleTwo = el; }}
                  style={styleMinTitleHight}
                >
                  {title2}
                </h2>
                <Markdown
                  className={styles.blockText}
                  source={content2.markdown}
                />
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.blockOrder}>
                <div className={styles.blockOrderInner}>03</div>
              </div>
              <div className={styles.blockContent}>
                <h2
                  className={styles.blockTitle}
                  ref={(el) => { this.titleThree = el; }}
                  style={styleMinTitleHight}
                >
                  {title3}
                </h2>
                <Markdown
                  className={styles.blockText}
                  source={content3.markdown}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ThreeUpBreaker.propTypes = propTypes;

export default WithWindowListener(ThreeUpBreaker);
