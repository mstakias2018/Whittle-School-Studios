import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../../global/link';

import styles from './hero.module.css';

const propTypes = {
  heroDescription: PropTypes.string.isRequired,
  heroImage: PropTypes.string.isRequired,
  heroImageAlt: PropTypes.string,
  heroLinkTarget: PropTypes.string.isRequired,
  heroName: PropTypes.string.isRequired,
  heroTitle: PropTypes.string,
};

const TeamsHero = (props, context) => {
  const {
    heroName,
    heroTitle,
    heroDescription,
    heroImage,
    heroImageAlt,
    heroLinkTarget,
  } = props;
  const { translations } = context;

  return (
    <li className={styles.wrapper}>
      <div className={styles.heroImageWrapper}>
        <img
          alt={heroImageAlt}
          className={styles.heroImage}
          src={heroImage}
        />
      </div>
      <div className={styles.heroContent}>
        <div className={styles.heroContentInner}>
          <div className={styles.heroContentName}>
            {heroName}
          </div>
          <div className={styles.heroContentTitle}>
            {heroTitle}
          </div>
          <div className={styles.heroContentBio}>
            {heroDescription}
          </div>
          {heroLinkTarget && (
            <div className={styles.heroLinkWrapper}>
              <Link
                className={styles.heroLink}
                to={heroLinkTarget}
              >
                {translations.teams.heroLinkText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

TeamsHero.contextTypes = { translations: PropTypes.object.isRequired };
TeamsHero.propTypes = propTypes;

export default TeamsHero;
