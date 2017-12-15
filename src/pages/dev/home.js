import React from 'react';
import cx from 'classnames';

import Title from '../../components/global/title';
import HomeSectionTitle from '../../components/structural/home-section-title';
import PageWrapper from '../../components/structural/page-wrapper';
import Hero from '../../content-modules/global/hero';
import PIC from '../../content-modules/global/pic';

import { PAGE_TYPE, HOME_SECTION_TITLE_COLOR, HOME_SECTION_TITLE_POSITION } from '../../constants/settings';

import styles from './modules.module.css';

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
};

const Home = () => (
  <PageWrapper>
    <div className={styles.componentInfo}>Title</div>
    <Title
      text="The First Global School in *Shenzhen*."
      type={PAGE_TYPE.HOME}
    />
    <div className={styles.componentInfo}>hero</div>
    <Hero data={HERO_DUMMY_DATA} />
    <div className={styles.componentInfo}>PIC</div>
    <PIC eventsList={EVENT_LIST_DUMMY_DATA} />
    <div className={styles.componentInfo}>Section titles demo</div>
    <div className={cx(styles.fakeHomeSection, styles.gray)} />
    <div className={cx(styles.fakeHomeSection, styles.yellow)}>
      <HomeSectionTitle
        color={HOME_SECTION_TITLE_COLOR.YELLOW}
        isBreakingTop
        position={HOME_SECTION_TITLE_POSITION.LEFT}
        text="Workshops."
      />
    </div>
    <div className={cx(styles.fakeHomeSection, styles.gray)}>
      <HomeSectionTitle
        color={HOME_SECTION_TITLE_COLOR.GRAY}
        position={HOME_SECTION_TITLE_POSITION.RIGHT}
        text="Campuses."
      />
    </div>
  </PageWrapper>
);

export default Home;
