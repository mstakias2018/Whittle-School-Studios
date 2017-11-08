import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Markdown from 'react-markdown';

import { alignment, types } from './constants';
import styles from './title.module.css';

const propTypes = {
  align: PropTypes.oneOf([
    alignment.alignCenter,
    alignment.alignLeft,
    alignment.alignRight,
  ]).isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    types.typeCategory,
    types.typeHome,
    types.typeSubCategory,
  ]).isRequired,
};

const Title = ({
  align,
  text,
  type,
}) => (
  <h1 className={cx(
    styles[align],
    styles[type],
    )}
  >
    <Markdown source={text} />
  </h1>
);

Title.propTypes = propTypes;

export default Title;
