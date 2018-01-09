import React from 'react';

import InformationEventListing from './information-event-listing';
import SchoolsIntro from './schools-intro';
import Videos from './videos';
import { PROP_TYPES } from '../../../constants/custom-property-types';

import styles from './hero.module.css';

const propTypes = PROP_TYPES.HERO;

const Hero = ({
  data,
  eventList,
  image,
  video1AssetCoverPhoto,
  video2AssetCoverPhoto,
  video3AssetCoverPhoto,
}) => (
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
    {data.videos &&
    <Videos
      {...data.videos}
      video1AssetCoverPhoto={video1AssetCoverPhoto}
      video2AssetCoverPhoto={video2AssetCoverPhoto}
      video3AssetCoverPhoto={video3AssetCoverPhoto}
    />
    }
  </div>
);

Hero.propTypes = propTypes;

export default Hero;
