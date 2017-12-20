import React from 'react';
import InformationEventListing from './information-event-listing';
import SchoolsIntro from './schools-intro';

import { PROP_SHAPES } from '../../../constants/custom-property-types';

import styles from './hero.module.css';

const propTypes = {
  data: PROP_SHAPES.HERO,
};

const Hero = ({ data }) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <InformationEventListing {...data.eventListing} />
      <SchoolsIntro
        data={data.schoolsIntro}
        openingCountdown={data.openingCountdown}
      />
    </div>
  </div>
);

Hero.propTypes = propTypes;

export default Hero;
