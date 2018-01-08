import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Date from '../../../../components/global/date';

import { PROP_TYPES } from '../../../../constants/custom-property-types';

import styles from './event-listing.module.css';
import heroStyles from '../hero.module.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  ...PROP_TYPES.EVENTS_LIST,
};

class InformationEventListing extends Component {
  createItem = (n) => {
    const date = this.props[`event${n}Date`];
    const location = this.props[`event${n}Location`];
    const title = this.props[`event${n}TitleLine1`];
    const title2 = this.props[`event${n}TitleLine2`];

    return (
      <li
        className={styles.listItem}
        key={n}
      >
        <div className={styles.date}>
          <Date
            date={date}
            isInline
          />
        </div>
        <h3 className={styles.title}>
          <span>{title}</span>
          <span>{title2}</span>
        </h3>
        <span className={styles.location}>{location}</span>
      </li>
    );
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <h4 className={heroStyles.sideTitle}>{this.props.title}</h4>
        <ul className={styles.list}>
          {[...Array(3)].fill(0).map((_, index) => this.props[`event${index + 1}Date`] && this.createItem(index + 1))}
        </ul>
      </div>
    );
  }
}

InformationEventListing.propTypes = propTypes;

export default InformationEventListing;
