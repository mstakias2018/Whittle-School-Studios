import React from 'react';

import Title from '../../components/global/title';
import PageWrapper from '../../components/structural/page-wrapper';
import PIC from '../../content-modules/global/pic';

import { PAGE_TYPE } from '../../constants/settings';

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

const Home = () => (
  <PageWrapper>
    <div className={styles.componentInfo}>Title</div>
    <Title
      text="The First
Global School
in *Shenzhen*."
      type={PAGE_TYPE.HOME}
    />
    <PIC eventsList={EVENT_LIST_DUMMY_DATA} />
  </PageWrapper>
);

export default Home;
