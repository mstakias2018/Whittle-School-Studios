import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import MarkdownLink from './link';
import { NON_UTF8_REGEX } from '../../../constants/regex';

const ALLOWED_TYPES = {
  DEFAULT: ['Link', 'Text', 'Paragraph', 'Softbreak', 'Hardbreak', 'Emph', 'Strong'],
  SHORT_TEXT: ['Text', 'Paragraph', 'Softbreak', 'Hardbreak', 'Emph', 'Strong'],
  TITLE: ['Text', 'Emph'],
};

const propTypes = {
  isTitle: PropTypes.bool,
  isShort: PropTypes.bool,
  source: PropTypes.string.isRequired,
};

const Markdown = ({
  isTitle, isShort, source, ...props
}) => {
  let selectedTypes = ALLOWED_TYPES.DEFAULT;
  if (isTitle) {
    selectedTypes = ALLOWED_TYPES.TITLE;
  } else if (isShort) {
    selectedTypes = ALLOWED_TYPES.SHORT_TEXT;
  }

  return (
    <ReactMarkdown
      allowedTypes={selectedTypes}
      renderers={{
        Link: MarkdownLink,
      }}
      skipHtml
      source={source.replace(NON_UTF8_REGEX, '')}
      unwrapDisallowed={isTitle}
      {...props}
    />
  );
};

Markdown.propTypes = propTypes;

export default Markdown;
