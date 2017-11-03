import React from 'react';
import PropTypes from 'prop-types';

import styles from './footer.module.css';

const Links = [
  {
    isDoubleBlock: true,
    subLinks: [
      {
        title: 'The Whittle\nVision',
        link: '#',
      },
      {
        title: 'Campus &\nArchitecture',
        link: '#',
      },
    ],
  },
  {
    title: 'Leadership\n& Faculty',
    link: '#',
    subLinks: [
      {
        title: 'Founder\n& Board',
        link: '#',
      },
      {
        title: 'Faculty\n& Partners',
        link: '#',
      },
      {
        title: 'Join the\nTeam',
        link: '#',
      },
    ],
  },
  {
    title: 'Educational\nExperience',
    link: '#',
    subLinks: [
      {
        title: 'Curriculum',
        link: '#',
      },
      {
        title: 'Personalization\n& Immersioln',
        link: '#',
      },
      {
        title: 'Global\nExperience',
        link: '#',
      },
      {
        title: 'Studios',
        link: '#',
      },
    ],
  },
  {
    title: 'Admissions\n& Information',
    link: '#',
    subLinks: [
      {
        title: 'Admissions',
        link: '#',
      },
      {
        title: 'Path to Inquiry',
        link: '#',
      },
      {
        title: 'Enrolment',
        link: '#',
      },
    ],
  },
  {
    title: 'News\n& FAQ',
    link: '#',
    subLinks: [
      {
        title: 'Press',
        link: '#',
      },
      {
        title: 'News',
        link: '#',
      },
      {
        title: 'FAQ',
        link: '#',
      },
    ],
  },
  {
    title: 'Stay\nConnected',
    link: '#',
    subLinks: [
      {
        title: 'Facebook',
        link: '#',
      },
      {
        title: 'Twitter',
        link: '#',
      },
      {
        title: 'WeChat',
        link: '#',
      },
      {
        title: 'Instagram',
        link: '#',
      },
    ],
  },
];

const copyright = 'All Rights Reserved. © 2017\nG30 Project Ltd, the global parent entity.';

const Footer = () => (
  <footer className={styles.wrapper}>
    <div className={styles.content}>
      {Links.map((item, i) =>
          (item.isDoubleBlock ? (
            <div
              className={styles.menuBlock}
              key={i}
            >
              {item.subLinks.map((subItem, j) => (
                <a
                  className={styles.menuBlockItemNoSub}
                  href={item.link}
                  key={j}
                >
                  {subItem.title}
                </a>
              ))}
            </div>
          ) : (
            <div
              className={styles.menuBlock}
              key={i}
            >
              <a
                className={styles.menuBlockItem}
                href={item.link}
              >
                {item.title}
              </a>
              {item.subLinks.map((subItem, j) => (
                <a
                  className={styles.menuBlockSubItem}
                  href={item.link}
                  key={j}
                >
                  {subItem.title}
                </a>
              ))}
            </div>
          )))}
    </div>
  </footer>
);

export default Footer;
