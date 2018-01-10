/* eslint-disable max-len */
import React from 'react';

import PageWrapper from '../../components/structural/page-wrapper';
import PageHead from '../../components/structural/page-head';

import {
  PAGE_TYPE,
} from '../../constants/settings';

import styles from './modules.module.css';

const Home = () => (
  <PageWrapper>
    <div className={styles.componentInfo}>Title</div>
    <PageHead
      headline="The First Global School in *Shenzhen*."
      type={PAGE_TYPE.HOME}
    />
    <div className={styles.componentInfo}>hero</div>
    <div className={styles.componentInfo}>Section titles demo</div>
  </PageWrapper>
);

export default Home;
