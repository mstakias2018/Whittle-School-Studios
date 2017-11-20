import React from 'react';
import Link from 'gatsby-link';
import cx from 'classnames';

import styles from './footer.module.css';

import iconFacebook from '../../../assets/images/icon-facebook.svg';
import iconTwitter from '../../../assets/images/icon-twitter.svg';
import iconWeibo from '../../../assets/images/icon-weibo.svg';
import iconWeChat from '../../../assets/images/icon-we-chat.svg';

const Links = [
  {
    isMultipleBlock: true,
    subLinks: [
      {
        title: 'The Whittle\nVision',
        link: '/article',
      },
      {
        title: 'Contact us',
        link: '#',
      },
      {
        title: 'News & FAQ',
        link: '#',
        subLinks: [
          {
            title: 'Press',
            link: '#',
          },
          {
            title: 'FAQ',
            link: '#',
          },
        ],
      },
    ],
  },
  {
    title: 'Leadership &\nFaculty',
    link: '#',
    subLinks: [
      {
        title: 'Founder &\nLeadership',
        link: '#',
      },
      {
        title: 'Staff &\nFaculty',
        link: '#',
      },
      {
        title: 'Advisory\nBoards',
        link: '#',
      },
      {
        title: 'Partners',
        link: '#',
      },
      {
        title: 'Join us',
        link: '#',
      },
    ],
  },
  {
    title: 'Education\nProgram',
    link: '#',
    subLinks: [
      {
        title: 'Curriculum',
        link: '#',
      },
      {
        title: 'Personalization',
        link: '#',
      },
      {
        title: 'Global\nExperience',
        link: '#',
      },
      {
        title: 'Center of\nExcellence',
        link: '#',
      },
      {
        title: 'Studios',
        link: '#',
      },
    ],
  },
  {
    title: 'Campus &\nArchitecture',
    link: '#',
    subLinks: [
      {
        title: 'Architecture',
        link: '#',
      },
      {
        title: 'Washington\nD.C.',
        link: '#',
      },
      {
        title: 'Shenzhen',
        link: '#',
      },
    ],
  },
  {
    title: 'Social\nResponsibility',
    link: '#',
    subLinks: [
      {
        title: 'Global Call\nOne-on-one',
        link: '#',
      },
      {
        title: 'Community\nPartnership',
        link: '#',
      },
    ],
  },
  {
    title: 'Admissions &\nInformation',
    link: '#',
    subLinks: [
      {
        title: 'Application\nProcess',
        link: '#',
      },
      {
        title: 'Begin\nEnrollment',
        link: '#',
      },
    ],
  },
];

const copyright = 'All Rights Reserved. © 2017\nG30 Project Ltd, the global parent entity.';

const shareText = 'Stay connected with us:';

const {
  CLASSES,
} = require('./../../../constants/classes');

const rehderBlockWithSubItems = (item, index, isInMultiple = false) => (
  <div
    className={isInMultiple ? styles.menuBlockInMultiple : styles.menuBlock}
    key={index.toString()}
  >
    <div className={styles.menuBlockItemWrapper}>
      <Link
        activeClassName={styles.activeLink}
        className={styles.menuBlockItem}
        to={item.link}
      >
        {item.title}
      </Link>
    </div>
    {item.subLinks.map((subItem, j) => (
      <div
        className={styles.menuBlockSubItemWrapper}
        key={j.toString()}
      >
        <Link
          activeClassName={styles.activeLink}
          className={styles.menuBlockSubItem}
          to={subItem.link}
        >
          {subItem.title}
        </Link>
      </div>
    ))}
  </div>
);

const Footer = () => (
  <footer className={cx(styles.wrapper, CLASSES.FOOTER)}>
    <div className={CLASSES.CONTAINER}>
      <div className={styles.content}>
        {Links.map((item, i) =>
            (item.isMultipleBlock ? (
              <div
                className={styles.menuBlock}
                key={i.toString()}
              >
                {item.subLinks.map((subItem, j) => {
                  let blockItem;
                  if (subItem.subLinks) {
                    blockItem = rehderBlockWithSubItems(subItem, j, true);
                  } else {
                    blockItem = (
                      <div
                        className={styles.menuBlockItemNoSubWrapper}
                        key={j.toString()}
                      >
                        <Link
                          activeClassName={styles.activeLink}
                          className={styles.menuBlockItemNoSub}
                          to={subItem.link}
                        >
                          {subItem.title}
                        </Link>
                      </div>
                    );
                  }
                  return blockItem;
                })}
              </div>
            ) :
              rehderBlockWithSubItems(item, i)
            ))}
        <div className={styles.copyright}>
          {copyright}
        </div>
        <div className={styles.shareBlock}>
          <div className={styles.shareBlockText}>
            {shareText}
          </div>
          <div className={styles.shareBlockIcons}>
            <div
              className={styles.shareBlockIcon}
            >
              <a
                href="https://www.facebook.com/"
              >
                <img
                  alt="Facebook"
                  src={iconFacebook}
                />
              </a>
            </div>
            <div
              className={styles.shareBlockIcon}
            >
              <a
                href="https://twitter.com/"
              >
                <img
                  alt="Twitter"
                  src={iconTwitter}
                />
              </a>
            </div>
            <div
              className={styles.shareBlockIcon}
            >
              <a
                href="https://weibo.com/"
              >
                <img
                  alt="Weibo"
                  src={iconWeibo}
                />
              </a>
            </div>
            <div
              className={styles.shareBlockIcon}
            >
              <a
                href="https://www.wechat.com"
              >
                <img
                  alt="We Chat"
                  src={iconWeChat}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
