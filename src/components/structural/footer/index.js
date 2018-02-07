import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './footer.module.css';

import Link from '../../global/link';
import FooterShareIcons from './share-icons';

import { PROP_SHAPES } from '../../../constants/custom-property-types';
import { CLASSES } from '../../../constants/classes';

const renderBlock = (item, index, className) => (
  <div
    className={cx(
      styles.menuBlockItemWrapper,
      styles.menuBlockItemWrapper_noSub,
      className
    )}
    key={index}
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
      isInMultiple ? styles.menuBlockInMultiple : styles.menuBlock
    )}
    key={index}
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
        key={j}
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

const Footer = (props, context) => {
  const { footerData, socialIcons, translation } = context;

  let firstPrimaryLink;
  let otherPrimaryLinks;
  let utilityLinks;
  if (footerData) {
    [firstPrimaryLink, ...otherPrimaryLinks] = footerData.primaryLinks;
    ({ utilityLinks } = footerData);
  }

  return (
    <footer
      className={cx(styles.wrapper, CLASSES.FOOTER)}
      role="contentinfo"
    >
      <div className={CLASSES.CONTAINER}>
        <div className={styles.content}>

          {/* column 1 - 1st primary link with no children + utility links (md,lg) */}
          <div className={styles.menuBlock}>
            {firstPrimaryLink && renderBlock(firstPrimaryLink)}
            {utilityLinks && utilityLinks.map((item, i) => renderUtilityLink(item, i, 'hideSm'))}
          </div>

          {/* columns 2-6 - other primary links */}
          {otherPrimaryLinks && otherPrimaryLinks.map((item, i) => renderBlockWithSubItems(item, i))}

          {/* utility links (sm) */}
          {utilityLinks && utilityLinks.map((item, i) => (
            <div
              className={cx(styles.menuBlock, 'showSm')}
              key={i}
            >
              {renderUtilityLink(item)}
            </div>
          ))}

          <div className={styles.copyright}>
            <div>
              {translation && translation('footer.copyrightLine1')}
              <span className={styles.copyrightYear}> &copy; {translation && translation('footer.copyrightYear')}</span>
            </div>
            <div>{translation && translation('footer.copyrightLine2')}</div>
          </div>
          {socialIcons && socialIcons.footer.length > 0 &&
          <FooterShareIcons />
          }
        </div>
      </div>
    </footer>
  );
};

Footer.contextTypes = {
  footerData: PROP_SHAPES.FOOTER_DATA.isRequired,
  socialIcons: PROP_SHAPES.SOCIAL_ICONS.isRequired,
  translation: PropTypes.func.isRequired,
};

export default Footer;
