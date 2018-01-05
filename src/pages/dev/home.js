/* eslint-disable max-len */
import React from 'react';
import cx from 'classnames';

import HomeSectionTitle from '../../components/structural/home-section-title';
import PageWrapper from '../../components/structural/page-wrapper';
import Hero from '../../content-modules/global/hero';
import PageHead from '../../components/structural/page-head';
import HomeCampuses from '../../components/structural/home-campuses';
import HomeTeams from '../../components/structural/home-teams';

import {
  PAGE_TYPE,
  HOME_SECTION_TITLE_COLOR,
  HOME_SECTION_TITLE_POSITION,
  HOME_TEAMS_STATISTIC_TYPE,
} from '../../constants/settings';
import { IMAGE_SIZE } from '../../constants/images';

import campusLargeImage from '../../test-content/images/home-campus-large.jpg';
import campusMediumImage from '../../test-content/images/home-campus-medium.jpg';
import campusSmallImage from '../../test-content/images/home-campus-small.jpg';
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
        location: 'Whittle Campus PIC',
        title: 'PYP Workshop (Ages 3-5)',
      },
      {
        date: '2017-10-21',
        location: 'Whittle Campus PIC',
        title: 'Board of Directors Meet & Greet',
      },
      {
        date: '2017-11-04',
        location: 'Whittle Campus PIC',
        title: 'PYP Workshop (Ages 9-12)',
      },
    ],
    title: 'Parent Information',
  },
  heroVideos: {
    title: 'Educational Program',
    videos: [
      {
        alt: 'Global Experiences video',
        description: {
          markdown: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.',
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
        title: 'Global Experiences',
        videoEmbedCode: {
          embedCode: '<iframe src="https://player.vimeo.com/video/243740445?color=d9542b&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
        },
      },
      {
        alt: 'Personal Pathways',
        description: {
          markdown: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.',
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
        title: 'Personal Pathways',
        videoEmbedCode: {
          embedCode: '<iframe src="https://player.vimeo.com/video/243740445?color=d9542b&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
        },
      },
      {
        alt: 'Learning by Creating',
        description: {
          markdown: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.',
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
        title: 'Learning by Creating',
        videoEmbedCode: {
          embedCode: '<iframe src="https://player.vimeo.com/video/243740445?color=d9542b&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
        },
      },
    ],
  },
  openingCountdown: {
    date: '2018-03-19',
    title: 'Shenzhen Campus Opening',
  },
  schoolsIntro: {
    description:
      'Imagine a network of schools created by an international consortium of educators, architects, ' +
      'artists and technologists. Imagine one school with many campuses in the world’s top 30 cities connected by a ' +
      'single faculty and a common curriculum implemented with a collective intelligence. From preschool through high ' +
      'school, our program is a seamless global experience.',
    image: {
      alt: 'hero image',
      sources: {
        lg: { src: largeImage },
        sm: { src: smallImage },
      },
    },
    link: '/',
    title:
      'Imagine a network of schools, created by an international consortium of educators, architects, ' +
      'artists and technologists.',
  },
};

const TEAMS_BIO_SECTION_1 = {
  teamBio1: {
    bioDescription: 'Est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio..',
    bioImage: renzoImage,
    bioImageAlt: 'Alt',
    bioName: 'Jackson Lee',
    bioTitle: 'Board member',
  },
  teamBio2: {
    bioDescription: 'Est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio. Est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio.',
    bioImage: renzoImage,
    bioImageAlt: 'Alt',
    bioName: 'Jackson Lee',
    bioTitle: 'Board member',
  },
  teamBio3: {
    bioDescription: 'Est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio..',
    bioImage: renzoImage,
    bioImageAlt: 'Alt',
    bioName: 'Jackson Lee',
    bioTitle: 'Board member',
  },
  teamBio4: {
    bioDescription: 'Est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio..',
    bioImage: renzoImage,
    bioImageAlt: 'Alt',
    bioName: 'Jackson Lee',
    bioTitle: 'Board member',
  },
  teamBio5: {
    bioDescription: 'Est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio..',
    bioImage: renzoImage,
    bioImageAlt: 'Alt',
    bioName: 'Jackson Lee',
    bioTitle: 'Board member',
  },
  teamLinkTarget: '#',
  teamSectionTitle: 'Board of Directors',
};

const TEAMS_BIO_SECTION_2 = {
  teamBio1: {
    bioDescription: 'Est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio..',
    bioImage: renzoImage,
    bioImageAlt: 'Alt',
    bioName: 'Jackson Lee',
    bioTitle: 'Board member',
  },
  teamBio2: {
    bioDescription: 'Est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio. Est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio.',
    bioImage: renzoImage,
    bioImageAlt: 'Alt',
    bioName: 'Jackson Lee',
    bioTitle: 'Board member',
  },
  teamBio3: {
    bioDescription: 'Est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio..',
    bioImage: renzoImage,
    bioImageAlt: 'Alt',
    bioName: 'Jackson Lee',
    bioTitle: 'Board member',
  },
  teamBio4: {
    bioDescription: 'Est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio..',
    bioImage: renzoImage,
    bioImageAlt: 'Alt',
    bioName: 'Jackson Lee',
    bioTitle: 'Board member',
  },
  teamLinkTarget: '#',
  teamSectionTitle: 'Board of Directors',
};

const TEAMS_STATISTIC_1 = {
  number1: 1,
  number2: 2,
  textLineBottom: 'Members of our team speaks at least two languages.',
  type: HOME_TEAMS_STATISTIC_TYPE.RATIO,
};

const TEAMS_STATISTIC_2 = {
  number1: 80,
  textLineBottom: 'Of our team holds a master’s degree from an Ivy League institution.',
  type: HOME_TEAMS_STATISTIC_TYPE.PERCENTAGE,
};

const Home = () => (
  <PageWrapper>
    <div className={styles.componentInfo}>Title</div>
    <PageHead
      headline="The First Global School in *Shenzhen*."
      type={PAGE_TYPE.HOME}
    />
    <div className={styles.placeHolder} />
    <div className={styles.componentInfo}>hero</div>
    <Hero data={HERO_DUMMY_DATA} />
    <div className={styles.componentInfo}>Section titles demo</div>
    <div className={cx(styles.fakeHomeSection, styles.gray)} />
    <div className={cx(styles.fakeHomeSection, styles.yellow)}>
      <HomeSectionTitle
        color={HOME_SECTION_TITLE_COLOR.YELLOW}
        containerIsWide
        isBreakingTop
        position={HOME_SECTION_TITLE_POSITION.LEFT}
        text="Workshops."
      />
    </div>
    <HomeCampuses
      architectImage={renzoImage}
      architectName="Renzo Piano"
      architectQuote={{
        markdown: 'The roof of our school is a magic place — a place of *freedom and discovery*. It has a ‘forest’ where you can see the sun and planets and stars at night. It’s a place of freedom where a **child** can look up and dream.',
      }}
      descriptionText={{
        markdown: 'In the fall of 2020, our first four campuses will open in China, the U.S., the Middle East and Asia, with the intended cities being Shenzhen, Washington, D.C., Dubai and Singapore. Each 600,000-square-foot campus designed by **Renzo Piano Building Workshop** will serve 2,500 students ages three to 18, with about 160 per grade.',
      }}
      imageAlt="Campus image"
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
      linkTarget={{
        slug: '#',
      }}
      linkText="Explore the campuses"
      sectionTitleText="Campuses."
    />
    <HomeTeams
      heroDescription="An education and media entrepreneur, Chris conceived and founded Edison Schools (now EdisonLearning) in 1992 with Benno Schmidt and currently serves on its board of directors. Edison has been instrumental in establishing the charter school movement and now serves 450,000 students on three continents."
      heroImage={whittleImage}
      heroImageAlt="Alt"
      heroLinkTarget="#"
      heroName="Chris Whittle"
      heroTitle="Founder"
      sectionTitleText="Teams."
      statistic1={TEAMS_STATISTIC_1}
      statistic2={TEAMS_STATISTIC_2}
      teamSection1={TEAMS_BIO_SECTION_1}
      teamSection2={TEAMS_BIO_SECTION_2}
      teamSection3={TEAMS_BIO_SECTION_2}
    />
  </PageWrapper>
);

export default Home;
