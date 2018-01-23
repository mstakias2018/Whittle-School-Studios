import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import loadingSpinner from '../../../assets/images/loading-spinner.svg';

import styles from './loading-spinner.module.css';

const propTypes = {
  className: PropTypes.string,
  isSmall: PropTypes.bool,
};

const LoadingSpinner = ({ className, isSmall }) => (
  <span className={cx(className, styles.loadingWrapper)}>
    <img
      alt=""
      className={cx(styles.loadingSpinner, {
        [styles.loadingSpinner_isSmall]: isSmall,
      })}
      src={loadingSpinner}
    />
  </span>
);

LoadingSpinner.propTypes = propTypes;

export default LoadingSpinner;
