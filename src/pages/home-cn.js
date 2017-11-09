import React from 'react';
import cx from 'classnames';

import Title from '../components/global/title';

import { PAGE_TYPE } from '../constants/settings';

import styles from './modules.module.css';

const HomeCn = () => (
  <div className={cx('language--chinese', styles.moduleWrapper)}>
    <Title
      text="第一个全球学校在深圳"
      type={PAGE_TYPE.HOME}
    />
  </div>
);

export default HomeCn;
