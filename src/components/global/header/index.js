import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Logo from './header-logo';
import MainMenu from './header-menu/header-menu';
import SubMenu from './header-submenu';
import Locales from './header-locales';
import WithWindowListener from '../../../hocs/withWindow';

import { BREAKPOINTS_NAME } from '../../../constants/breakpoints';
import { PROP_TYPES } from '../../../constants/custom-property-types';

import styles from './header.module.css';

const propTypes = {
  breakpoint: PROP_TYPES.BREAKPOINT,
  subNavProps: PROP_TYPES.SUB_NAV_PROPS,
};

class Header extends Component {
  state = {
    menuActive: false,
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

  toggleMenu = () => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive,
    }));
  };

  render() {
    const { translations } = this.context;
    const { subNavProps } = this.props;

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
            <MainMenu isActive={this.state.menuActive} />
          </div>
        </div>
        {subNavProps &&
          <SubMenu {...this.props.subNavProps} />}
      </header>
    );
  }
}

Header.propTypes = propTypes;
Header.contextTypes = { translations: PropTypes.object };
Header.propTypes = propTypes;

export default WithWindowListener(Header);
