import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Markdown, { ALLOWED_TYPES } from '../../../components/global/markdown';
import styles from './body-text.module.css';
import { PROP_SHAPES } from '../../../constants/custom-property-types';
import { CLASSES } from '../../../constants/classes';
import { LANGUAGE } from '../../../constants/regions';

const propTypes = {
  content: PROP_SHAPES.MARKDOWN.isRequired,
  imageSources: PropTypes.arrayOf(PROP_SHAPES.IMAGE_SOURCES).isRequired,
  isFirstModule: PropTypes.bool,
};

class BodyText extends Component {
  getChildContext() {
    return { imageSources: this.props.imageSources };
  }

  componentDidMount = () => {
    const { isFirstModule: hasDropCap } = this.props;
    const { language } = this.context;

    if (hasDropCap && language !== LANGUAGE.CHINESE) {
      const firstParagraph = this.markdownWrapper.querySelectorAll('p:first-of-type');
      const paragraphElements = firstParagraph[0].childNodes;
      const text = Object.keys(paragraphElements).filter(key => paragraphElements[key].nodeName !== 'SPAN')
        .map(key => paragraphElements[key]);
      if (text && text[0]) {
        const firstTextEl = text[0].textContent;
        text[0].textContent = `${firstTextEl.slice(0, 1)} ${firstTextEl.slice(1)}`;
      }
    }
  }

  render() {
    const { content, isFirstModule: hasDropCap } = this.props;
    return (
      <div className={cx(styles.componentWrapper, { hasDropCap }, CLASSES.BODY_TEXT)}>
        <div
          className={styles.content}
          ref={(el) => { this.markdownWrapper = el; }}
        >
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
  imageSources: PropTypes.arrayOf(PROP_SHAPES.IMAGE_SOURCES),
};
BodyText.contextTypes = {
  language: PROP_SHAPES.LANGUAGE.isRequired,
};

export default BodyText;
