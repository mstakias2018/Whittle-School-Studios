import React from 'react';

import styles from './three-up-breaker.module.css';

import Markdown, { ALLOWED_TYPES } from '../../../components/global/markdown';

import { PROP_TYPES } from '../../../constants/custom-property-types';

const propTypes = PROP_TYPES.THREE_UP_BREAKER;

const ThreeUpBreaker = ({
  title1, content1, title2, content2, title3, content3,
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
              allowedTypes={ALLOWED_TYPES.SHORT_TEXT}
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
            <div className={styles.blockTitle}>
              {title2}
            </div>
            <Markdown
              allowedTypes={ALLOWED_TYPES.SHORT_TEXT}
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
            <div className={styles.blockTitle}>
              {title3}
            </div>
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

ThreeUpBreaker.propTypes = propTypes;

export default ThreeUpBreaker;
