import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './body-text.module.css';

const propTypes = {
  content: PropTypes.object.isRequired,
};

const BodyText = ({ content }) => (
  <div className={cx(styles.componentWrapper, { 'hasDropCap': content.hasDropCap })}>
    <div
      className={styles.componentContent}
      dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}} // eslint-disable-line
    />
  </div>
);

BodyText.propTypes = propTypes;

export default BodyText;
