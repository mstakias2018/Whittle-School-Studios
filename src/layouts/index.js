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

const { CLASSES } = require('./../constants/classes');
const {
  LANGUAGE, LANGUAGE_CLASS, LANGUAGE_CONTENTFUL_LOCALE,
} = require('./../constants/regions');
const { getLanguageFromPathname } = require('./../utils/regions');

class TemplateWrapper extends Component {
  getChildContext() {
    return { language: getLanguageFromPathname(this.props.location.pathname) || LANGUAGE.ENGLISH };
  }

  render() {
    return <WrapperInner>{this.props.children}</WrapperInner>;
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
};

TemplateWrapper.childContextTypes = { language: PropTypes.string.isRequired };

function WrapperInner({ children }, { language }) {
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
      <main className={CLASSES.PAGE_CONTENT}>{children()}</main>
      <Footer />
      <Fab />
      <VirtualGrid />
    </div>
  );
}

WrapperInner.propTypes = { children: PropTypes.func };
WrapperInner.contextTypes = { language: PropTypes.string };

export default TemplateWrapper;
