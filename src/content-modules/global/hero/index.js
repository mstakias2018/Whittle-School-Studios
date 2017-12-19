import React from 'react';
import InformationEventListing from './information-event-listing';
import OpeningCountdown from './opening-countdown';

import { PROP_TYPES } from '../../../constants/custom-property-types';

import styles from './hero.module.css';

const propTypes = {
  data: PROP_TYPES.HERO,
};

const Hero = ({ data }) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <InformationEventListing {...data.eventListing} />
      <OpeningCountdown {...data.campusOpening} />
    </div>
  </div>
);

Hero.propTypes = propTypes;

export default Hero;
