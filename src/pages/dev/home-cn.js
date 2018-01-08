/* eslint-disable max-len */
import React from 'react';
import cx from 'classnames';

import PageWrapper from '../../components/structural/page-wrapper';
import Hero from '../../content-modules/global/hero';
import PageHead from '../../components/structural/page-head';
import HomeTeams from '../../components/structural/home-teams';

import {
  PAGE_TYPE,
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

import styles from './modules.module.css';

const HERO_DUMMY_DATA = {
  countdownDate: '2018-01-14',
  countdownTitle: '標點符號',
  eventList: {
    event1Date: '2017-12-30',
    event1Location: '小校园 PIC',
    event1TitleLine1: '作坊',
    event1TitleLine2: '(3〜5岁）',
    event2Date: '2018-01-11',
    event2Location: '小校园 PIC',
    event2TitleLine1: '作坊',
    event2TitleLine2: '(3〜5岁）',
    event3Date: '2018-01-17',
    event3Location: '小校园 PIC',
    event3TitleLine1: '作坊',
    event3TitleLine2: '(3〜5岁）',
  },
  hero: {
    countdownDate: '2018-01-14',
    countdownTitle: '符號出現機率大',
    description: {
      markdown: '文字、標點符號出現機率大致符合台灣文章習慣。聽說很多學排版的都會用這個工具。'
    },
    eventListTitle: '現機率大致',
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
    imageAlt: '符合台灣',
    link: {
      linkDestinationExternal: 'http://www.google.com',
      linkDestinationInternal: null,
      linkTitle: '機率',
    },
    title: '標點符號出現機率大致符合台灣文章習慣',
  },
  image: {
    id: 'ul4XFgkBtAUYY2Q8k0A0I',
    lg: {
      src: '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=621&h=350&q=100&fit=fill',
      srcSet: [
        '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=621&h=350&q=100&fit=fill 1x',
        '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=932&h=525&q=100&fit=fill 1.5x',
        '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=1242&h=700&q=100&fit=fill 2x',
        '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=1863&h=1050&q=100&fit=fill 3x'
      ],
    },
    lgMid: {
      src: '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=860&h=484&q=100&fit=fill',
      srcSet: [
        '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=860&h=484&q=100&fit=fill 1x',
        '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=1290&h=726&q=100&fit=fill 1.5x',
        '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=1720&h=968&q=100&fit=fill 2x',
        '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=2580&h=1452&q=100&fit=fill 3x'
      ],
    },
    md: {
      src: '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=528&h=297&q=100&fit=fill',
      srcSet: [
        '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=528&h=297&q=100&fit=fill 1x',
        '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=792&h=446&q=100&fit=fill 1.5x',
        '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=1056&h=594&q=100&fit=fill 2x',
        '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=1584&h=891&q=100&fit=fill 3x'
      ],
    },
    mdMid: {
      src: '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=674&h=380&q=100&fit=fill',
      srcSet: [
        '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=674&h=380&q=100&fit=fill 1x',
        '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=1011&h=570&q=100&fit=fill 1.5x',
        '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=1348&h=760&q=100&fit=fill 2x',
        '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=2022&h=1140&q=100&fit=fill 3x'
      ],
    },
    sm: {
      src: '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=320&h=320&q=100&fit=fill',
      srcSet: [
        '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=320&h=320&q=100&fit=fill 1x',
        '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=480&h=480&q=100&fit=fill 1.5x',
        '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=640&h=640&q=100&fit=fill 2x',
        '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=960&h=960&q=100&fit=fill 3x'
      ],
    },
    smMid: {
      src: '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=495&h=495&q=100&fit=fill',
      srcSet: [
        '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=495&h=495&q=100&fit=fill 1x',
        '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=743&h=743&q=100&fit=fill 1.5x',
        '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=990&h=990&q=100&fit=fill 2x',
        '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg?w=1485&h=1485&q=100&fit=fill 3x'
      ],
    },
  }
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
      <Hero
        data={HERO_DUMMY_DATA.hero}
        eventList={HERO_DUMMY_DATA.eventList}
        image={HERO_DUMMY_DATA.image}
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
