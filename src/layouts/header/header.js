import React from 'react';
import cx from 'classnames';

import Logo from './header-logo/header-logo';
import MainMenu from './header-menu/header-menu';
import Languages from './header-languages/header-languages';

import styles from './header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Languages />
    <div className={styles.container}>
      <MainMenu />
      { /* <button className={styles.toggleMenu}>Menu</button> */ }
    </div>
  </header>
);

export default Header;
