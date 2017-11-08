import React from 'react';

import styles from './grid-guide.module.css';

const GridGuide = () => (
  <div className={styles.guide}>
    <h2>Full size</h2>
    <div className={styles.fullSize}>
      <div className={styles.element} />
      <div className={styles.element} />
      <div className={styles.element} />
      <div className={styles.element} />
      <div className={styles.element} />
      <div className={styles.element} />
      <div className={styles.element} />
      <div className={styles.element} />
      <div className={styles.element} />
      <div className={styles.element} />
      <div className={styles.element} />
      <div className={styles.element} />
    </div>
    <h2>Half size</h2>
    <div className={styles.gridContainer}>
      <div className={styles.halfSize}>
        <div className={styles.element} />
        <div className={styles.element} />
        <div className={styles.element} />
        <div className={styles.element} />
        <div className={styles.element} />
        <div className={styles.element} />
      </div>
    </div>
    <h2>Nested</h2>
    <div className={styles.fullSize}>
      <div className={styles.halfSize}>
        <div className={styles.element} />
        <div className={styles.element} />
        <div className={styles.element} />
        <div className={styles.element} />
        <div className={styles.element} />
        <div className={styles.element} />
      </div>
      <div className={styles.halfSize}>
        <div className={styles.element} />
        <div className={styles.element} />
        <div className={styles.element} />
        <div className={styles.element} />
        <div className={styles.element} />
        <div className={styles.element} />
      </div>
    </div>
    <h2>Deeper nesting</h2>
    <div className={styles.fullSize}>
      <div className={styles.halfSize}>
        <div className={styles.element} />
        <div className={styles.element} />
        <div className={styles.element} />
        <div className={styles.element} />
        <div className={styles.element} />
        <div className={styles.element} />
      </div>
      <div className={styles.halfSize}>
        <div className={styles.quarterSize}>
          <div className={styles.element} />
          <div className={styles.element} />
          <div className={styles.element} />
        </div>
        <div className={styles.quarterSize}>
          <div className={styles.element} />
          <div className={styles.element} />
          <div className={styles.element} />
        </div>
      </div>
    </div>
  </div>
);

export default GridGuide;
