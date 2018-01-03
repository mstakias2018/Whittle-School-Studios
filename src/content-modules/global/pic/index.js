import React from 'react';
import PropTypes from 'prop-types';

import EventsList from '../events-list';
import IntroText from './intro-text';

import { PROP_TYPES } from '../../../constants/custom-property-types';

import styles from './pic.module.css';

const propTypes = {
  cityName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  eventList: PropTypes.shape(PROP_TYPES.EVENTS_LIST).isRequired,
};

const PIC = ({ cityName, description, eventList }) => (
  <div className={styles.wrapper}>
    <div className={styles.componentContainer}>
      <div className={styles.container}>
        <IntroText
          cityName={cityName}
          description={description}
        />
        <EventsList {...eventList} />
      </div>
    </div>
  </div>
);

PIC.propTypes = propTypes;

export default PIC;
