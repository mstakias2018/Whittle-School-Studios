/* eslint-disable max-len */
import React from 'react';
import cx from 'classnames';

import HomeSectionTitle from '../../components/structural/home-section-title';
import PageWrapper from '../../components/structural/page-wrapper';
import Hero from '../../content-modules/global/hero';
import PIC from '../../content-modules/global/pic';
import PageHead from '../../components/structural/page-head';
import HomeCampuses from '../../components/structural/home-campuses';

import { PAGE_TYPE, HOME_SECTION_TITLE_COLOR, HOME_SECTION_TITLE_POSITION } from '../../constants/settings';
import { IMAGE_SIZE } from '../../constants/images';

import campusLargeImage from '../../test-content/images/home-campus-large.jpg';
import campusMediumImage from '../../test-content/images/home-campus-medium.jpg';
import campusSmallImage from '../../test-content/images/home-campus-small.jpg';
import renzoImage from '../../test-content/images/renzo-img.jpg';

import largeImage from '../../test-content/images/category-large.jpg';
import smallImage from '../../test-content/images/category-small.jpg';

import styles from './modules.module.css';

const EVENT_LIST_DUMMY_DATA = [
  {
    date: '2017-10-13',
    description: '文字、標點符號出現機率大致符合台灣文章習慣。',
    link: '#',
    location: '小校园 PIC',
    title: '作坊 (3〜5岁',
  },
  {
    date: '2017-10-21',
    description: '文字、標點符號出現機率大致符合台灣文章習慣。',
    link: '#',
    location: '小校园 PIC',
    title: '董事会 见面＆问候',
  },
  {
    date: '2017-11-04',
    description: '文字、標點符號出現機率大致符合台灣文章習慣。',
    link: '#',
    location: '小校园 PIC',
    title: '作坊 (3〜5岁',
  },
];

const HERO_DUMMY_DATA = {
  eventListing: {
    list: [
      {
        date: '2017-10-13',
        location: '小校园 PIC',
        title: '作坊 (3〜5岁）',
      },
      {
        date: '2017-10-21',
        location: '小校园 PIC',
        title: '作坊 (3〜5岁）',
      },
      {
        date: '2017-11-04',
        location: '小校园 PIC',
        title: '作坊 (3〜5岁）',
      },
    ],
    title: 'Parent Information',
  },
  openingCountdown: {
    date: '2018-03-19',
    title: '全球 校园',
  },
  schoolsIntro: {
    description:
      '想象一下由国际教育工作者，建筑师，艺术家和技术专家组成的学校网络。 ' +
      '想象一下，有一所学校在世界前30个城市设有许多校园，由一个教师组成，并通过集体智慧实施共同课程。 ' +
      '从幼儿园到高中，我们的课程是一个无缝的全球经验。',
    image: {
      alt: '想象一下由国际教育工作者',
      sources: {
        lg: { src: largeImage },
        sm: { src: smallImage },
      },
    },
    link: '/',
    title: '想象一下由国际教育工作者，建筑师，艺术家和技术专家组成的学校网络。',
  },
};

const HomeCn = () => (
  <PageWrapper>
    <div className="wrapper_isChinese">
      <div className={styles.componentInfo}>Title</div>
      <PageHead
        headline="第一个全球学校在深圳"
        type={PAGE_TYPE.HOME}
      />
      <div className={styles.placeHolder} />
      <Hero data={HERO_DUMMY_DATA} />
      <PIC eventsList={EVENT_LIST_DUMMY_DATA} />
      <div className={styles.componentInfo}>Section titles demo</div>
      <div className={cx(styles.fakeHomeSection, styles.gray)} />
      <div className={cx(styles.fakeHomeSection, styles.yellow)}>
        <HomeSectionTitle
          color={HOME_SECTION_TITLE_COLOR.YELLOW}
          containerIsWide
          isBreakingTop
          position={HOME_SECTION_TITLE_POSITION.LEFT}
          text="学校在深圳"
        />
      </div>
      <HomeCampuses
        architectImage={renzoImage}
        architectName="Renzo Piano"
        architectQuote="復祖迫今係豆局 空康赤界扱. 都阪渡語犯 将済済式打 原少企理. 南晴要紙対 興超義純 治前数分格日府. 森歳毎授年輪氏 夢岡歌果念稿真."
        descriptionText="身断整 表応第用訟 変治他 **語引査責油**. 調見月 写拓内地治用高 貿在集意投 師準式. 幌員松確 沼米宿指島棋 敗束無桜禁. 姿量畝井害 資器断過浩周寒馬. 寿事驚供広毎 重面広奥番反."
        imageAlt="用訟変治"
        imageSources={{
          [IMAGE_SIZE.SMALL_MID]: {
            src: campusSmallImage,
          },
          [IMAGE_SIZE.MEDIUM_MID]: {
            src: campusMediumImage,
          },
          [IMAGE_SIZE.LARGE]: {
            src: campusLargeImage,
          },
        }}
        linkTarget="#"
        linkText="語引査責油"
        sectionTitleText="个学校第"
      />
    </div>
  </PageWrapper>
);

export default HomeCn;
