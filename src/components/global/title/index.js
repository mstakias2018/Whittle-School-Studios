import React from 'react';
import PropTypes from 'prop-types';

import Markdown from '../../../components/global/markdown';
import { PAGE_TYPES } from '../../../constants/settings';
import styles from './title.module.css';

const propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(PAGE_TYPES).isRequired,
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
