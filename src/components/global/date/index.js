import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDateInfo } from '../../../utils/global';

import styles from './date.module.css';

const propTypes = {
  date: PropTypes.string.isRequired,
  isInline: PropTypes.bool,
};

const Date = ({ date, isInline }, { translation }) => {
  const { day, dayText, month } = getDateInfo(date);
  const intervals = translation('date.months') && translation('date.months')[month - 1];
  const longMonth = intervals && intervals.long;
  const shortMonth = intervals && intervals.short;

  return (
    <span aria-label={`${longMonth} ${dayText}`}>
      <time
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
    </span>
  );
};

Date.propTypes = propTypes;
Date.contextTypes = { translation: PropTypes.func.isRequired };

export default Date;
