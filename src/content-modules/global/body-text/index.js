import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  content: PropTypes.object.isRequired,
};

export default function BodyText({ content, }) {
  return (
    <div>
      <h2>Body text module</h2>
      <div
        dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}}
      />
    </div>
  );
}

BodyText.propTypes = propTypes;
