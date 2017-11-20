import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { PROP_TYPES } from '../../../../constants/custom-property-types';

import arrow from '../../../../assets/images/language-arrow.svg';
import arrowRed from '../../../../assets/images/language-arrow-red.svg';

import styles from './header-locales.module.css';
import { LANGUAGE, REGION } from '../../../../constants/regions';
import { BREAKPOINTS } from '../../../../constants/breakpoints';

const propTypes = {
  regionSelected: PROP_TYPES.REGION.isRequired,
  visibleBreakpoint: PROP_TYPES.BREAKPOINT,
  languageSelected: PROP_TYPES.LANGUAGE.isRequired,
};

class Locales extends React.Component {
  state = {
    regionSelectActive: false,
    languageSelectActive: false,
  };

  toggleRegionSelect = () => {
    this.setState(prevState => ({
      languageSelectActive: false,
      regionSelectActive: !prevState.regionSelectActive,
    }));
  };

  toggleLanguageSelect = () => {
    this.setState(prevState => ({
      languageSelectActive: !prevState.languageSelectActive,
      regionSelectActive: false,
    }));
  };

  selectRegion = (region) => { // eslint-disable-line no-unused-vars
    // Region selection
  };

  selectLanguage = (language) => { // eslint-disable-line no-unused-vars
    // Language selection
  };

  render() {
    const { translations } = this.context;

    return (
      <div className={cx(styles.locales, {
        [styles.locales_isSmall]: this.props.visibleBreakpoint === BREAKPOINTS.BREAKPOINT_SM,
      })}
      >
        <ul className={styles.localesItems}>
          <li className={styles.localesItem}>
            <button
              onClick={() => { this.toggleRegionSelect(); }}
              title={translations.header.regions.china}
            >
              <span>{translations.header.regions.china}</span>
              <img
                alt=""
                className={styles.arrow}
                src={this.props.visibleBreakpoint === BREAKPOINTS.BREAKPOINT_SM ? arrowRed : arrow}
              />
            </button>
            <div
              className={cx(styles.regionSelect, {
                [styles.regionSelect_isActive]: this.state.regionSelectActive,
              })}
            >
              <ul>
                <li className={cx({
                  [styles.selected]: this.props.regionSelected === REGION.CHINA,
                })}
                >
                  <button
                    onClick={this.selectRegion('China')}
                    title={translations.header.regions.china}
                  >{translations.header.regions.china}
                  </button>
                </li>
                <li className={cx({
                  [styles.selected]: this.props.regionSelected === REGION.US,
                })}
                >
                  <button
                    onClick={this.selectRegion('US')}
                    title={translations.header.regions.us}
                  >{translations.header.regions.us}
                  </button>
                </li>
              </ul>
            </div>
          </li>
          <li className={styles.localesItem}>
            <button
              onClick={() => { this.toggleLanguageSelect(); }}
              title={translations.header.languages.english}
            >
              <span>English</span>
              <img
                alt=""
                className={styles.arrow}
                src={this.props.visibleBreakpoint === BREAKPOINTS.BREAKPOINT_SM ? arrowRed : arrow}
              />
            </button>
            <div
              className={cx(styles.languageSelect, {
                [styles.languageSelect_isActive]: this.state.languageSelectActive,
              })}
            >
              <ul>
                <li className={cx({
                  [styles.selected]: this.props.languageSelected === LANGUAGE.CHINESE,
                })}
                >
                  <button
                    onClick={this.selectLanguage('CHINESE')}
                    title={translations.header.languages.chinese}
                  >{translations.header.languages.chinese}
                  </button>
                </li>
                <li className={cx({
                  [styles.selected]: this.props.languageSelected === LANGUAGE.ENGLISH,
                })}
                >
                  <button
                    onClick={this.selectLanguage('ENGLISH')}
                    title={translations.header.languages.english}
                  >{translations.header.languages.english}
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

Locales.contextTypes = { translations: PropTypes.object };
Locales.propTypes = propTypes;

export default Locales;
