import React from 'react';
import PropTypes from 'prop-types';

import Date from '../../../../components/global/date';

import { PROP_TYPES } from '../../../../constants/custom-property-types';

import styles from './event-listing.module.css';

const propTypes = {
  list: PROP_TYPES.EVENTS_LIST,
  title: PropTypes.string.isRequired,
};

const InformationEventListing = ({ list, title }) => (
  <div className={styles.wrapper}>
    <h4 className={styles.componentTitle}>{title}</h4>
    <ul className={styles.list}>
      {list.map((event, index) => (
        <li
          className={styles.listItem}
          key={index}
        >
          <div className={styles.date}>
            <Date
              date={event.date}
              isInline
            />
          </div>
          <h3 className={styles.title}>{event.title}</h3>
          <span className={styles.location}>{event.location}</span>
        </li>
      ))}
    </ul>
  </div>
);

InformationEventListing.propTypes = propTypes;

export default InformationEventListing;
