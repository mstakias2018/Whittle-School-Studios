import React from 'react';
import cx from 'classnames';

import Title from '../../components/global/title';
import HomeSectionTitle from '../../components/structural/home-section-title';
import PageWrapper from '../../components/structural/page-wrapper';

import { PAGE_TYPE, HOME_SECTION_TITLE_COLOR, HOME_SECTION_TITLE_POSITION } from '../../constants/settings';

import styles from './modules.module.css';

const HomeCn = () => (
  <PageWrapper>
    <div className="wrapper_isChinese">
      <div className={styles.componentInfo}>Title</div>
      <Title
        text="第一个全球学校在深圳"
        type={PAGE_TYPE.HOME}
      />
      <div className={styles.componentInfo}>Section titles demo</div>
      <div className={cx(styles.fakeHomeSection, styles.gray)} />
      <div className={cx(styles.fakeHomeSection, styles.yellow)}>
        <HomeSectionTitle
          color={HOME_SECTION_TITLE_COLOR.YELLOW}
          isBreakingTop
          position={HOME_SECTION_TITLE_POSITION.LEFT}
          text="学校在深圳"
        />
      </div>
      <div className={cx(styles.fakeHomeSection, styles.gray)}>
        <HomeSectionTitle
          color={HOME_SECTION_TITLE_COLOR.GRAY}
          position={HOME_SECTION_TITLE_POSITION.RIGHT}
          text="个学校第"
        />
      </div>
    </div>
  </PageWrapper>
);

export default HomeCn;
