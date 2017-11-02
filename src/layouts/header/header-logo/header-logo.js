import React from 'react';
import LogoImg from '../../../assets/images/logo.svg';
import styles from './header-logo.module.css';

const Logo = () => (
  <div className={styles.logo}>
    <img src={LogoImg} alt="Whittle school" />
  </div>
);

export default Logo;
