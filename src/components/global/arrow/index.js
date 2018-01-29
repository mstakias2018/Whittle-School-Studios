import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import arrow from '../../../assets/images/arrow.svg';
import arrowOrange from '../../../assets/images/arrow-orange.svg';
import styles from './arrow.module.css';

const propTypes = {
  isLeft: PropTypes.bool,
};

const Arrow = ({
  isLeft,
}) => (
  <span
    className={cx(styles.arrow, {
      [styles.arrow_isLeft]: isLeft,
    })}
  >
    <img
      alt=""
      className={cx(styles.icon, styles.icon_isHover)}
      src={arrowOrange}
    />
    <img
      alt=""
      className={styles.icon}
      src={arrow}
    />
  </span>
);

Arrow.propTypes = propTypes;

export default Arrow;
