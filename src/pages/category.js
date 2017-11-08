import React from 'react';

import Title from '../components/global/title';

import { alignment as TitleAlign, types as TitleTypes } from '../components/global/title/constants';

import styles from './modules.module.css';

const Category = () => (
  <div className={styles.moduleWrapper}>
    <Title
      align={TitleAlign.alignLeft}
      text="Commitment
to Excellence in Education"
      type={TitleTypes.typeCategory}
    />
  </div>
);

export default Category;
