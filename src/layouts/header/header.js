import React from 'react';

import Logo from './header-logo/header-logo';
import MainMenu from './header-menu/header-menu';

import styles from './header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Logo />
    <MainMenu />
  </header>
);

export default Header;
