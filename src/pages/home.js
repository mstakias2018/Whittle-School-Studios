import React from 'react';

import Title from '../components/global/title';

import { PAGE_TYPE } from '../constants/settings';

import styles from './modules.module.css';

const Home = () => (
  <div className={styles.moduleWrapper}>
    <Title
      text="The First
 Global School
in *Shenzhen*."
      type={PAGE_TYPE.HOME}
    />
  </div>
);

export default Home;
