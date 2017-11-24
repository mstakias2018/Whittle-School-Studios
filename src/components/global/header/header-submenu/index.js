import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getChunks } from '../../../../utils/global';

import { SUBMENU_BREAK } from '../../../../constants/settings';

import Arrow from '../../../../assets/images/arrow.svg';
import Checked from '../../../../assets/images/checked.svg';

import styles from './header-submenu.module.css';

const propTypes = {
  navItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  }).isRequired,
};

class Submenu extends React.Component {
  state = {
    activeItem: 0,
  };

  setActive = (index) => {
    this.setState(() => ({
      activeItem: index,
    }));
  };

  isLastRow = (index, size) => {
    const keys = Object.keys(this.props.navItem.items);
    keys.unshift('_');

    const items = getChunks(keys, size);

    return items[items.length - 1]
      .filter(v => v === index.toString())
      .length > 0;
  };

  isLarge = () => this.props.navItem.items.length > 4;

  render() {
    return (
      <div className={styles.submenu}>
        <nav
          aria-label="sub navigation content"
          className={styles.submenuContainer}
        >
          {
          this.props.navItem.items &&
          <ul
            className={cx(styles.items, {
              [styles.items_large]: this.isLarge(),
            })}
          >
            <li
              aria-label="Subnav item"
              className={cx(
              styles.item,
              styles.title,
              )}
            >
              <h4
                aria-label="Content title"
                className={styles.title}
              >
                {this.props.navItem.title}
              </h4>
            </li>
            {
              this.props.navItem.items.map((item, index) => (
                <li
                  className={cx(styles.item, {
                    [styles.item_active]: index === this.state.activeItem,
                    [styles.item_smallLastItem]: this.isLastRow(index, SUBMENU_BREAK.SMALL),
                  })}
                  key={index.toString()}
                >
                  <a
                    aria-label="Sub navigation item"
                    className={styles.itemLink}
                    href={item.link}
                    onClick={() => { this.setActive(index); }}
                    title={`${index + 1}. ${item.title}. ${item.description}`}
                  >
                    <span className={styles.itemTitleContainer}>
                      { index === 0 &&
                        <span className={styles.itemChecked}>
                          <img
                            alt=""
                            src={Checked}
                          />
                        </span>
                      }
                      { index !== 0 &&
                        <span className={styles.itemNumber}>{`0${index + 1}`}</span>
                      }
                      <span className={styles.itemTitle}>{item.title}</span>
                    </span>
                    <span
                      aria-label="Description"
                      className={styles.itemDescription}
                      title={item.description}
                    >
                      {item.description}
                      <img
                        alt=""
                        className={styles.arrow}
                        src={Arrow}
                      />
                    </span>
                  </a>
                </li>
              ))
            }
          </ul>
        }
        </nav>
      </div>
    );
  }
}

Submenu.propTypes = propTypes;

export default Submenu;
