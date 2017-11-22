import React from 'react';
import PropTypes from 'prop-types';

import styles from './three-up-breaker.module.css';

import Markdown from '../../../components/global/markdown';

const propTypes = {
  bodyText1: PropTypes.string.isRequired,
  bodyText2: PropTypes.string.isRequired,
  bodyText3: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
};

const ThreeUpBreaker = ({
  title1, bodyText1, title2, bodyText2, title3, bodyText3,
}) => (
  <div className={styles.wideWrapper}>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.block}>
          <div className={styles.blockOrder}>
            <div className={styles.blockOrderInner}>01</div>
          </div>
          <div className={styles.blockContent}>
            <div className={styles.blockTitle}>
              {title1}
            </div>
            <Markdown
              className={styles.blockText}
              isShort
              source={bodyText1}
            />
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.blockOrder}>
            <div className={styles.blockOrderInner}>02</div>
          </div>
          <div className={styles.blockContent}>
            <div className={styles.blockTitle}>
              {title2}
            </div>
            <Markdown
              className={styles.blockText}
              isShort
              source={bodyText2}
            />
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.blockOrder}>
            <div className={styles.blockOrderInner}>03</div>
          </div>
          <div className={styles.blockContent}>
            <div className={styles.blockTitle}>
              {title3}
            </div>
            <Markdown
              className={styles.blockText}
              isShort
              source={bodyText3}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

ThreeUpBreaker.propTypes = propTypes;

export default ThreeUpBreaker;
