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

import Arrow from '../../../../assets/images/arrow.svg';
import Checked from '../../../../assets/images/checked.svg';
import CheckedGray from '../../../../assets/images/checked-gray.svg';
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

  getArticleTitle = (title, index, translation) => {
    if (index > 0) {
      return title || translation('header.subMenuTitileFallback.article');
    }
    return title || translation('header.subMenuTitileFallback.overview');
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
    const categoryNameFirstLine = categoryTitle.substr(0, categoryTitle.indexOf(' '));
    const categoryNameSecondLine = categoryTitle.substr(categoryTitle.indexOf(' ') + 1);
    const categoryTitleWithBreaks = (
      <span>
        {categoryNameFirstLine}
        <br />
        {categoryNameSecondLine}
      </span>
    );

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
                  {breakpoint === BREAKPOINTS_NAME.small ? categoryTitle : categoryTitleWithBreaks}
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
                                  <span className={styles.underline}>
                                    <img
                                      alt=""
                                      src={isActive ? CheckedGray : Checked}
                                    />
                                  </span>
                                ) : <span className={styles.underline}>{`0${index + 1}`}</span>}
                            </span>
                            {/* IE Hack for white space underline */}
                            <span className={styles.placeHolder}>
                              <span className={styles.underline}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={styles.itemTitle}>
                              <span className={styles.underline}>
                                {getArticleTitle(title, index, translation)}
                              </span>
                            </span>
                          </span>
                          {description && (
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
