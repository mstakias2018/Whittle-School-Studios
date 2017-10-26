import React from 'react';

import styles from './header-menu.module.css';

const Links = [
  {
    title: 'The Whittle Vision',
    link: '#',
  },
  {
    title: 'Educational Experience',
    link: '#',
  },
  {
    title: 'Leadership & Faculty',
    link: '#',
  },
  {
    title: 'Global Campuses',
    link: '#',
  },
  {
    title: 'Admissions & Information',
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
    <button className="toggle-menu">Menu</button>
  </div>
);

export default MainMenu;
