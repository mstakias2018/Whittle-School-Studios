import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../../global/link';
import { IMAGE_TYPE } from '../../../../constants/images';
import { PROP_SHAPES } from '../../../../constants/custom-property-types';

import styles from './header-logo.module.css';

const Logo = (props, { globalImages, isHomePage, translation }) => (
  <div className={styles.logoContainer}>
    <Link
      aria-disabled={isHomePage}
      className={styles.logo}
      to="/"
    >
      <img
        alt={translation && translation('header.logoAlt')}
        src={globalImages && globalImages[IMAGE_TYPE.HEADER_LOGO]}
      />
    </Link>
  </div>
);

Logo.contextTypes = {
  globalImages: PROP_SHAPES.GLOBAL_IMAGES.isRequired,
  isHomePage: PropTypes.bool,
  translation: PropTypes.func.isRequired,
};

export default Logo;
