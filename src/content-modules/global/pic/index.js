import React from 'react';
import PropTypes from 'prop-types';

import EventsList from '../events-list';
import IntroText from './intro-text';

import { PROP_SHAPES } from '../../../constants/custom-property-types';

import styles from './pic.module.css';

const propTypes = {
  city: PropTypes.string.isRequired,
  eventsList: PROP_SHAPES.EVENTS_LIST,
  text: PropTypes.string.isRequired,
};

const PIC = ({ city, eventsList, text }) => (
  <div className={styles.wrapper}>
    <div className={styles.componentContainer}>
      <div className={styles.container}>
        <IntroText
          city={city}
          text={text}
        />
        <EventsList list={eventsList} />
      </div>
    </div>
  </div>
);

PIC.propTypes = propTypes;

export default PIC;
