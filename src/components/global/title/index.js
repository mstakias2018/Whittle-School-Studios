import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Markdown from '../../../components/global/markdown';
import { PROP_TYPES } from '../../../constants/custom-property-types';

import styles from './title.module.css';

const propTypes = {
  text: PropTypes.string.isRequired,
  type: PROP_TYPES.PAGE_TYPES.isRequired,
};

const {
  CLASSES,
} = require('./../../../constants/classes');

const Title = ({ text, type }) => (
  <Markdown
    className={cx(styles[`type${type}`], CLASSES.HEADLINE)}
    containerTagName="h1"
    isTitle
    source={text}
  />
);

Title.propTypes = propTypes;

export default Title;
