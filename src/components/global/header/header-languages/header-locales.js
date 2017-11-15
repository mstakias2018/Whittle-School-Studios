import React from 'react';
import cx from 'classnames';

import { PROP_TYPES } from '../../../../constants/custom-property-types';

import arrow from '../../../../assets/images/language-arrow.svg';

import styles from './header-locales.module.css';
import { LANGUAGE, REGION } from '../../../../constants/regions';

let refLanguageButton;
let refRegionButton;

const propTypes = {
  regionSelected: PROP_TYPES.REGION.isRequired,
  languageSelected: PROP_TYPES.LANGUAGE.isRequired,
};

class Locales extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regionSelectActive: false,
      languageSelectActive: false,
    };
  }

  componentDidMount() {
    console.log( // eslint-disable-line no-console
      'lang button',
      refLanguageButton.getBoundingClientRect(),
      'region button',
      refRegionButton.getBoundingClientRect(),
    );
  }

  toggleRegionSelect = () => {
    this.setState(prevState => ({
      languageSelectActive: false,
      regionSelectActive: !prevState.regionSelectActive,
    }));
  }

  toggleLanguageSelect = () => {
    this.setState(prevState => ({
      languageSelectActive: !prevState.languageSelectActive,
      regionSelectActive: false,
    }));
  }

  selectRegion = (region) => { // eslint-disable-line no-unused-vars
    // Region selection
  }

  selectLanguage = (language) => { // eslint-disable-line no-unused-vars
    // Language selection
  }

  render() {
    return (
      <div className={styles.languages}>
        <ul className={styles.languageItems}>
          <li className={styles.languageItem}>
            <button
              onClick={() => { this.toggleRegionSelect(); }}
              ref={(el) => { refRegionButton = el; }}
              title="China"
            >
              <span>China</span>
              <img
                alt=""
                className={styles.arrow}
                src={arrow}
              />
            </button>
            <div
              className={cx(styles.regionSelect, {
                  [styles.regionSelect_isActive]: this.state.regionSelectActive,
                })}
            >
              <ul>
                <li className={cx({
                    [styles.selected]: this.props.regionSelected === REGION.US,
                  })}
                >
                  <button onClick={this.selectRegion('US')}>US</button>
                </li>
                <li className={cx({
                    [styles.selected]: this.props.regionSelected === REGION.CHINA,
                  })}
                >
                  <button onClick={this.selectRegion('Chinese')}>中文</button>
                </li>
              </ul>
            </div>
          </li>
          <li className={styles.languageItem}>
            <button
              onClick={() => { this.toggleLanguageSelect(); }}
              ref={(el) => { refLanguageButton = el; }}
              title="English"
            >
              <span>English</span>
              <img
                alt=""
                className={styles.arrow}
                src={arrow}
              />
            </button>
            <div
              className={cx(styles.languageSelect, {
                    [styles.languageSelect_isActive]: this.state.languageSelectActive,
                  })}
            >
              <ul>
                <li className={cx({
                    [styles.selected]: this.props.languageSelected === LANGUAGE.ENGLISH,
                  })}
                >
                  <button
                    onClick={this.selectLanguage('ENGLISH')}
                    title="English"
                  >English
                  </button>
                </li>
                <li className={cx({
                    [styles.selected]: this.props.languageSelected === LANGUAGE.CHINESE,
                  })}
                >
                  <button
                    onClick={this.selectLanguage('Chinese')}
                    title="Chinese"
                  >中文
                  </button>
                </li>
              </ul>
            </div>
          </li>
        </ul>


      </div>
    );
  }
}

Locales.propTypes = propTypes;

export default Locales;
