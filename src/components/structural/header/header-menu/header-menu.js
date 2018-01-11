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
  translation,
}) => (
  <nav
    className={cx(
      styles.menu,
      { [styles.menu_isVisible]: isActive }
    )}
    id="mainMenu"
  >
    <div
      aria-label={translation && translation('header.primaryAriaLabel')}
      className={styles.menuItemsContainer}
      role="menu"
    >
      <ul
        className={cx(
            styles.menuItems,
            {
              [styles.menuItems_aligned]: headerData && headerData.length === 5
            }
          )
        }
      >
        {headerData && headerData.map(({ link, title }, index) => (
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
      <Locales
        isSmall
        localizedSlugList={localizedSlugList}
      />
    </div>
  </nav>
);

MainMenu.propTypes = propTypes;
MainMenu.contextTypes = {
  headerData: PROP_SHAPES.HEADER_DATA.isRequired,
  translation: PropTypes.func.isRequired,
};

export default MainMenu;
