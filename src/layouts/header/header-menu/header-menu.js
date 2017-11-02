import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './header-menu.module.css';

const Links = [
  {
    title: 'The Whittle\n Vision',
    link: '#',
  },
  {
    title: 'Educational\r\n Experience',
    link: '#',
  },
  {
    title: 'Leadership &\n Faculty',
    link: '#',
  },
  {
    title: 'Global\n Campuses',
    link: '#',
  },
  {
    title: 'Admissions\n & Information',
    link: '#',
  },
];

const propTypes = { isActive: PropTypes.bool.isRequired };

const MainMenu = ({ isActive }) => (
  <div className={cx(
    styles.menu,
    { [styles.menu_isVisible]: isActive },
    )}
  >
    <nav>
      <ul className={styles.menuItems}>
        { Links.map((item, index) => (
          <li
            className={styles.menuItem}
            key={index.toString()}
          >
            <a
              className={styles.menuItem__link}
              href={item.link}
            >
              {item.title}
            </a>
          </li>
          ))
        }
      </ul>
    </nav>
  </div>
);

MainMenu.propTypes = propTypes;

export default MainMenu;
