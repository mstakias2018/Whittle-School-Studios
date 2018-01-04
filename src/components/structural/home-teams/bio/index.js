import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import styles from './bio.module.css';

const bioPropType = {
  bioDescription: PropTypes.string.isRequired,
  bioImage: PropTypes.string,
  bioImageAlt: PropTypes.string,
  bioName: PropTypes.string.isRequired,
  bioTitle: PropTypes.string.isRequired,
  hasLeftMargin: PropTypes.bool,
};

const TeamsBio = ({
  bioDescription,
  bioImage,
  bioImageAlt,
  bioName,
  bioTitle,
  hasLeftMargin,
}) => (
  <li className={cx(styles.wrapper, { [styles.wrapper_hasLeftMargin]: hasLeftMargin })}>
    <div className={styles.bioInner}>
      {bioImage &&
        <img
          alt={bioImageAlt}
          className={styles.image}
          src={bioImage}
        />
      }
      <div className={styles.name}>
        {bioName}
      </div>
      <div className={styles.title}>
        {bioTitle}
      </div>
      <div className={styles.description}>
        {bioDescription}
      </div>
    </div>
  </li>
);

TeamsBio.propTypes = bioPropType;

export default TeamsBio;
