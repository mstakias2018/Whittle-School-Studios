import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Logo from './header-logo/header-logo';
import MainMenu from './header-menu/header-menu';
import Locales from './header-locales/';
import Submenu from './header-submenu/';

import styles from './header.module.css';

class Header extends Component {
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
    const { translations } = this.context;

    return (
      <header className={styles.header}>
        {
          // Todo add real params
        }
        <Locales
          languageSelected="English"
          regionSelected="US"
        />
        <div className="container">
          <div className={styles.container}>
            <Logo />
            <button
              className={styles.toggleMenu}
              onClick={this.toggleMenu}
            >
              {!this.state.menuActive ? translations.general.menu : translations.general.close}
            </button>
            <MainMenu
              changeSubNavHandler={this.changeSubNav}
              isActive={this.state.menuActive}
            />
          </div>
        </div>
        {this.state.subnavItem &&
          <Submenu navItem={this.state.subnavItem} />
        }
      </header>
    );
  }
}

Header.contextTypes = { translations: PropTypes.object };

export default Header;
