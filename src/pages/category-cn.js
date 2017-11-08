import React from 'react';

import Title from '../components/global/title';

import { alignment as TitleAlign, types as TitleTypes } from '../components/global/title/constants';

import styles from './modules.module.css';

const CategoryCn = () => (
  <div className={styles.moduleWrapper}>
    <Title
      align={TitleAlign.alignLeft}
      text="促进我们校园的经济文化多样性宋体华文仿宋"
      type={TitleTypes.typeCategory}
    />
  </div>
);

export default CategoryCn;
