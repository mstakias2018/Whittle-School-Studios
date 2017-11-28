import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { KEYS } from '../../../constants/keys';
import { PROP_TYPES } from '../../../constants/custom-property-types';

import arrow from '../../../assets/images/language-arrow.svg';
import arrowRed from '../../../assets/images/language-arrow-red.svg';

import styles from './drop.module.css';

const propTypes = {
  selected: PropTypes.string,
  isSmall: PropTypes.bool,
  data: PROP_TYPES.DROP.isRequired,
  onSelect: PropTypes.func.isRequired,
};

class Drop extends React.Component {
  state = { selectActive: false };
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
        if (!this.state.selectActive) {
          this.moveToNextListItem();
        } else {
          // TODO
          // add real value
          this.select(this.refElements.listElements[this.activeListElement].title);
        }
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

  select = (value) => {
    // TODO
    // Implement real region select/change
    this.setState({ selectActive: false });
    this.refElements.btn.focus();
    this.props.onSelect(value);
  };

  render() {
    return (
      <div
        className={styles.drop}
        onBlur={this.handleOnBlur}
      >
        <button
          aria-controls={`${this.props.data.id}Selection`}
          aria-haspopup="true"
          aria-label={this.props.data.buttonAriaLabel}
          className={styles.dropButton}
          id={this.props.data.id}
          onClick={this.toggleSelect}
          onKeyDown={this.handleKey}
          ref={(el) => { this.refElements.btn = el; }}
          title={this.props.data.title}
        >
          <span>{this.props.data.title}</span>
          <img
            alt=""
            className={styles.arrow}
            src={this.props.isSmall ? arrowRed : arrow}
          />
        </button>
        <ul
          aria-label={this.props.data.listAriaLabel}
          className={cx(styles.select, {
            [styles.select_isActive]: this.state.selectActive,
          })}
          id={`${this.props.data.id}Selection`}
          onKeyDown={this.handleKey}
          role="menu"
        >
          {this.props.data.items.map((item, index) => (
            <li
              key={`item-${item.title}`}
              role="menuitem"
            >
              <button
                className={cx(styles.selectButton, {
                  [styles.selectButton_isSelected]: this.props.selected === item.title,
                })}
                onClick={() => this.select(item.value)}
                ref={(el) => {
                  this.refElements.listElements[index] = el;
                }}
                tabIndex="-1"
                title={item.title}
              >{item.title}
              </button>
            </li>
          ))
          }
        </ul>
      </div>
    );
  }
}

Drop.propTypes = propTypes;

export default Drop;
