import React from 'react';

import Title from '../components/global/title';

import { alignment as TitleAlign, types as TitleTypes } from '../components/global/title/constants';

import styles from './modules.module.css';

const HomeCn = () => (
  <div className={styles.moduleWrapper}>
    <Title
      align={TitleAlign.alignLeft}
      text="第一个全球学校在深圳"
      type={TitleTypes.typeHome}
    />
  </div>
);

export default HomeCn;
