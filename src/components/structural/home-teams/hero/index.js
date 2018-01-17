import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../../global/link';
import Picture from '../../../global/picture';
import Markdown, { ALLOWED_TYPES } from '../../../global/markdown';
import { PROP_SHAPES } from '../../../../constants/custom-property-types';
import { createContentPageLink } from '../../../../utils/nav';

import styles from './hero.module.css';

const propTypes = {
  heroDescription: PROP_SHAPES.MARKDOWN.isRequired,
  heroImage: PROP_SHAPES.IMAGE_SOURCES.isRequired,
  heroImageAlt: PropTypes.string,
  heroLinkTarget: PROP_SHAPES.LINK.isRequired,
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
  const { translation } = context;

  return (
    <li className={styles.wrapper}>
      <div className={styles.heroImageWrapper}>
        {heroImage && (
          <Picture
            alt={heroImageAlt}
            className={styles.heroImage}
            sourcesBySize={heroImage}
          />
        )}
      </div>
      <div className={styles.heroContent}>
        <div className={styles.heroContentInner}>
          <div className={styles.heroContentName}>
            {heroName}
          </div>
          <div className={styles.heroContentTitle}>
            {heroTitle}
          </div>
          <Markdown
            allowedTypes={ALLOWED_TYPES.SHORT_TEXT}
            className={styles.heroContentBio}
            source={heroDescription.markdown}
          />
          {heroLinkTarget && (
            <div className={styles.heroLinkWrapper}>
              <Link
                className={styles.heroLink}
                to={createContentPageLink(heroLinkTarget)}
              >
                {translation('teams.heroLinkText')}
              </Link>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

TeamsHero.contextTypes = { translation: PropTypes.func.isRequired };
TeamsHero.propTypes = propTypes;

export default TeamsHero;
