import React from 'react';

import Title from '../components/global/title';

import { alignment as TitleAlign, types as TitleTypes } from '../components/global/title/constants';

import styles from './modules.module.css';

const Subcategory = () => (
  <div className={styles.moduleWrapper}>
    <Title
      align={TitleAlign.alignCenter}
      text="Promoting Economic & Cultural Diversity Across Our Campuses"
      type={TitleTypes.typeSubCategory}
    />
  </div>
);

export default Subcategory;
