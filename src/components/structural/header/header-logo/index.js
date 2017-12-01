import React from 'react';
import PropTypes from 'prop-types';

import LogoImg from '../../../../assets/images/logo.svg';
import styles from './header-logo.module.css';

const Logo = (props, { translations }) => (
  <div className={styles.logo}>
    <img
      alt={translations.header.logoAlt}
      src={LogoImg}
    />
  </div>
);

Logo.contextTypes = { translations: PropTypes.object.isRequired };

export default Logo;
