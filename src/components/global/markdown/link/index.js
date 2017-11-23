import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../link';

const propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

const MarkdownLink = ({ children, href }) =>
  <Link to={href}>{children}</Link>;

MarkdownLink.propTypes = propTypes;

export default MarkdownLink;
