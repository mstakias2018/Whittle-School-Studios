import React from 'react';

import Title from '../../components/global/title';
import PageWrapper from '../../components/structural/page-wrapper';
import Hero from '../../content-modules/global/hero';
import PIC from '../../content-modules/global/pic';

import { PAGE_TYPE } from '../../constants/settings';

import styles from './modules.module.css';

import largeImage from '../../test-content/images/category-large.jpg';
import smallImage from '../../test-content/images/category-small.jpg';

const EVENT_LIST_DUMMY_DATA = [
  {
    date: '2017-10-13',
    description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.',
    link: '/register',
    location: 'Whittle Campus PIC',
    title: 'PYP Workshop (Ages 3-5)',
  },
  {
    date: '2017-10-21',
    description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.',
    link: '/register',
    location: 'Whittle Campus PIC',
    title: 'Board of Directors Meet & Greet',
  },
  {
    date: '2017-11-04',
    description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.',
    link: '/register',
    location: 'Whittle Campus PIC',
    title: 'PYP Workshop (Ages 9-12)',
  },
];

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
    description: 'Imagine a network of schools created by an international consortium of educators, architects, ' +
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
    title: 'Imagine a network of schools, created by an international consortium of educators, architects, ' +
    'artists and technologists.',
  },
};

const Home = () => (
  <PageWrapper>
    <div className={styles.componentInfo}>Title</div>
    <Title
      text="The First
Global School
in *Shenzhen*."
      type={PAGE_TYPE.HOME}
    />
    <Hero data={HERO_DUMMY_DATA} />
    <PIC eventsList={EVENT_LIST_DUMMY_DATA} />
  </PageWrapper>
);

export default Home;
