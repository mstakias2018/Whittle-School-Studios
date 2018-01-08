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
  countdownTitle: 'Shenzhen Campus Opening',
  eventList: {
    event1Date: '2017-12-30',
    event1Location: 'Washtington D.C. Civic Center',
    event1TitleLine1: 'PYP Workshop',
    event1TitleLine2: '(Ages 3-5)',
    event2Date: '2018-01-11',
    event2Location: 'Whittle Campus PIC',
    event2TitleLine1: 'Board of Directors',
    event2TitleLine2: 'Meet & Greet',
    event3Date: '2018-01-17',
    event3Location: 'Madison Circle',
    event3TitleLine1: 'PYP Workshop',
    event3TitleLine2: 'Ages 8-13',
  },
  hero: {
    countdownDate: '2018-01-14',
    countdownTitle: 'Shenzhen Campus Opening',
    description: {
      markdown: 'Imagine a network of schools created by an international consortium of educators, architects, artists and technologists. Imagine one school with many campuses in the world’s top 30 cities connected by a single faculty and a common curriculum implemented with a collective intelligence. From preschool through high school, our program is a seamless global experience.\n\n\n'
    },
    eventListTitle: 'Parent Information',
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
    imageAlt: 'Image alt',
    link: {
      linkDestinationExternal: 'http://www.google.com',
      linkDestinationInternal: null,
      linkTitle: 'Read more',
    },
    title: 'Imagine a network of schools, created by an international consortium of educators, architects, artists and technologists.',
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
    <Hero
      data={HERO_DUMMY_DATA.hero}
      eventList={HERO_DUMMY_DATA.eventList}
      image={HERO_DUMMY_DATA.image}
    />
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
