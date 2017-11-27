import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './footer.module.css';

import Link from '../link';
import FooterShareIcons from './share-icons';

import { CLASSES } from './../../../constants/classes';

// todo
const copyright = 'All Rights Reserved. © 2017\nG30 Project Ltd, the global parent entity.';

const renderBlock = (item, index, className) => (
  <div
    className={cx(
      styles.menuBlockItemWrapper,
      styles.menuBlockItemWrapper_noSub,
      className,
    )}
    key={index && index.toString()}
  >
    <Link
      className={cx(styles.menuBlockItem, styles.menuBlockItem_noSub)}
      to={item.link}
    >
      {item.title}
    </Link>
  </div>
);

const renderBlockWithSubItems = (item, index, isInMultiple = false, className) => (
  <div
    className={cx(
      className,
      isInMultiple ? styles.menuBlockInMultiple : styles.menuBlock,
    )}
    key={index && index.toString()}
  >
    <div className={styles.menuBlockItemWrapper}>
      <Link
        className={styles.menuBlockItem}
        to={item.link}
      >
        {item.title}
      </Link>
    </div>
    {item.subLinks && item.subLinks.map((subItem, j) => (
      <div
        className={styles.menuBlockSubItemWrapper}
        key={j.toString()}
      >
        <Link
          className={styles.menuBlockSubItem}
          to={subItem.link}
        >
          {subItem.title}
        </Link>
      </div>
    ))}
  </div>
);

const renderUtilityLink = (item, index, className) => (
  (item.subLinks ?
    renderBlockWithSubItems(item, index, true, className) :
    renderBlock(item, index, className))
);

const Footer = (props, { footerData }) => {
  const {
    primaryLinks: [firstPrimaryLink, ...otherPrimaryLinks],
    utilityLinks,
  } = footerData;

  return (
    <footer className={cx(styles.wrapper, CLASSES.FOOTER)}>
      <div className={CLASSES.CONTAINER}>
        <div className={styles.content}>

          {/* column 1 - 1st primary link with no children + utility links (md,lg) */}
          <div className={styles.menuBlock}>
            {renderBlock(firstPrimaryLink)}
            {utilityLinks.map((item, i) => renderUtilityLink(item, i, 'hideSm'))}
          </div>

          {/* columns 2-6 - other primary links */}
          {otherPrimaryLinks.map((item, i) => renderBlockWithSubItems(item, i))}

          {/* utility links (sm) */}
          {utilityLinks.map((item, i) => (
            <div
              className={cx(styles.menuBlock, 'showSm')}
              key={i.toString()}
            >
              {renderUtilityLink(item)}
            </div>
          ))}

          <div className={styles.copyright}>
            {copyright}
          </div>
          <FooterShareIcons />
        </div>
      </div>
    </footer>
  );
};

Footer.contextTypes = {
  footerData: PropTypes.object.isRequired,
};

export default Footer;