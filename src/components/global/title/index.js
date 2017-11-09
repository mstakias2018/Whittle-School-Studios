import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';

import { PAGE_TYPES } from '../../../constants/settings';
import styles from './title.module.css';

const propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(PAGE_TYPES).isRequired,
};

const Title = ({ text, type }) => (
  <h1 className={styles[`type${type}`]}>
    <Markdown source={text} />
  </h1>
);

Title.propTypes = propTypes;

export default Title;
