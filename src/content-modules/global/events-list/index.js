import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Link from '../../../components/global/link';
import Date from '../../../components/global/date';
import Markdown, { ALLOWED_TYPES } from '../../../components/global/markdown';
import { sortEventDates } from '../../../utils/global';

import { PROP_TYPES } from '../../../constants/custom-property-types';

import styles from './events-list.module.css';

const propTypes = PROP_TYPES.EVENTS_LIST.isRequired;

class EventsList extends Component {
  createItem = (n) => {
    const date = this.props[`event${n}Date`];
    const description = this.props[`event${n}Description`] ? this.props[`event${n}Description`].markdown : null;
    const link = this.props[`event${n}RegistrationLink`];
    const location = this.props[`event${n}Location`];
    const title = this.props[`event${n}TitleLine1`];
    const title2 = this.props[`event${n}TitleLine2`];

    const { translation } = this.context;

    if (!(link && location && title)) return null;

    return (
      <li
        className={styles.listItem}
        key={n}
      >
        <div className={styles.date}>
          <Date date={date} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>
            <span>{title}</span>
            <span>{title2}</span>
          </h2>
          <span className={styles.location}>{location}</span>
          <Markdown
            allowedTypes={ALLOWED_TYPES.SHORT_TEXT}
            className={styles.description}
            source={description}
          />
          <Link
            className={styles.register}
            to={link}
          >
            {translation('events.register')}
          </Link>
        </div>
      </li>
    );
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {sortEventDates(this.props, 5).map(item => this.createItem(item.number))}
        </ul>
      </div>
    );
  }
}

EventsList.propTypes = propTypes;
EventsList.contextTypes = {
  translation: PropTypes.func.isRequired,
};

export default EventsList;
