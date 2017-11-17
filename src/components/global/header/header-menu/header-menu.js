import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Locales from '../header-locales/';

import { REGION, LANGUAGE } from '../../../../constants/regions';
import { BREAKPOINTS } from '../../../../constants/breakpoints';

import styles from './header-menu.module.css';

const Links = [
  {
    title: 'The Whittle\n Vision',
    link: '#',
    items: [
      {
        title: 'Overview',
        description: 'At the heart of our work is the belief that.',
        link: '#',
      },
      {
        title: 'Shenzhen',
        description: 'At the heart of our work is the belief that.',
        link: '#',
      },
      {
        title: 'Washington D.C.',
        description: 'At the heart of our work is the belief that.',
        link: '#',
      },
    ],
  },
  {
    title: 'Educational\r\n Experience',
    link: '#',
    items: [
      {
        title: 'Overview',
        description: 'At the heart of our work is the belief that.',
        link: '#',
      },
      {
        title: 'Shenzhen',
        description: 'At the heart of our work is the belief that.',
        link: '#',
      },
      {
        title: 'Washington D.C.',
        description: 'At the heart of our work is the belief that.',
        link: '#',
      },
      {
        title: 'Shenzhen - large',
        description: 'At the heart of our work is the belief that.',
        link: '#',
      },
      {
        title: 'Washington D.C.',
        description: 'At the heart of our work is the belief that.',
        link: '#',
      },
    ],
  },
  {
    title: 'Leadership &\n Faculty',
    link: '#',
    items: [
      {
        title: 'Overview',
        description: 'At the heart of our work is the belief that.',
        link: '#',
      },
      {
        title: 'Shenzhen',
        description: 'At the heart of our work is the belief that.',
        link: '#',
      },
      {
        title: 'Washington D.C.',
        description: 'At the heart of our work is the belief that.',
        link: '#',
      },
    ],
  },
  {
    title: 'Global\n Campuses',
    link: '#',
    items: [
      {
        title: 'Overview',
        description: 'At the heart of our work is the belief that.',
        link: '#',
      },
      {
        title: 'Shenzhen',
        description: 'At the heart of our work is the belief that.',
        link: '#',
      },
      {
        title: 'Washington D.C.',
        description: 'At the heart of our work is the belief that.',
        link: '#',
      },
    ],
  },
  {
    title: 'Admissions\n & Information',
    link: '#',
    items: [
      {
        title: 'Overview',
        description: 'At the heart of our work is the belief that.',
        link: '#',
      },
      {
        title: 'Shenzhen',
        description: 'At the heart of our work is the belief that.',
        link: '#',
      },
      {
        title: 'Washington D.C.',
        description: 'At the heart of our work is the belief that.',
        link: '#',
      },
    ],
  },
];

const propTypes = {
  changeSubNavHandler: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

const MainMenu = ({
  changeSubNavHandler,
  isActive,
}) => (
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
              onClick={() => { changeSubNavHandler(item); }}
              title={item.title}
            >
              {item.title}
            </a>
          </li>
          ))
        }
      </ul>
    </nav>
    <Locales
      languageSelected={LANGUAGE.ENGLISH}
      regionSelected={REGION.US}
      visibleBreakpoint={BREAKPOINTS.BREAKPOINT_SM}
    />
  </div>
);

MainMenu.propTypes = propTypes;

export default MainMenu;
