import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Header from './header/header';
import Footer from './footer/footer';

import '../assets/styles/main.css';

const TemplateWrapper = ({children}) => (
  <div>
    <Helmet title="Home" titleTemplate="The Whittle School - %s" />
    <Header />
    {children()}
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
