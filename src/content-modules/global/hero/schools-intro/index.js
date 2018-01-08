import React from 'react';
import cx from 'classnames';

import Link from '../../../../components/global/link';
import OpeningCountdown from '../opening-countdown';
import Picture from '../../../../components/global/picture';
import { parseLink } from '../../../../utils/global';

import { PROP_TYPES } from '../../../../constants/custom-property-types';

import styles from './intro.module.css';

const propTypes = PROP_TYPES.SCHOOLS_INTRO.isRequired;

const SchoolsIntro = ({
  description,
  imageAlt,
  image,
  link,
  title,
  countdownTitle,
  countdownDate,
}) => {
  const {
    linkDestinationExternal,
    linkDestinationInternal,
    linkTitle,
  } = link;

  return (
    <div className={styles.wrapper}>
      <div className={styles.introWrapper}>
        <Picture
          alt={imageAlt}
          className={styles.image}
          sourcesBySize={image}
        />
        <div className={styles.content}>
          <div className={styles.contentWrapper}>
            <div className={styles.contentInner}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.description}>{description.markdown}</p>
              {(linkDestinationInternal || linkDestinationExternal) &&
              <Link
                className={styles.link}
                to={parseLink({ external: linkDestinationExternal, internal: linkDestinationInternal })}
              >
                {linkTitle}
              </Link>
              }
            </div>
          </div>
          <div className={cx(styles.countdownWrapper, 'showMd')}>
            <OpeningCountdown
              date={countdownDate}
              title={countdownTitle}
            />
          </div>
        </div>
      </div>
      <div className={cx(styles.countdownWrapper, 'hideMd')}>
        <OpeningCountdown
          date={countdownDate}
          title={countdownTitle}
        />
      </div>
    </div>
  );
};

SchoolsIntro.propTypes = propTypes;

export default SchoolsIntro;
