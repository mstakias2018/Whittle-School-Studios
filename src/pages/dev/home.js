import React from 'react';

import Title from '../../components/global/title';
import PageWrapper from '../../components/structural/page-wrapper';

import { PAGE_TYPE } from '../../constants/settings';

import styles from './modules.module.css';

const Home = () => (
  <PageWrapper>
    <div className={styles.componentInfo}>Title</div>
    <Title
      text="The First
Global School
in *Shenzhen*."
      type={PAGE_TYPE.HOME}
    />
  </PageWrapper>
);

export default Home;
