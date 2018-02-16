import React from 'react';
import PropTypes from 'prop-types';

import Markdown, { ALLOWED_TYPES } from '../../../components/global/markdown';
import { PROP_SHAPES } from '../../../constants/custom-property-types';

import { removeMarkdown } from '../../../utils/strings';

import styles from './title.module.css';

const propTypes = {
  text: PropTypes.string.isRequired,
  type: PROP_SHAPES.PAGE_TYPES.isRequired,
};

const Title = ({ text, type }) => (
  <h1
    aria-label={removeMarkdown(text)}
    className={styles[`type${type}`]}
  >
    <Markdown
      allowedTypes={ALLOWED_TYPES.TITLE}
      containerProps={{ 'aria-hidden': true }}
      containerTagName="span"
      source={text}
    />
  </h1>
);

Title.propTypes = propTypes;

export default Title;
