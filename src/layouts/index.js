import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import detectTouchEvents from 'detect-touch-events';
import cx from 'classnames';

import Header from './header/header';
import Footer from './footer/footer';
import VirtualGrid from './virtual-grid/virtual-grid';

import '../assets/styles/main.css';

const TemplateWrapper = ({ children }) => (
  <div className={cx({ '-touchDevice': detectTouchEvents.hasSupport })}>
    <Helmet
      htmlAttributes={{ lang: 'en-US' }}
      title="Home"
      titleTemplate="The Whittle School - %s"
    />
    <Header />
    <main>{children()}</main>
    <Footer />
    <VirtualGrid />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
