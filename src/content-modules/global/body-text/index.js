import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Markdown, { ALLOWED_TYPES } from '../../../components/global/markdown';
import styles from './body-text.module.css';
import { PROP_TYPES } from '../../../constants/custom-property-types';

const propTypes = {
  content: PROP_TYPES.MARKDOWN,
  imageSources: PropTypes.arrayOf(PROP_TYPES.IMAGE_SOURCES),
  isFirstModule: PropTypes.bool,
};

class BodyText extends Component {
  getChildContext() {
    return { imageSources: this.props.imageSources };
  }

  render() {
    const { content, isFirstModule: hasDropCap } = this.props;

    return (
      <div className={cx(styles.componentWrapper, { hasDropCap })}>
        <div className={styles.content}>
          <Markdown
            allowedTypes={ALLOWED_TYPES.WITH_IMAGE}
            className={styles.componentContent}
            source={content.markdown}
          />
        </div>
      </div>
    );
  }
}

BodyText.propTypes = propTypes;
BodyText.childContextTypes = {
  imageSources: PropTypes.arrayOf(PROP_TYPES.IMAGE_SOURCES),
};

export default BodyText;
