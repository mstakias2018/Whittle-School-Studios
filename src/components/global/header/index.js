import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Logo from './header-logo/header-logo';
import MainMenu from './header-menu/header-menu';
import Locales from './header-locales/';
import Submenu from './header-submenu/';
import WithWindowListener from '../../../hocs/withWindow';

import { PROP_TYPES } from '../../../constants/custom-property-types';
import { BREAKPOINTS_NAME } from '../../../constants/breakpoints';

import styles from './header.module.css';

const propTypes = { breakpoint: PROP_TYPES.BREAKPOINT };

class Header extends Component {
  state = {
    menuActive: false,
    subnavItem: null,
  };

  componentWillReceiveProps(nextProps) {
    this.onBreakpointChange(nextProps);
  }

  onBreakpointChange = (nextProps) => {
    if ((nextProps.breakpoint !== this.props.breakpoint) &&
      nextProps.breakpoint === BREAKPOINTS_NAME.large) {
      this.setState({ menuActive: false });
    }
  };

  changeSubNav = (newItem) => {
    this.setState({ subnavItem: newItem });
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
Header.propTypes = propTypes;

export default WithWindowListener(Header);
