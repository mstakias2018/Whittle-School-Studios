import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Link from '../../../../components/global/link';
import Date from '../../../../components/global/date';
import { sortEventDates } from '../../../../utils/global';

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
    const link = this.props[`event${n}RegistrationLink`];
    const location = this.props[`event${n}Location`];
    const title = this.props[`event${n}TitleLine1`];
    const title2 = this.props[`event${n}TitleLine2`];

    const { translation } = this.context;

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
        <div className={styles.location}>{location}</div>
        <Link
          className={styles.register}
          to={link}
        >
          {translation('events.register')}
        </Link>
      </li>
    );
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <h2 className={heroStyles.sideTitle}>{this.props.title}</h2>
        <ul className={styles.list}>
          {sortEventDates(this.props, 3).map(item => this.createItem(item.number))}
        </ul>
      </div>
    );
  }
}

InformationEventListing.propTypes = propTypes;
InformationEventListing.contextTypes = {
  translation: PropTypes.func.isRequired,
};

export default InformationEventListing;
