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
    <div className={styles.componentInfo}>hero</div>
    <div className={styles.componentInfo}>Section titles demo</div>
    <div className={cx(styles.fakeHomeSection, styles.gray)} />
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
