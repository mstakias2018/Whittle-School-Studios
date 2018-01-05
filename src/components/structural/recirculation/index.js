import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Link from '../../global/link';

import styles from './recirculation.module.css';

import arrow from '../../../assets/images/arrow.svg';
import arrowOrange from '../../../assets/images/arrow-orange.svg';

import { PROP_SHAPES } from '../../../constants/custom-property-types';
import { NAV_DIRECTIONS } from '../../../constants/settings';

const propTypes = {
  items: PROP_SHAPES.NAV_ITEM_LIST.isRequired,
};

class Recirculation extends Component {
  constructor(props) {
    super(props);

    this.state = this.getItems(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.getItems(nextProps));
  }

  getItemNumber = item => `${this.props.items.indexOf(item) + 1}`;

  getActiveIndex = (items) => {
    let activeIndex = 0;
    items.forEach((item, index) => {
      if (item.isActive) {
        activeIndex = index;
      }
    });

    return activeIndex;
  };

  getItems = (props) => {
    const activeIndex = this.getActiveIndex(props.items);
    let previousItem = false;
    let nextItem = false;

    // Check previous item
    if (activeIndex > 0) {
      previousItem = props.items[activeIndex - 1];
    }

    // Check next item
    if (activeIndex < props.items.length - 1) {
      nextItem = props.items[activeIndex + 1];
    }

    return {
      nextItem,
      previousItem,
    };
  };

  getNavigationItem = (item, type) => {
    const { translation } = this.context;

    return (
      <div className={cx(styles.navigationItemWrapper, {
        [styles.navigationItemWrapper_isBig]: type === NAV_DIRECTIONS.NEXT ||
        (type === NAV_DIRECTIONS.PREVIOUS && !this.isFullSize()),
        [styles.navigationItemWrapper_isSingle]: !this.isFullSize(),
      })}
      >
        <Link
          className={styles.navigationItem}
          to={`/${item.link}`}
        >
          <span
            aria-label={`${type === NAV_DIRECTIONS.NEXT ?
              translation('recirculation.next') : translation('recirculation.previous')}
              ${this.getItemNumber(item)} ${item.title}`}
            className={styles.direction}
          >
            {type === NAV_DIRECTIONS.PREVIOUS &&
              <span
                aria-hidden="true"
                className={styles.directionLabel}
              >
                <img
                  alt=""
                  className={cx(styles.arrow, styles.arrow_left)}
                  src={arrow}
                />
                <img
                  alt=""
                  className={cx(styles.arrow, styles.arrow_left, styles.arrow_hover)}
                  src={arrowOrange}
                />
                {translation('recirculation.previous')}
              </span>
            }
            {type === NAV_DIRECTIONS.NEXT &&
              <span
                aria-hidden="true"
                className={styles.directionLabel}
              >
                  {translation('recirculation.next')}
                <img
                  alt=""
                  className={cx(styles.arrow, styles.arrow_right)}
                  src={arrow}
                />
                <img
                  alt=""
                  className={cx(styles.arrow, styles.arrow_right, styles.arrow_hover)}
                  src={arrowOrange}
                />
              </span>
            }
            <span className={styles.title}>
              <span
                aria-hidden="true"
                className={styles.number}
              >
                {`0${this.getItemNumber(item)}`}
              </span>
              <span aria-hidden="true">
                {item.title}
              </span>
            </span>
          </span>
          <span className={styles.description}>
            {item.description}
          </span>
        </Link>
      </div>
    );
  };

  // Check if we have 2 items to show
  isFullSize = () => this.state.previousItem && this.state.nextItem;

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <nav className={styles.navigation}>
            {this.state.previousItem &&
              this.getNavigationItem(
                this.state.previousItem,
                NAV_DIRECTIONS.PREVIOUS
              )
            }
            {this.state.nextItem &&
              this.getNavigationItem(
                this.state.nextItem,
                NAV_DIRECTIONS.NEXT
              )
            }
          </nav>
        </div>
      </div>
    );
  }
}

Recirculation.propTypes = propTypes;
Recirculation.contextTypes = { translation: PropTypes.func.isRequired };

export default Recirculation;
