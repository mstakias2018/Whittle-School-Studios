/* eslint-disable max-len */
import React from 'react';
import cx from 'classnames';

import HomeSectionTitle from '../../components/structural/home-section-title';
import PageWrapper from '../../components/structural/page-wrapper';
import Hero from '../../content-modules/global/hero';
import PageHead from '../../components/structural/page-head';
import HomeTeams from '../../components/structural/home-teams';

import {
  PAGE_TYPE,
  HOME_SECTION_TITLE_COLOR,
  HOME_SECTION_TITLE_POSITION,
  HOME_TEAMS_STATISTIC_TYPE,
} from '../../constants/settings';
import { IMAGE_SIZE } from '../../constants/images';

import renzoImage from '../../test-content/images/renzo-img.jpg';
import whittleImage from '../../test-content/images/whittle-img.jpg';

import heroVideo1LargeImage from '../../test-content/images/home-hero-video-1-large.jpg';
import heroVideo2LargeImage from '../../test-content/images/home-hero-video-2-large.jpg';
import heroVideo3LargeImage from '../../test-content/images/home-hero-video-3-large.jpg';
import heroVideo1MediumImage from '../../test-content/images/home-hero-video-1-medium.jpg';
import heroVideo2MediumImage from '../../test-content/images/home-hero-video-2-medium.jpg';
import heroVideo3MediumImage from '../../test-content/images/home-hero-video-3-medium.jpg';
import heroVideo1SmallImage from '../../test-content/images/home-hero-video-1-small.jpg';
import heroVideo2SmallImage from '../../test-content/images/home-hero-video-2-small.jpg';
import heroVideo3SmallImage from '../../test-content/images/home-hero-video-3-small.jpg';

import largeImage from '../../test-content/images/category-large.jpg';
import smallImage from '../../test-content/images/category-small.jpg';

import styles from './modules.module.css';

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
  heroVideos: {
    title: '教育计划',
    videos: [
      {
        alt: '全球经验',
        description: {
          markdown: '文字、標點符號出現機率大致符合台灣文章習慣。聽說很多學排版的都會用這個工具。',
        },
        imageSources: {
          [IMAGE_SIZE.SMALL_MID]: {
            src: heroVideo1SmallImage,
          },
          [IMAGE_SIZE.MEDIUM_MID]: {
            src: heroVideo1MediumImage,
          },
          [IMAGE_SIZE.LARGE]: {
            src: heroVideo1LargeImage,
          },
        },
        link: '/',
        title: '全球经验',
        videoEmbedCode: {
          embedCode: `<iframe src="https://player.vimeo.com/video/248996255?color=ffffff&title=0&byline=0&portrait=0&badge=0" width="640" height="640" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/248996255">INFINITE WORLDS</a> from <a href="https://vimeo.com/philiplueck">philiplueck</a> on <a href="https://vimeo.com">Vimeo</a>.</p>`,
        },
      },
      {
        alt: '个人途径',
        description: {
          markdown: '文字、標點符號出現機率大致符合台灣文章習慣。聽說很多學排版的都會用這個工具。',
        },
        imageSources: {
          [IMAGE_SIZE.SMALL_MID]: {
            src: heroVideo2SmallImage,
          },
          [IMAGE_SIZE.MEDIUM_MID]: {
            src: heroVideo2MediumImage,
          },
          [IMAGE_SIZE.LARGE]: {
            src: heroVideo2LargeImage,
          },
        },
        link: '/',
        title: '个人途径',
        videoEmbedCode: {
          embedCode: `<iframe src="https://player.vimeo.com/video/243740445?color=d9542b&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/243740445">Integrated learning experience</a> from <a href="https://vimeo.com/user74207196">Mike Stakias</a> on <a href="https://vimeo.com">Vimeo</a>.</p>`,
        },
      },
      {
        alt: '学习创建',
        description: {
          markdown: '文字、標點符號出現機率大致符合台灣文章習慣。聽說很多學排版的都會用這個工具。',
        },
        imageSources: {
          [IMAGE_SIZE.SMALL_MID]: {
            src: heroVideo3SmallImage,
          },
          [IMAGE_SIZE.MEDIUM_MID]: {
            src: heroVideo3MediumImage,
          },
          [IMAGE_SIZE.LARGE]: {
            src: heroVideo3LargeImage,
          },
        },
        link: '/',
        title: '学习创建',
        videoEmbedCode: {
          embedCode: `<iframe src="https://player.vimeo.com/video/243740445?color=d9542b&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/243740445">Integrated learning experience</a> from <a href="https://vimeo.com/user74207196">Mike Stakias</a> on <a href="https://vimeo.com">Vimeo</a>.</p>`,
        },
      },
    ],
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
      <div className={styles.placeHolder} />
      <Hero data={HERO_DUMMY_DATA} />
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
