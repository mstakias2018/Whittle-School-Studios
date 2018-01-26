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
  <h1 className={styles[`type${type}`]}>
    <span className="screenReaderText">{removeMarkdown(text)}</span>
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
