import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Link from '../../global/link';
import Picture from '../../global/picture';
import { PROP_SHAPES } from '../../../constants/custom-property-types';

import styles from './not-found.module.css';

const propTypes = {
  imageAlt: PropTypes.string,
  imageSources: PROP_SHAPES.IMAGE_SOURCES,
};

const NotFound = ({
  imageAlt,
  imageSources,
}, { translation }) => (
  <div className={cx(styles.wrapper, {
    [styles.wrapper_hasImage]: imageSources,
  })}
  >
    {imageSources && (
      <Picture
        alt={imageAlt}
        sourcesBySize={imageSources}
      />
    )}
    <div className={styles.textWrapper}>
      <h1 className={styles.number}>404</h1>
      <h2 className={styles.title}>{translation && translation('pageNotFound.title')}</h2>
      <p className={styles.text}>
        {translation && translation('pageNotFound.description')}
        <Link to="/">
          {translation && translation('pageNotFound.linkText')}
        </Link>
      </p>
    </div>
  </div>
);

NotFound.propTypes = propTypes;
NotFound.contextTypes = { translation: PropTypes.func.isRequired };

export default NotFound;
