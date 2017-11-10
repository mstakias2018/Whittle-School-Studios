import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import MarkdownLink from './link';

const ALLOWED_TYPES = ['Link', 'Text', 'Paragraph', 'Softbreak', 'Hardbreak', 'Emph', 'Strong'];
const ALLOWED_TYPES_TITLE = ['Text', 'Emph'];

const propTypes = {
  isTitle: PropTypes.bool,
  source: PropTypes.string.isRequired,
};

const Markdown = ({ isTitle, source, ...props }) => (
  <ReactMarkdown
    allowedTypes={isTitle ? ALLOWED_TYPES_TITLE : ALLOWED_TYPES}
    renderers={{
      Link: MarkdownLink,
    }}
    skipHtml
    source={source}
    unwrapDisallowed={isTitle}
    {...props}
  />
);

Markdown.propTypes = propTypes;

export default Markdown;
