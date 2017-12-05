import React from 'react';

import Title from '../../components/global/title';
import PageWrapper from '../../components/structural/page-wrapper';

import { PAGE_TYPE } from '../../constants/settings';

import styles from './modules.module.css';

const HomeCn = () => (
  <PageWrapper>
    <div className="wrapper_isChinese">
      <div className={styles.componentInfo}>Title</div>
      <Title
        text="第一个全球学校在深圳"
        type={PAGE_TYPE.HOME}
      />
    </div>
  </PageWrapper>
);

export default HomeCn;
