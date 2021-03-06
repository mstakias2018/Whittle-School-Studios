import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withCookies, Cookies } from 'react-cookie';

import WithWindowListener from '../../../../hocs/withWindow';
import { getChunks } from '../../../../utils/global';

import { PROP_TYPES } from '../../../../constants/custom-property-types';
import { SUBMENU_BREAK } from '../../../../constants/settings';
import { BREAKPOINTS_NAME } from '../../../../constants/breakpoints';
import { getArticleTitle } from '../../../../utils/nav';

import Checked from '../../../../assets/images/checked.svg';
import CheckedGray from '../../../../assets/images/checked-gray.svg';
import Arrow from '../../../global/arrow';
import Link from '../../../global/link';

import styles from './header-submenu.module.css';

class Submenu extends Component {
  state = {
    breakpoint: BREAKPOINTS_NAME.large,
  };

  componentDidMount() {
    this.setState({
      breakpoint: this.props.breakpoint,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.breakpoint !== this.props.breakpoint) {
      setTimeout(() => {
        this.setState({
          breakpoint: this.props.breakpoint,
        });
      }, 0);
    }
  }

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
    const { breakpoint } = this.state;
    const visitedPages = cookies.get('visitedPages') || [];

    return (
      <div className={styles.submenu}>
        <nav
          aria-label={translation('header.secondaryAriaLabel')}
          className={styles.submenuContainer}
        >
          {navItems && (
            <ul
              className={cx(styles.items, {
                [styles.items_large]: this.isLarge(),
                [styles.items_twoCols]: navItems.length < 3,
              })}
            >
              <li className={styles.titleContainer}>
                <span className={styles.title}>
                  {categoryTitle}
                  {breakpoint !== BREAKPOINTS_NAME.small && <span className={styles.emptySpace} />}
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
                  let descriptionText;

                  if (description) {
                    const lastWord = description.split(' ').splice(-1)[0];
                    const lastIndex = description.lastIndexOf(' ');
                    const text = lastIndex > 0 && `${description.substring(0, lastIndex)} `;

                    descriptionText = (
                      <span>
                        {text}
                        <span className={styles.lastWord}>
                          {lastWord}
                          <span className={styles.emptySpace} />
                          {!isActive && <Arrow />}
                        </span>
                      </span>
                    );
                  }

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
                          aria-disabled={isActive}
                          className={styles.itemLink}
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
                                (
                                  <img
                                    alt=""
                                    src={isActive ? CheckedGray : Checked}
                                  />
                                ) : `0${index + 1}`}
                            </span>
                            <span className={styles.itemTitle}>
                              {getArticleTitle(title, index, translation)}
                            </span>
                          </span>
                          {description && (
                            <span
                              aria-hidden="true"
                              className={styles.itemDescription}
                            >
                              {descriptionText}
                            </span>
                          )}
                        </Link>
                      </span>
                    </li>
                  );
                })
              }
              {navItems.length < 3 && <li className={cx(styles.item, styles.itemPlaceholder, 'showLg')} />}
            </ul>
          )}
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

export default withCookies(WithWindowListener(Submenu));
