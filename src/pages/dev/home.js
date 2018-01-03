/* eslint-disable max-len */
import React from 'react';
import cx from 'classnames';

import HomeSectionTitle from '../../components/structural/home-section-title';
import PageWrapper from '../../components/structural/page-wrapper';
import Hero from '../../content-modules/global/hero';
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
      architectQuote="The roof of our school is a magic place — a place of *freedom and discovery*. It has a ‘forest’ where you can see the sun and planets and stars at night. It’s a place of freedom where a **child** can look up and dream."
      descriptionText="In the fall of 2020, our first four campuses will open in China, the U.S., the Middle East and Asia, with the intended cities being Shenzhen, Washington, D.C., Dubai and Singapore. Each 600,000-square-foot campus designed by **Renzo Piano Building Workshop** will serve 2,500 students ages three to 18, with about 160 per grade."
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
      linkTarget="#"
      linkText="Explore the campuses"
      sectionTitleText="Campuses."
    />
  </PageWrapper>
);

export default Home;
