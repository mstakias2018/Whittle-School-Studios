import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './reset.css';

const TemplateWrapper = ({children}) => (
  <div>
    <Helmet title="Home" titleTemplate="The Whittle School - %s" />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
