import React from 'react';
import PropTypes from 'prop-types';

import styles from './section-title.module.css';

const propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

const SectionTitle = ({ number, title }) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <h2
        aria-label={`${number} ${title}`}
        className={styles.sectionTitle}
      >
        <span
          aria-hidden="true"
          className={styles.number}
        >
          {`0${number}`}
        </span>
        <span
          aria-hidden="true"
          className={styles.title}
        >
          {title}
        </span>
      </h2>
    </div>
  </div>
);

SectionTitle.propTypes = propTypes;

export default SectionTitle;
