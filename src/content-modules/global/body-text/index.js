import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Markdown from '../../../components/global/markdown';
import styles from './body-text.module.css';
import { PROP_TYPES } from '../../../constants/custom-property-types';

const propTypes = {
  content: PROP_TYPES.MARKDOWN,
  isFirstModule: PropTypes.bool,
};

const BodyText = ({ content, isFirstModule: hasDropCap }) => (
  <div className={cx(styles.componentWrapper, { hasDropCap })}>
    <div className={styles.content}>
      <Markdown
        className={styles.componentContent}
        source={content.markdown}
      />
    </div>
  </div>
);

BodyText.propTypes = propTypes;

BodyText.defaultProps = {
  isFirstModule: false,
};

export default BodyText;
