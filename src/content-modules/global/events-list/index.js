import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Date from '../../../components/global/date';
import Markdown from '../../../components/global/markdown';

import { PROP_SHAPES } from '../../../constants/custom-property-types';

import styles from './events-list.module.css';

const propTypes = {
  list: PROP_SHAPES.EVENTS_LIST,
};

const EventsList = ({ list }, { translations }) => (
  <div className={styles.wrapper}>
    <ul className={styles.list}>
      {list.map((event, index) => (
        <li
          className={styles.listItem}
          key={index}
        >
          <div className={styles.date}>
            <Date date={event.date} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>{event.title}</h3>
            <span className={styles.location}>{event.location}</span>
            <Markdown
              className={styles.description}
              source={event.description}
            />
            <Link
              className={styles.register}
              to={event.link}
            >
              {translations.events.register}
            </Link>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

EventsList.propTypes = propTypes;
EventsList.contextTypes = { translations: PropTypes.object.isRequired };

export default EventsList;
