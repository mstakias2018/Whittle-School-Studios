import React from 'react';

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

const MainMenu = () => (
  <div className={styles.menu}>
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

export default MainMenu;
