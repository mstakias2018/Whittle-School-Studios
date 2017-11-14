import React from 'react';

import Logo from './header-logo/header-logo';
import MainMenu from './header-menu/header-menu';
import Locales from './header-languages/header-locales';

import { REGION, LANGUAGE } from '../../../constants/regions';

import styles from './header.module.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuActive: false };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive,
    }));
  }

  render() {
    return (
      <header className={styles.header}>
        <Locales
          languageSelected={LANGUAGE.ENGLISH}
          regionSelected={REGION.US}
        />
        <div className="container">
          <div className={styles.container}>
              <Logo />
              <button
                className={styles.toggleMenu}
                onClick={this.toggleMenu}
              >
                Menu
              </button>
              <MainMenu isActive={this.state.menuActive} />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
