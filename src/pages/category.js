/* eslint-disable max-len */
import React from 'react';

import styles from './modules.module.css';

import PullQuote from '../content-modules/global/pull-quote';

const Category = () => (
  <div className={styles.moduleWrapper}>
    <div className={styles.component}>
      <div className={styles.componentInfo}>Pull quote with author</div>
      <PullQuote
        author="Chris Whittle"
        quote="If a school doesn’t measure the progress of every child on multiple dimensions, then its mission statement is nothing more than pretty words."
      />
      <div className={styles.componentInfo}>Pull quote without author</div>
      <PullQuote
        quote="If a school doesn’t measure the progress of every child on multiple dimensions, then its mission statement is nothing more than pretty words."
      />
    </div>
  </div>
);

export default Category;
