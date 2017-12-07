import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getChunks } from '../../../../utils/global';

import { PROP_TYPES } from '../../../../constants/custom-property-types';
import { SUBMENU_BREAK } from '../../../../constants/settings';

import Arrow from '../../../../assets/images/arrow.svg';
import Checked from '../../../../assets/images/checked.svg';
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
    const { categoryTitle, navItems } = this.props;
    const { translations } = this.context;

    return (
      <div className={styles.submenu}>
        <nav
          aria-label={translations.header.secondaryAriaLabel}
          className={styles.submenuContainer}
        >
          {
          navItems &&
          <ul
            className={cx(styles.items, {
              [styles.items_large]: this.isLarge(),
            })}
          >
            <li className={styles.titleContainer}>
              <h4 className={styles.title}>
                {categoryTitle}
              </h4>
            </li>
            {
              navItems.map(({
                description,
                isActive,
                link,
                title,
              }, index) => {
                // TODO Integrate in future sprint
                const isChecked = index === 0;

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
                          {isChecked && `${translations.header.checkedItemAriaLabel}.`}
                          {`${description}.`}
                        </span>
                        <span
                          aria-hidden="true"
                          className={styles.itemTitleContainer}
                        >
                          {isChecked ? (
                            <span className={styles.itemChecked}>
                              <img
                                alt=""
                                src={Checked}
                              />
                            </span>
                          ) : (
                            <span className={styles.itemNumber}>
                              {`0${index + 1}`}
                            </span>
                          )}
                          <span className={styles.itemTitle}>{title}</span>
                        </span>
                        <span
                          aria-hidden="true"
                          className={styles.itemDescription}
                        >
                          {description}
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
          </ul>
        }
        </nav>
      </div>
    );
  }
}

Submenu.propTypes = PROP_TYPES.SUB_NAV_PROPS;
Submenu.contextTypes = { translations: PropTypes.object.isRequired };

export default Submenu;
