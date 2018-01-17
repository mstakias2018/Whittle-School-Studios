import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Logo from './header-logo';
import MainMenu from './header-menu/header-menu';
import SubMenu from './header-submenu';
import Locales from './header-locales';
import WithWindowListener from '../../../hocs/withWindow';

import { BREAKPOINTS_NAME } from '../../../constants/breakpoints';
import { PROP_SHAPES } from '../../../constants/custom-property-types';

import styles from './header.module.css';

const propTypes = {
  breakpoint: PROP_SHAPES.BREAKPOINT,
  skipComponent: PropTypes.node.isRequired,
  subNavProps: PROP_SHAPES.SUB_NAV_PROPS,
  viewedPage: PropTypes.bool,
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
    const { translation } = this.context;
    const {
      skipComponent,
      subNavProps,
      viewedPage,
    } = this.props;

    return (
      <header className={styles.header}>
        {skipComponent}
        <Locales />
        <div className="container">
          <div className={cx(styles.container, {
            [styles.container_isMenuOpen]: this.state.menuActive,
          })}
          >
            <Logo />
            <button
              aria-controls="mainMenu"
              aria-expanded={this.state.menuActive}
              aria-haspopup="true"
              className={styles.toggleMenu}
              onClick={this.toggleMenu}
            >
              {!this.state.menuActive ? translation && translation('general.menu') :
                translation && translation('general.close')}
            </button>
            <MainMenu isActive={this.state.menuActive} />
          </div>
        </div>
        {subNavProps &&
          <SubMenu
            {...this.props.subNavProps}
            viewedPage={viewedPage}
          />}
      </header>
    );
  }
}

Header.propTypes = propTypes;
Header.contextTypes = {
  language: PROP_SHAPES.LANGUAGE.isRequired,
  translation: PropTypes.func.isRequired,
};

export default WithWindowListener(Header);
