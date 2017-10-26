import React from 'react';

import styles from './style-guide.module.css';

const StyleGuide = () => (
  <div className={styles.guide}>
    <h1>Style Guide</h1>
    <div className={styles.block}>
      <h1 className={styles.display}>Display</h1>
    </div>
    <div className={styles.block}>
      <h1 className={styles.heading1}>Heading 1</h1>
      <h2 className={styles.heading2}>Heading 2</h2>
      <h3 className={styles.heading3}>Heading 3</h3>
    </div>
    <div className={styles.block}>
      <p className={styles.paragraph}>Paragraph text</p>
      <p>
        <span className={styles.navigationText}>Navigation / </span> 
        <a
          className={styles.link}
          href="#"
        >
        CTAs
        </a>
      </p>
      <p><span className={styles.label}>Labels &amp; eyebrows</span></p>
    </div>
  </div>
);

export default StyleGuide;
