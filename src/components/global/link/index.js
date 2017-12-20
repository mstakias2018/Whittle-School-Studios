import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';

import { LANGUAGE_PATH } from '../../../constants/regions';
import { KEYS } from '../../../constants/keys';
import { PROP_SHAPES } from '../../../constants/custom-property-types';

const propTypes = {
  children: PropTypes.node.isRequired,
  refFn: PropTypes.func,
  shouldOpenExternalInSameTab: PropTypes.bool,
  shouldSkipIsoCode: PropTypes.bool,
  shouldVisitLinkOnEnter: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

class Link extends Component {
  handleExternalKeyDown = ({ keyCode, target }) => {
    if (keyCode === KEYS.enter) {
      window.location = target.href;
    }
  }

  handleInternalKeyDown = ({ keyCode, target }) => {
    if (keyCode === KEYS.enter) {
      // We need to use getAttribute here to get the relative href
      this.context.history.push(target.getAttribute('href'));
    }
  }

  render() {
    const {
      children,
      refFn,
      shouldOpenExternalInSameTab,
      shouldSkipIsoCode,
      shouldVisitLinkOnEnter,
      to,
      ...props
    } = this.props;
    const { language } = this.context;

    if (/^http/.test(to)) {
      return (
        <a
          href={to}
          onKeyDown={shouldVisitLinkOnEnter && this.handleExternalKeyDown}
          ref={(el) => { if (refFn) refFn(el); }}
          rel="noopener noreferrer"
          target={shouldOpenExternalInSameTab ? undefined : '_blank'}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <GatsbyLink
        innerRef={(el) => { if (refFn) refFn(el); }}
        onKeyDown={shouldVisitLinkOnEnter && this.handleInternalKeyDown}
        to={shouldSkipIsoCode ? to : `/${LANGUAGE_PATH[language]}${to}`}
        {...props}
      >
        {children}
      </GatsbyLink>
    );
  }
}

Link.propTypes = propTypes;
Link.contextTypes = {
  history: PROP_SHAPES.HISTORY.isRequired,
  language: PROP_SHAPES.LANGUAGE.isRequired,
};

export default Link;
