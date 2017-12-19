import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Markdown, { ALLOWED_TYPES } from '../../../components/global/markdown';
import { PROP_TYPES } from '../../../constants/custom-property-types';

import { removeMarkdown } from '../../../utils/strings';

import styles from './title.module.css';

const propTypes = {
  isSingle: PropTypes.bool,
  text: PropTypes.string.isRequired,
  type: PROP_TYPES.PAGE_TYPES.isRequired,
};

const {
  CLASSES,
} = require('./../../../constants/classes');

const Title = ({ isSingle, text, type }) => (
  <h1 className={cx(styles[`type${type}`], CLASSES.HEADLINE, {
    [styles[`type${type}_isSingle`]]: isSingle,
  })}
  >
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
