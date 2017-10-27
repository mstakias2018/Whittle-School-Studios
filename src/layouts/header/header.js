import React from 'react';

import Logo from './header-logo/header-logo';
import MainMenu from './header-menu/header-menu';
import Languages from './header-languages/header-languages';

import styles from './header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Languages />
    <div className={styles.container}>
      <MainMenu />
    </div>
  </header>
);

export default Header;
