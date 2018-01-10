/* eslint-disable max-len */
import React from 'react';

import PageWrapper from '../../components/structural/page-wrapper';
import PageHead from '../../components/structural/page-head';

import {
  PAGE_TYPE,
} from '../../constants/settings';

import styles from './modules.module.css';

const HomeCn = () => (
  <PageWrapper>
    <div className="wrapper_isChinese">
      <div className={styles.componentInfo}>Title</div>
      <PageHead
        headline="第一个全球学校在深圳"
        type={PAGE_TYPE.HOME}
      />
      <div className={styles.componentInfo}>Section titles demo</div>
    </div>
  </PageWrapper>
);

export default HomeCn;
