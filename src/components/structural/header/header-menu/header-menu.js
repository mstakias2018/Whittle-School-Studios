import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { PROP_SHAPES } from '../../../../constants/custom-property-types';
import Locales from '../header-locales';
import Link from '../../../global/link';

import styles from './header-menu.module.css';

const propTypes = {
  isActive: PropTypes.bool.isRequired,
  localizedSlugList: PROP_SHAPES.LOCALIZED_SLUG_LIST,
};

const MainMenu = ({
  isActive,
  localizedSlugList,
}, {
  headerData,
  translations,
}) => (
  <div className={cx(
    styles.menu,
    { [styles.menu_isVisible]: isActive }
    )}
  >
    <nav
      aria-label={translations.header.primaryAriaLabel}
      className={styles.menuItemsContainer}
    >
      <ul className={styles.menuItems}>
        {headerData.map(({ link, title }, index) => (
          <li
            className={styles.menuItem}
            key={index}
          >
            <span className={styles.menuItemLinkWrapper}>
              <Link
                activeClassName={styles.menuItemLink_active}
                className={styles.menuItemLink}
                to={`/${link}`}
              >
                {title}
              </Link>
            </span>
          </li>
          ))
        }
      </ul>
    </nav>
    <Locales
      isSmall
      localizedSlugList={localizedSlugList}
    />
  </div>
);

MainMenu.propTypes = propTypes;
MainMenu.contextTypes = {
  headerData: PROP_SHAPES.HEADER_DATA.isRequired,
  translations: PropTypes.object.isRequired,
};

export default MainMenu;
