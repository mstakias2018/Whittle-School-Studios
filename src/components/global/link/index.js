import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';

import { getIsoCode } from '../../../utils/regions';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
};

const Link = ({ children, className, to }, { language }) => {
  if (/^http/.test(to)) {
    return (
      <a
        className={className}
        href={to}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    );
  }

  return (
    <GatsbyLink
      className={className}
      to={`/${getIsoCode(language)}${to}`}
    >
      {children}
    </GatsbyLink>
  );
};

Link.propTypes = propTypes;
Link.contextTypes = { language: PropTypes.string };

export default Link;
