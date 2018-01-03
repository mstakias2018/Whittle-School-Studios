import React from 'react';
import PropTypes from 'prop-types';

import locationImage from '../../../../assets/images/location-tag.svg';

import styles from './intro-text.module.css';

const propTypes = {
  cityName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const IntroText = ({ cityName, description }) => (
  <div className={styles.wrapper}>
    <div className={styles.cityTitleContainer}>
      <img
        alt=""
        className={styles.locationTag}
        src={locationImage}
      />
      <span className={styles.cityTitle}>{cityName}</span>
    </div>
    <p className={styles.text}>{description}</p>
  </div>
);

IntroText.propTypes = propTypes;

export default IntroText;
