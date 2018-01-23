import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uuid from 'uuid/v4';

import { KEYS } from '../../../constants/keys';

import arrow from '../../../assets/images/language-arrow.svg';
import arrowRed from '../../../assets/images/language-arrow-red.svg';
import Link from '../link';

import styles from './drop.module.css';

const propTypes = {
  isSmall: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    sameFontTranslated: PropTypes.bool,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  selectedLabel: PropTypes.node.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

class Drop extends React.Component {
  state = { selectActive: false };

  componentWillMount() {
    this.id = uuid();
  }

  activeListElement = -1;
  refElements = { listElements: [] };

  handleOnBlur = () => {
    setTimeout(() => {
      if (!this.refElements.listElements.includes(document.activeElement)) {
        this.resetAll();
      }
    }, 0);
  };

  handleKey = (e) => {
    const preventKeys = [KEYS.down, KEYS.up, KEYS.esc, KEYS.enter];

    if (preventKeys.includes(e.keyCode)) {
      e.preventDefault();
    }

    switch (e.keyCode) {
      case KEYS.down:
        this.moveToNextListItem();
        break;
      case KEYS.enter:
        this.state.selectActive ? this.close() : this.moveToNextListItem();
        break;
      case KEYS.up:
        this.moveToPreviousListItem();
        break;
      case KEYS.esc:
        this.setState({ selectActive: false });
        this.refElements.btn.focus();
        break;
      default:
        break;
    }
  };

  moveToNextListItem = () => {
    if (this.state.selectActive) {
      this.activeListElement += 1;

      if (this.activeListElement >= this.refElements.listElements.length) {
        this.activeListElement = 0;
      }
      this.refElements.listElements[this.activeListElement].focus();
    } else {
      this.setState({ selectActive: true });
      setTimeout(() => {
        this.activeListElement = 0;
        this.refElements.listElements[0].focus();
      }, 0);
    }
  };

  moveToPreviousListItem = () => {
    if (this.state.selectActive) {
      this.activeListElement -= 1;

      if (this.activeListElement < 0) {
        this.activeListElement = this.refElements.listElements.length - 1;
      }
      this.refElements.listElements[this.activeListElement].focus();
    }
  };

  resetAll = () => {
    this.activeListElement = 0;
    this.setState({ selectActive: false });
  };

  toggleSelect = () => {
    this.setState(prevState => ({ selectActive: !prevState.selectActive }));
  };

  close = () => {
    window.scrollTo(0, 0);
    this.setState({ selectActive: false });
    this.refElements.btn.focus();
  };

  render() {
    const {
      isSmall,
      items,
      selectedValue,
      selectedLabel,
    } = this.props;

    return (
      <div
        className={styles.drop}
        onBlur={this.handleOnBlur}
        tabIndex="-1"
      >
        <button
          aria-controls={`${this.id}Selection`}
          aria-haspopup="true"
          className={styles.dropButton}
          id={this.id}
          onClick={this.toggleSelect}
          onKeyDown={this.handleKey}
          ref={(el) => { this.refElements.btn = el; }}
        >
          <span className={styles.dropButtonText}>{selectedLabel}</span>
          <img
            alt=""
            className={styles.arrow}
            src={isSmall ? arrowRed : arrow}
          />
        </button>
        <ul
          aria-labelledby={this.id}
          className={cx(styles.select, {
            [styles.select_isActive]: this.state.selectActive,
          })}
          id={`${this.id}Selection`}
          onKeyDown={this.handleKey}
          role="menu"
        >
          {items.map((item, index) => {
            const isSelected = selectedValue === item.value;
            return (
              <li
                key={`item-${item.title}`}
                role="menuitem"
              >
                <Link
                  className={cx(styles.selectButton, {
                    [styles.selectButton_isSelected]: isSelected,
                    [styles.selectButton_hasSameFontTranslated]: item.sameFontTranslated,
                  })}
                  onClick={this.close}
                  refFn={(el) => {
                    this.refElements.listElements[index] = el;
                  }}
                  shouldOpenExternalInSameTab
                  shouldSkipIsoCode
                  shouldVisitLinkOnEnter
                  tabIndex="-1"
                  title={item.title}
                  to={isSelected ? this.context.pathname : item.link}
                >
                  {item.title}
                </Link>
              </li>
            );
          })
          }
        </ul>
      </div>
    );
  }
}

Drop.propTypes = propTypes;
Drop.contextTypes = { pathname: PropTypes.string.isRequired };

export default Drop;
