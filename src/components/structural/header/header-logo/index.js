import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../../global/link';

import LogoImg from '../../../../assets/images/logo.svg';
import styles from './header-logo.module.css';

const Logo = (props, { translations }) => (
  <div className={styles.logoContainer}>
    <Link
      className={styles.logo}
      to="/"
    >
      <img
        alt={translations.header.logoAlt}
        src={LogoImg}
      />
    </Link>
  </div>
);

Logo.contextTypes = { translations: PropTypes.object.isRequired };

export default Logo;
