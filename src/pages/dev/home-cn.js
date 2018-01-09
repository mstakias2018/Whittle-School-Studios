/* eslint-disable max-len */
import React from 'react';
import cx from 'classnames';

import PageWrapper from '../../components/structural/page-wrapper';
import PageHead from '../../components/structural/page-head';
import HomeTeams from '../../components/structural/home-teams';

import {
  PAGE_TYPE,
  HOME_TEAMS_STATISTIC_TYPE,
} from '../../constants/settings';

import renzoImage from '../../test-content/images/renzo-img.jpg';
import whittleImage from '../../test-content/images/whittle-img.jpg';

import styles from './modules.module.css';

const TEAMS_BIO_SECTION_1 = {
  teamBio1: {
    bioDescription: '文字、標點符號出現機率大致符合台灣文章習慣。聽說很多學。',
    bioImage: renzoImage,
    bioImageAlt: '会成',
    bioName: 'Mayner Lee',
    bioTitle: '董事会成员',
  },
  teamBio2: {
    bioDescription: '文字、標點符號出現機率大致符合台灣文章習慣。聽說很多學。',
    bioImage: renzoImage,
    bioImageAlt: '会成',
    bioName: 'Mayner Lee',
    bioTitle: '董事会成员',
  },
  teamBio3: {
    bioDescription: '文字、標點符號出現機率大致符合台灣文章習慣。聽說很多學。',
    bioImage: renzoImage,
    bioImageAlt: '会成',
    bioName: 'Mayner Lee',
    bioTitle: '董事会成员',
  },
  teamBio4: {
    bioDescription: '文字、標點符號出現機率大致符合台灣文章習慣。聽說很多學。',
    bioImage: renzoImage,
    bioImageAlt: '会成',
    bioName: 'Mayner Lee',
    bioTitle: '董事会成员',
  },
  teamLinkTarget: '#',
  teamSectionTitle: '董事会',
};

const TEAMS_BIO_SECTION_2 = {
  teamBio1: {
    bioDescription: '文字、標點符號出現機率大致符合台灣文章習慣。聽說很多學。',
    bioImage: renzoImage,
    bioImageAlt: '会成',
    bioName: 'Mayner Lee',
    bioTitle: '董事会成员',
  },
  teamBio2: {
    bioDescription: '文字、標點符號出現機率大致符合台灣文章習慣。聽說很多學。',
    bioImage: renzoImage,
    bioImageAlt: '会成',
    bioName: 'Mayner Lee',
    bioTitle: '董事会成员',
  },
  teamBio3: {
    bioDescription: '文字、標點符號出現機率大致符合台灣文章習慣。聽說很多學。',
    bioImage: renzoImage,
    bioImageAlt: '会成',
    bioName: 'Mayner Lee',
    bioTitle: '董事会成员',
  },
  teamBio4: {
    bioDescription: '文字、標點符號出現機率大致符合台灣文章習慣。聽說很多學。',
    bioImage: renzoImage,
    bioImageAlt: '会成',
    bioName: 'Mayner Lee',
    bioTitle: '董事会成员',
  },
  teamLinkTarget: '#',
  teamSectionTitle: '董事会',
};

const TEAMS_STATISTIC_1 = {
  number1: 1,
  number2: 2,
  textLineBottom: '两种语言。',
  textLineTop: '我们团队的成员至少说',
  type: HOME_TEAMS_STATISTIC_TYPE.RATIO,
};

const TEAMS_STATISTIC_2 = {
  number1: 80,
  textLineBottom: '常春藤联盟机构的学位。',
  textLineTop: '我们的团队拥有一名大师',
  type: HOME_TEAMS_STATISTIC_TYPE.PERCENTAGE,
};

const HomeCn = () => (
  <PageWrapper>
    <div className="wrapper_isChinese">
      <div className={styles.componentInfo}>Title</div>
      <PageHead
        headline="第一个全球学校在深圳"
        type={PAGE_TYPE.HOME}
      />
      <div className={styles.componentInfo}>Section titles demo</div>
      <div className={cx(styles.fakeHomeSection, styles.gray)} />
      <HomeTeams
        heroDescription="教育和媒体企业家克里斯于1992年与本诺·施密特（Benno Schmidt）一起设计并创立了爱迪生学校（现为爱迪生学习），目前担任董事会成员。 爱迪生一直致力于建立特许学校运动，现在在三大洲拥有45万名学生。"
        heroImage={whittleImage}
        heroImageAlt="家克里"
        heroLinkTarget="#"
        heroName="Chris Whittle"
        heroTitle="创办人"
        sectionTitleText="团队。"
        statistic1={TEAMS_STATISTIC_1}
        statistic2={TEAMS_STATISTIC_2}
        teamSection1={TEAMS_BIO_SECTION_1}
        teamSection2={TEAMS_BIO_SECTION_2}
        teamSection3={TEAMS_BIO_SECTION_2}
      />
    </div>
  </PageWrapper>
);

export default HomeCn;
