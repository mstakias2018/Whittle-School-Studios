import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

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
  localizedSlugList: PROP_TYPES.LOCALIZED_SLUG_LIST,
  subNavProps: PROP_TYPES.SUB_NAV_PROPS,
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
    const { translations } = this.context;
    const { localizedSlugList, subNavProps, viewedPage } = this.props;

    return (
      <header className={styles.header}>
        <Locales localizedSlugList={localizedSlugList} />
        <div className="container">
          <div className={cx(styles.container, {
            [styles.container_isMenuOpen]: this.state.menuActive,
          })}
          >
            <Logo />
            <button
              className={styles.toggleMenu}
              onClick={this.toggleMenu}
            >
              {!this.state.menuActive ? translations.general.menu : translations.general.close}
            </button>
            <MainMenu
              isActive={this.state.menuActive}
              localizedSlugList={localizedSlugList}
            />
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
  language: PROP_TYPES.LANGUAGE.isRequired,
  translations: PropTypes.object.isRequired,
};

export default WithWindowListener(Header);
