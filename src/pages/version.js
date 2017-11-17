import React from 'react';

import Title from '../components/global/title';

import { PAGE_TYPE } from '../constants/settings';

import styles from './modules.module.css';

const Home = () => (
  <div className={styles.moduleWrapper}>
    <div className={styles.component}>
      <Title
        text="Version Info"
        type={PAGE_TYPE.HOME}
      />
      <h2><strong>Branch:</strong> {process.env.GATSBY_BRANCH}</h2>
      <h2><strong>Commit:</strong> {process.env.GATSBY_COMMIT_REF}</h2>
    </div>
  </div>
);

export default Home;
