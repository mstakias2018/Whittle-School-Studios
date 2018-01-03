import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDateInfo } from '../../../utils/global';

import styles from './date.module.css';

const propTypes = {
  date: PropTypes.string.isRequired,
  isInline: PropTypes.bool,
};

const Date = ({ date, isInline }, { translations }) => {
  const { day, dayText, month } = getDateInfo(date);
  const { long: longMonth, short: shortMonth } = translations.date.months[month - 1];

  return (
    <time
      aria-label={`${longMonth} ${dayText}`}
      className={cx(styles.date, {
        [styles.date_inline]: isInline,
      })}
      dateTime={date}
    >
      <span
        aria-hidden="true"
        className={styles.month}
      >
        {shortMonth}
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
