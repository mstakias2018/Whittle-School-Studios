import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../../global/link';

import styles from './header-logo.module.css';

const Logo = (props, { headerLogoImage, translation }) => (
  <div className={styles.logoContainer}>
    <Link
      className={styles.logo}
      to="/"
    >
      <img
        alt={translation && translation('header.logoAlt')}
        src={headerLogoImage}
      />
    </Link>
  </div>
);

Logo.contextTypes = {
  headerLogoImage: PropTypes.string.isRequired,
  translation: PropTypes.func.isRequired
};

export default Logo;
