/* eslint-disable max-len */
import React from 'react';

import styles from './modules.module.css';

import PullQuote from '../content-modules/global/pull-quote';
import ThreeUpBreaker from '../content-modules/global/three-up-breaker';

const Category = () => (
  <div className={styles.moduleWrapper}>
    <div className={styles.component}>
      <div className={styles.componentInfo}>3 up breaker component</div>
      <ThreeUpBreaker
        bodyText1="Any parent knows what a child or two can do to a home in short order. Imagine what 2,500 can do to a school building! We must choose materials that can co-exist with the natural energy of children—or that can be replaced easily when it is time"
        bodyText2="Any parent knows what a child or two can do to a home in short order. Imagine what 2,500 can do to a school building! We must choose materials that can co-exist with the natural energy of children—or that can be replaced easily when it is time"
        bodyText3="Any parent knows what a child or two can do to a home in short order. Imagine what 2,500 can do to a school building! We must choose materials that can co-exist with the natural energy of children—or that can be replaced easily when it is time"
        title1="A School of One"
        title2="Exceptional Faculty"
        title3="Progressive Pedagogy"
      />
      <div className={styles.componentInfo}>3 up breaker component with markdown</div>
      <ThreeUpBreaker
        bodyText1="Any parent knows what a child or two can do to a home in short order. _This is italic!_ We must choose materials that can co-exist with the natural energy of children—or that can be replaced easily when it is time"
        bodyText2="Any parent knows what a child or two can do to a home in short order. **This is bold** We must choose materials that can co-exist with the natural energy of children—or that can be replaced easily when it is time"
        bodyText3="Any parent knows what a child or two can do to a home in short order. **This is bold and _italic_, wow!** We must choose materials that can co-exist with the natural energy of children—or that can be replaced easily when it is time"
        title1="A School of One"
        title2="Exceptional Faculty"
        title3="Progressive Pedagogy"
      />
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
