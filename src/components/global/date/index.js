import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDateInfo } from '../../../utils/global';

import styles from './date.module.css';

const propTypes = {
  date: PropTypes.string.isRequired,
  isInline: PropTypes.bool.isRequired,
};

const Date = ({ date, isInline }, { translations }) => {
  const { day, dayText, month } = getDateInfo(date);

  return (
    <time
      aria-label={`${translations.date.months[month].long} ${dayText}`}
      className={cx(styles.date, {
        [styles.date_inline]: isInline,
      })}
      dateTime={date}
    >
      <span
        aria-hidden="true"
        className={styles.month}
      >
        {translations.date.months[month].short}
      </span>
      <span
        aria-hidden="true"
        className={styles.day}
      >
        {day}
      </span>
    </time>
  );
};

Date.propTypes = propTypes;
Date.contextTypes = { translations: PropTypes.object.isRequired };

export default Date;
