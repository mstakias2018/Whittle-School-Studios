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
    title: 'Leadership &amp; Faculty',
    link: '#',
  },
  {
    title: 'Global Campuses',
    link: '#',
  },
  {
    title: 'Admissions &amp; Information',
    link: '#',
  },
];

const MainMenu = () => (
  <div className={styles.menu}>
    <nav>
      <ul>
        { Links.map((item, index) => (
          <li key={index.toString()}>
            <a href={item.link}>{item.title}</a>
          </li>
          ))
        }
      </ul>
    </nav>
    <button className="toggle-menu">Menu</button>
  </div>
);

export default MainMenu;
