import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import detectTouchEvents from 'detect-touch-events';
import cx from 'classnames';

import Header from '../components/global/header';
import Footer from './footer/footer';
import Fab from '../components/global/fab';
import VirtualGrid from './virtual-grid/virtual-grid';

import '../assets/styles/main.css';
/* Gatsby was having issues loading fonts from files into the styles folder,
   so fonts will live in layouts/ */
import './fonts.module.css';

const { PROP_TYPES } = require('./../constants/custom-property-types');
const { CLASSES } = require('./../constants/classes');
const {
  LANGUAGE, LANGUAGE_CLASS, LANGUAGE_CONTENTFUL_LOCALE,
} = require('./../constants/regions');
const { getLanguageFromPathname, formatTranslations } = require('./../utils/regions');

class TemplateWrapper extends Component {
  getChildContext() {
    const { data: globalSettings, location: { pathname } } = this.props;
    const language = getLanguageFromPathname(pathname) || LANGUAGE.ENGLISH;
    return {
      language,
      translations: formatTranslations(globalSettings[language]),
    };
  }

  render() {
    const { language } = this.getChildContext();

    return (
      <div
        className={cx({
          '-touchDevice': detectTouchEvents.hasSupport,
          wrapper: true,
          [`wrapper_is${LANGUAGE_CLASS[language]}`]: true,
        })}
      >
        <Helmet
          htmlAttributes={{ lang: LANGUAGE_CONTENTFUL_LOCALE[language] }}
          title="Home"
          titleTemplate="The Whittle School - %s"
        />
        <Header />
        <main className={CLASSES.PAGE_CONTENT}>{this.props.children()}</main>
        <Footer />
        <Fab />
        <VirtualGrid />
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PROP_TYPES.GLOBAL_SETTINGS.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
};

TemplateWrapper.childContextTypes = {
  language: PropTypes.string.isRequired,
  translations: PropTypes.object.isRequired,
};

export default TemplateWrapper;

// These language keys (eg ENGLISH) must match our language constants
export const pageQuery = graphql`
  query globalSettingsQuery {
    ENGLISH: allContentfulGlobalSettings(filter: { node_locale: { eq: "en-US" } } ) {
      edges {
        node {
          translations
        }
      }
    }
    CHINESE: allContentfulGlobalSettings(filter: { node_locale: { eq: "zh-CN" } } ) {
      edges {
        node {
          translations
        }
      }
    }
  }
`;
