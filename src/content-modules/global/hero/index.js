import React from 'react';

import InformationEventListing from './information-event-listing';
import SchoolsIntro from './schools-intro';
import Videos from './videos';
import { PROP_TYPES } from '../../../constants/custom-property-types';

import styles from './hero.module.css';

const propTypes = PROP_TYPES.HERO;

const Hero = ({ data, eventList, image }) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <InformationEventListing
        {...eventList}
        title={data.eventListTitle}
      />
      <SchoolsIntro
        {...data}
        image={image}
      />
    </div>
    {data.heroVideos &&
    <Videos {...data.heroVideos} />
    }
  </div>
);

Hero.propTypes = propTypes;

export default Hero;
