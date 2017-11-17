import React from 'react';

import Logo from './header-logo/header-logo';
import MainMenu from './header-menu/header-menu';
import Locales from './header-locales/';
import Submenu from './header-submenu/';

import { REGION, LANGUAGE } from '../../../constants/regions';

import styles from './header.module.css';

class Header extends React.Component {
  state = {
    menuActive: false,
    subnavItem: null,
  };

  changeSubNav = (newItem) => {
    this.setState({
      subnavItem: newItem,
    });
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive,
    }));
  };

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
              { !this.state.menuActive ? 'menu' : 'close' }
            </button>
            <MainMenu
              changeSubNavHandler={this.changeSubNav}
              isActive={this.state.menuActive}
            />
          </div>
        </div>
        { this.state.subnavItem &&
          <Submenu navItem={this.state.subnavItem} />
        }
      </header>
    );
  }
}

export default Header;
