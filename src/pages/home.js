import React from 'react';

import Title from '../components/global/title';

import { alignment as TitleAlign, types as TitleTypes } from '../components/global/title/constants';

import styles from './modules.module.css';

const Home = () => (
  <div className={styles.moduleWrapper}>
    <Title
      align={TitleAlign.alignLeft}
      text="The First
 Global School
in *Shenzhen*."
      type={TitleTypes.typeHome}
    />
  </div>
);

export default Home;
