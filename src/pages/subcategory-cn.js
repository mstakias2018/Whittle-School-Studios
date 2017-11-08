import React from 'react';
import cx from 'classnames';

import Title from '../components/global/title';

import { alignment as TitleAlign, types as TitleTypes } from '../components/global/title/constants';

import styles from './modules.module.css';

const SubcategoryCn = () => (
  <div className={cx('language--chinese', styles.moduleWrapper)}>
    <Title
      align={TitleAlign.alignCenter}
      text="促进我们校园的经济文化多样性宋体华文仿宋"
      type={TitleTypes.typeSubCategory}
    />
  </div>
);

export default SubcategoryCn;
