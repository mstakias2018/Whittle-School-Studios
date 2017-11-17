import React from 'react';
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

const defaultProps = { visibleBreakpoint: false };

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
    return (
      <div className={cx(styles.locales, {
        [styles.locales_isSmall]: this.props.visibleBreakpoint === BREAKPOINTS.BREAKPOINT_SM,
      })}
      >
        <ul className={styles.localesItems}>
          <li className={styles.localesItem}>
            <button
              onClick={() => { this.toggleRegionSelect(); }}
              title="China"
            >
              <span>China</span>
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
                  [styles.selected]: this.props.regionSelected === REGION.US,
                })}
                >
                  <button
                    onClick={this.selectRegion('US')}
                    title="US"
                  >US
                  </button>
                </li>
                <li className={cx({
                  [styles.selected]: this.props.regionSelected === REGION.CHINA,
                })}
                >
                  <button
                    onClick={this.selectRegion('Chinese')}
                    title="中文"
                  >中文
                  </button>
                </li>
              </ul>
            </div>
          </li>
          <li className={styles.localesItem}>
            <button
              onClick={() => { this.toggleLanguageSelect(); }}
              title="English"
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
                    title="中文"
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
Locales.defaultProps = defaultProps;

export default Locales;
