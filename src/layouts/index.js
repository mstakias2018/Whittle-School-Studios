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

const TemplateWrapper = ({ children, }) => (
  <div className={cx({ '-touchDevice': detectTouchEvents.hasSupport, })}>
    <Helmet title="Home" titleTemplate="The Whittle School - %s" />
    <Header />
    {children()}
    <Footer />
    <VirtualGrid />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
