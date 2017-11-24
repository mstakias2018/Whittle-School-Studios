import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Drop from '../../../../components/global/drop';

import styles from './header-locales.module.css';

const propTypes = {
  regionSelected: PropTypes.string.isRequired,
  isSmall: PropTypes.bool,
  languageSelected: PropTypes.string.isRequired,
};

class Locales extends Component {
  getLanguageData = () => {
    const { translations } = this.context;
    return {
      id: 'language',
      buttonAriaLabel: translations.header.languages.chinese, // Todo add real aria-label
      title: translations.header.languages.chinese, // Todo add real selected item
      items: [
        {
          title: translations.header.languages.chinese,
          value: 'cn',
        },
        {
          title: translations.header.languages.english,
          value: 'us',
        },
      ],
    };
  };

  getRegionData = () => {
    const { translations } = this.context;
    return {
      id: 'region',
      buttonAriaLabel: translations.header.regions.china, // Todo add real aria-label
      title: translations.header.regions.china, // Todo add real selected item
      items: [
        {
          title: translations.header.regions.china,
          value: 'China',
        },
        {
          title: translations.header.regions.us,
          value: 'US',
        },
      ],
    };
  };

  selectRegion = (item) => { // eslint-disable-line
    // Todo
    // Do real region select
  };

  selectLanguage = (item) => { // eslint-disable-line
    // Todo
    // Do real language select
  };

  render() {
    return (
      <div
        className={cx(styles.locales, {
          [styles.locales_isSmall]: this.props.isSmall,
        })}
      >
        <ul
          aria-label="Region & language selection"
          className={styles.localesItems}
        >
          <li
            aria-label="Region selection"
            className={styles.localesItem}
          >
            <Drop
              data={this.getRegionData()}
              isSmall={this.props.isSmall}
              onSelect={this.selectRegion}
              selected={this.props.regionSelected}
            />
          </li>
          <li
            aria-label="Language selection"
            className={styles.localesItem}
          >
            <Drop
              data={this.getLanguageData()}
              isSmall={this.props.isSmall}
              onSelect={this.selectLanguage}
              selected={this.props.languageSelected}
            />
          </li>
        </ul>
      </div>
    );
  }
}

Locales.contextTypes = { translations: PropTypes.object };
Locales.propTypes = propTypes;

export default Locales;
