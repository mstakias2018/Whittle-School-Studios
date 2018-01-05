import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import cx from 'classnames';

import OpeningCountdown from '../opening-countdown';
import Picture from '../../../../components/global/picture';

import { PROP_SHAPES } from '../../../../constants/custom-property-types';

import styles from './intro.module.css';

const propTypes = {
  data: PROP_SHAPES.SCHOOLS_INTRO,
  openingCountdown: PROP_SHAPES.OPENING_COUNTDOWN,
};

const SchoolsIntro = ({
  data: {
    description,
    image,
    link,
    title,
  },
  openingCountdown,
}, { translation }) => (
  <div className={styles.wrapper}>
    <div className={styles.introWrapper}>
      <Picture
        alt={image.alt}
        className={styles.image}
        sourcesBySize={image.sources}
      />
      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          <div className={styles.contentInner}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <Link
              className={styles.link}
              to={link}
            >
              {translation('general.learnMore')}
            </Link>
          </div>
        </div>
        <div className={cx(styles.countdownWrapper, 'showMd')}>
          <OpeningCountdown {...openingCountdown} />
        </div>
      </div>
    </div>
    <div className={cx(styles.countdownWrapper, 'hideMd')}>
      <OpeningCountdown {...openingCountdown} />
    </div>
  </div>
);

SchoolsIntro.propTypes = propTypes;
SchoolsIntro.contextTypes = { translation: PropTypes.func.isRequired };

export default SchoolsIntro;
