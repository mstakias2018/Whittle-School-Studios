import React from 'react';

import styles from './header-languages.module.css';

const Languages = () => (
  <div className={styles.languages}>
      <ul className={styles.languageItems}>
        <li className={styles.languageItem}>
          <a href="#ch">China</a>
        </li>
        <li className={styles.languageItem}>
          <a href="#en">English</a>
        </li>
      </ul>
  </div>
);

export default Languages;
