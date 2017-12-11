import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import MarkdownLink from './link';
import MarkdownImage from './image';

export const ALLOWED_TYPES = {
  DEFAULT: ['Link', 'Text', 'Paragraph', 'Softbreak', 'Hardbreak', 'Emph', 'Strong'],
  SHORT_TEXT: ['Text', 'Paragraph', 'Softbreak', 'Hardbreak', 'Emph', 'Strong'],
  TITLE: ['Text', 'Emph'],
  WITH_IMAGE: ['Image', 'Link', 'Text', 'Paragraph', 'Softbreak', 'Hardbreak', 'Emph', 'Strong'],
};

const propTypes = {
  allowedTypes: PropTypes.oneOf([
    ALLOWED_TYPES.DEFAULT,
    ALLOWED_TYPES.SHORT_TEXT,
    ALLOWED_TYPES.TITLE,
    ALLOWED_TYPES.WITH_IMAGE,
  ]),
  source: PropTypes.string.isRequired,
};

const Markdown = ({
  allowedTypes = ALLOWED_TYPES.DEFAULT,
  source,
  ...props
}) => (
  <ReactMarkdown
    allowedTypes={allowedTypes}
    renderers={{
      Image: MarkdownImage,
      Link: MarkdownLink,
    }}
    skipHtml
    source={source}
    unwrapDisallowed={allowedTypes === ALLOWED_TYPES.TITLE}
    {...props}
  />
);

Markdown.propTypes = propTypes;

export default Markdown;
