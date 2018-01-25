import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Drop from '../../../global/drop';
import {
  LANGUAGE,
  LANGUAGE_PATH,
  REGION,
  REGION_LANGUAGES,
  REGION_URLS,
} from '../../../../constants/regions';
import { PROP_SHAPES } from '../../../../constants/custom-property-types';
import { getDefaultLangPath } from '../../../../utils/regions';
import { getCurrentPageWithLocalizedSlugs } from '../../../../utils/nav';

import styles from './header-locales.module.css';

const propTypes = {
  isSmall: PropTypes.bool,
};

class Locales extends Component {
  // Each language links to a version of the current page in that language
  getLanguageItems = () => {
    const regionLangagues = REGION_LANGUAGES[process.env.GATSBY_REGION];
    if (regionLangagues.length === 1) return [];

    const { localizedSlugList = [], translation } = this.context;

    return REGION_LANGUAGES[process.env.GATSBY_REGION].map((language) => {
      const currentPageWithLocalizedSlugs = getCurrentPageWithLocalizedSlugs(
        localizedSlugList,
        language
      );

      return {
        link: `${LANGUAGE_PATH[language]}${currentPageWithLocalizedSlugs}`,
        sameFontTranslated: language === LANGUAGE.ENGLISH,
        title: translation && translation(`header.languages.${language}`),
        value: language,
      };
    });
  };

  getRegionItems = () => {
    const { liveSites } = this.context;
    const regionItems = [];
    Object.keys(REGION).map((region) => {
      if (liveSites.includes(region) || region === process.env.GATSBY_REGION) {
        regionItems.push({
          link: `${REGION_URLS[process.env.GATSBY_ENV][region]}${getDefaultLangPath(region)}`,
          title: this.context.translation && this.context.translation(`header.regions.${region}`),
          value: region,
        });
      }
      return true;
    });

    return regionItems.length > 1 ? regionItems : false;
  };

  getSelectedLabel = (menuAriaLabel, selectedValueLabel) => ([
    <span
      className="screenReaderText"
      key="srText"
    >
      {`${menuAriaLabel}.`}
      {this.context.translation && this.context.translation('header.selectors.currentSelectionAriaLabel')} -
    </span>,
    <span key="visibleText">
      {selectedValueLabel}
    </span>,
  ]);

  render() {
    const { language, translation } = this.context;
    const hasLanguageSelector = REGION_LANGUAGES[process.env.GATSBY_REGION].length > 1;
    const LocaleWrapperTag = hasLanguageSelector ? 'ul' : 'div';
    const RegionSelectorTag = hasLanguageSelector ? 'li' : 'span';
    const regionItems = this.getRegionItems();
    const regionSelector = regionItems && (
      <RegionSelectorTag
        className={styles.localesItem}
        key="region"
      >
        <Drop
          isSmall={this.props.isSmall}
          items={regionItems}
          selectedLabel={
            this.getSelectedLabel(
              translation && translation('header.selectors.regionAriaLabel'),
              translation && translation(`header.regions.${process.env.GATSBY_REGION}`)
            )
          }
          selectedValue={process.env.GATSBY_REGION}
        />
      </RegionSelectorTag>
    );

    return (
      <div
        className={cx(styles.locales, {
          [styles.locales_isSmall]: this.props.isSmall,
        })}
      >
        <LocaleWrapperTag className={styles.localesItems}>
          {hasLanguageSelector ? [
            regionSelector,
            <li
              className={styles.localesItem}
              key="language"
            >
              <Drop
                isSmall={this.props.isSmall}
                items={this.getLanguageItems()}
                selectedLabel={
                  this.getSelectedLabel(
                    translation && translation('header.selectors.languageAriaLabel'),
                    translation && translation(`header.languages.${language}`)
                  )
                }
                selectedValue={language}
              />
            </li>,
        ] : regionSelector}
        </LocaleWrapperTag>
      </div>
    );
  }
}

Locales.contextTypes = {
  language: PROP_SHAPES.LANGUAGE.isRequired,
  liveSites: PropTypes.array,
  localizedSlugList: PROP_SHAPES.LOCALIZED_SLUG_LIST,
  translation: PropTypes.func.isRequired,
};
Locales.propTypes = propTypes;

export default Locales;
