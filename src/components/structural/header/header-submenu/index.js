import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withCookies, Cookies } from 'react-cookie';

import { getChunks } from '../../../../utils/global';

import { PROP_TYPES } from '../../../../constants/custom-property-types';
import { SUBMENU_BREAK } from '../../../../constants/settings';

import Arrow from '../../../../assets/images/arrow.svg';
import Checked from '../../../../assets/images/checked.svg';
import CheckedGray from '../../../../assets/images/checked-gray.svg';
import Link from '../../../global/link';

import styles from './header-submenu.module.css';

class Submenu extends Component {
  isLastRow = (index, size) => {
    const keys = Object.keys(this.props.navItems);
    keys.unshift('_');

    const items = getChunks(keys, size);

    return items[items.length - 1]
      .filter(v => parseInt(v, 10) === index)
      .length > 0;
  };

  isLarge = () => this.props.navItems.length > 4;

  render() {
    const {
      categoryTitle,
      cookies,
      navItems,
      viewedPage,
    } = this.props;
    const { translation } = this.context;
    const visitedPages = cookies.get('visitedPages') || [];

    return (
      <div className={styles.submenu}>
        <nav
          aria-label={translation('header.secondaryAriaLabel')}
          className={styles.submenuContainer}
        >
          {
          navItems &&
          <ul
            className={cx(styles.items, {
              [styles.items_large]: this.isLarge(),
              [styles.items_twoCols]: navItems.length < 3,
            })}
          >
            <li className={styles.titleContainer}>
              <span className={styles.title}>
                {categoryTitle}
              </span>
            </li>
            {
              navItems.map(({
                description,
                id,
                isActive,
                link,
                title,
              }, index) => {
                const isChecked = visitedPages.includes(id) || (viewedPage && isActive);

                return (
                  <li
                    className={cx(styles.item, {
                      [styles.item_active]: isActive,
                      [styles.item_smallLastItem]: this.isLastRow(index, SUBMENU_BREAK.SMALL),
                    })}
                    key={index}
                  >
                    <span className={styles.itemLinkWrapper}>
                      <Link
                        className={cx(styles.itemLink, {
                          [styles.item_checked]: isChecked,
                        })}
                        to={`/${link}`}
                      >
                        <span className="screenReaderText">
                          {`${index + 1}. ${title}.`}
                          {isChecked && `${translation('header.checkedItemAriaLabel')}.`}
                          {`${description}.`}
                        </span>
                        <span
                          aria-hidden="true"
                          className={styles.itemTitleContainer}
                        >
                          <span className={styles.itemNumber}>
                            {isChecked ?
                              <img
                                alt=""
                                src={isActive ? CheckedGray : Checked}
                              /> : `0${index + 1}`}
                          </span>
                          {/* IE Hack for white space underline */}
                          <span className={styles.placeHolder}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                          <span className={styles.itemTitle}>{title}</span>
                        </span>
                        <span
                          aria-hidden="true"
                          className={styles.itemDescription}
                        >
                          {description}
                          <span className={styles.emptySpace} />
                          <img
                            alt=""
                            className={styles.arrow}
                            src={Arrow}
                          />
                        </span>
                      </Link>
                    </span>
                  </li>
                );
              })
            }
            {navItems.length < 3 && <li className={cx(styles.item, styles.itemPlaceholder, 'showLg')} />}
          </ul>
        }
        </nav>
      </div>
    );
  }
}

Submenu.propTypes = {
  ...PROP_TYPES.SUB_NAV,
  cookies: PropTypes.instanceOf(Cookies).isRequired,
  viewedPage: PropTypes.bool,
};
Submenu.contextTypes = { translation: PropTypes.func.isRequired };

export default withCookies(Submenu);
