import React from 'react';
import cx from 'classnames';
import styles from './style-guide.module.css';

const StyleGuide = () => (
  <div className={styles.wrapper}>
    <div className={styles.guide}>
      <h1>Style Guide</h1>
      <div className={styles.block}>
        <h1 className={styles.display}>400pt</h1>
      </div>
      <div className={styles.block}>
        <h1 className={styles.heading1Home}>H1 - resevered for Homepage</h1>
        <h1 className={styles.heading1Category}>H1 - all Category pages</h1>
        <h1 className={styles.heading1SubCategory}>H1 - for all sub pages</h1>
        <h2 className={styles.heading2}>H2 - sub Headline (reserved for Homepage) </h2>
        <h2 className={styles.heading2Italic}>H2 italic - Quote</h2>
        <h3 className={styles.heading3}>H3 - Section title</h3>
        <h3 className={styles.heading3Italic}>H3 italic - Section title</h3>
        <h4 className={styles.heading4}>H4 - Section title small</h4>
        <h4 className={styles.heading4Italic}>H4 italic - Section Label 1 / Sub Head</h4>
        <h5 className={styles.heading5Italic}>H5 -  Sub Nav Page Title / Sub Head for Category Page</h5>
      </div>
      <div className={styles.block}>
        <p className={cx('hasDropCap', styles.paragraph)}>
          This is paragraph with dropcap.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className={styles.paragraph}>
          This is paragraph without dropcap.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className={styles.descriptor}>Descriptor copy</p>
      </div>
      <div className={styles.block}>
        <a
          className={styles.link}
          href="localhost:8000"
        >
          CTA/Nav/ Links
        </a>
      </div>
      <div className={styles.block}>
        <a
          className={styles.nav}
          href="localhost:8000"
        >
          Nav link
        </a>
      </div>
      <div className={styles.block}>
        <p className={styles.video}>Video headline</p>
        <p className={styles.carousel}>Carousel names</p>
        <p className={styles.caption}>Caption</p>
        <p className={styles.footer}>Footer label</p>
        <p className={styles.eyebrow}>Labels/ Eyebrow / Legal </p>
        <p className={styles.menu}>Menu label</p>
      </div>
    </div>
  </div>
);

export default StyleGuide;
