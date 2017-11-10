import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { getIsoCode } from '../../../../utils/regions';

const propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

const MarkdownLink = ({ children, href }, { language }) => {
  if (/^http/.test(href)) {
    return (
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    );
  }
  return <Link to={`/${getIsoCode(language)}${href}`}>{children}</Link>; // eslint-disable-line jsx-a11y/anchor-is-valid
};

MarkdownLink.propTypes = propTypes;
MarkdownLink.contextTypes = { language: PropTypes.string };

export default MarkdownLink;
