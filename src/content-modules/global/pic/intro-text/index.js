import React from 'react';
import PropTypes from 'prop-types';

import locationImage from '../../../../assets/images/location-tag.svg';

import styles from './intro-text.module.css';

const propTypes = {
  city: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const IntroText = ({ city, text }) => (
  <div className={styles.wrapper}>
    <div className={styles.cityTitleContainer}>
      <img
        alt=""
        className={styles.locationTag}
        src={locationImage}
      />
      <span className={styles.cityTitle}>{city}</span>
    </div>
    <p className={styles.text}>{text}</p>
  </div>
);

IntroText.propTypes = propTypes;

export default IntroText;
