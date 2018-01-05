import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Drop from '../../../global/drop';
import {
  LANGUAGE_CONTENTFUL_LOCALE,
  LANGUAGE_PATH,
  REGION,
  REGION_LANGUAGES,
  REGION_URLS,
} from '../../../../constants/regions';
import { PROP_SHAPES } from '../../../../constants/custom-property-types';
import { getDefaultLangPath } from '../../../../utils/regions';

import styles from './header-locales.module.css';

const propTypes = {
  isSmall: PropTypes.bool,
  localizedSlugList: PROP_SHAPES.LOCALIZED_SLUG_LIST,
};

class Locales extends Component {
  // Each language links to a version of the current page in that language
  getLanguageItems = () => {
    const regionLangagues = REGION_LANGUAGES[process.env.GATSBY_REGION];
    if (regionLangagues.length === 1) return [];

    const { localizedSlugList = [] } = this.props;
    const { translations } = this.context;

    return REGION_LANGUAGES[process.env.GATSBY_REGION].map((language) => {
      let currentPageWithLocalizedSlugs = '';
      localizedSlugList.some(({ locale, link }) => {
        if (LANGUAGE_CONTENTFUL_LOCALE[language] === locale) {
          currentPageWithLocalizedSlugs = link;
          return true;
        }
        return false;
      });

      return {
        link: `${LANGUAGE_PATH[language]}${currentPageWithLocalizedSlugs}`,
        title: translations.header.languages[language],
        value: language,
      };
    });
  };

  getRegionItems = () =>
    Object.keys(REGION).map(region => ({
      link: `${REGION_URLS[process.env.GATSBY_ENV][region]}${getDefaultLangPath(region)}`,
      title: this.context.translations.header.regions[region],
      value: region,
    }));

  getSelectedLabel = (menuAriaLabel, selectedValueLabel) => ([
    <span
      className="screenReaderText"
      key="srText"
    >
      {`${menuAriaLabel}.`}
      {this.context.translations.header.selectors.currentSelectionAriaLabel} -
    </span>,
    <span key="visibleText">
      {selectedValueLabel}
    </span>,
  ]);

  render() {
    const { language, translations } = this.context;
    const hasLanguageSelector = REGION_LANGUAGES[process.env.GATSBY_REGION].length > 1;
    const LocaleWrapperTag = hasLanguageSelector ? 'ul' : 'div';
    const RegionSelectorTag = hasLanguageSelector ? 'li' : 'span';

    const regionSelector = (
      <RegionSelectorTag
        className={styles.localesItem}
        key="region"
      >
        <Drop
          isSmall={this.props.isSmall}
          items={this.getRegionItems()}
          selectedLabel={
            this.getSelectedLabel(
              translations.header.selectors.regionAriaLabel,
              translations.header.regions[process.env.GATSBY_REGION]
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
                    translations.header.selectors.languageAriaLabel,
                    translations.header.languages[language]
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
  translations: PropTypes.object.isRequired,
};
Locales.propTypes = propTypes;

export default Locales;
