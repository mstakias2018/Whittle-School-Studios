import React from 'react';
import cx from 'classnames';

import InformationEventListing from './information-event-listing';
import SchoolsIntro from './schools-intro';
import Videos from './videos';
import { PROP_TYPES } from '../../../constants/custom-property-types';

import { CLASSES } from '../../../constants/classes';

import styles from './hero.module.css';

const propTypes = PROP_TYPES.HERO;

const Hero = ({
  data,
  eventList,
  image,
  imageSources,
}) => (
  <div className={styles.wrapper}>
    <div className={cx(styles.container, CLASSES.COUNTDOWN_COMPONENT_WRAPPER)}>
      <InformationEventListing
        {...eventList}
        title={data.eventListTitle}
      />
      <SchoolsIntro
        {...data}
        image={image}
      />
    </div>
    {data.videos && (
      <Videos
        {...data.videos}
        imageSources={imageSources}
      />
    )}
  </div>
);

Hero.propTypes = propTypes;

export default Hero;
