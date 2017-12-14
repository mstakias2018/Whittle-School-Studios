import React from 'react';
import EventsList from '../events-list';

import { PROP_TYPES } from '../../../constants/custom-property-types';

import styles from './pic.module.css';

const propTypes = {
  eventsList: PROP_TYPES.EVENTS_LIST,
};

const PIC = ({ eventsList }) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <EventsList list={eventsList} />
    </div>
  </div>
);

PIC.propTypes = propTypes;

export default PIC;
