/* eslint-disable max-len */
import React from 'react';
import cx from 'classnames';

import styles from './modules.module.css';

const ArticleCn = () => (
  <div className={cx('wrapper_isChinese', styles.moduleWrapper)}>
    <div className={styles.component}>
      <div>Nothing here right now!</div>
    </div>
  </div>
);

export default ArticleCn;
