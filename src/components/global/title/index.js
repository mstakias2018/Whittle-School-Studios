import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';

import { PROP_TYPES } from '../../../constants/customPropertyTypes';

import styles from './title.module.css';

const propTypes = {
  text: PropTypes.string.isRequired,
  type: PROP_TYPES.PAGE_TYPES.isRequired,
};

const Title = ({ text, type }) => (
  <Markdown
    className={styles[`type${type}`]}
    containerTagName="h1"
    isTitle
    source={text}
  />
);

Title.propTypes = propTypes;

export default Title;
