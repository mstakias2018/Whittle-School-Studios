import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Markdown, { ALLOWED_TYPES } from '../../../components/global/markdown';
import styles from './body-text.module.css';
import { PROP_SHAPES, PROP_TYPES } from '../../../constants/custom-property-types';
import { CLASSES } from '../../../constants/classes';
import { LANGUAGE } from '../../../constants/regions';
import { parseInsetContent } from '../../../utils/strings';

const propTypes = {
  content: PROP_SHAPES.MARKDOWN.isRequired, // eslint-disable-line react/no-unused-prop-types
  imageSources: PropTypes.arrayOf(PROP_SHAPES.IMAGE_SOURCES).isRequired,
  isFirstModule: PropTypes.bool,
};

class BodyText extends Component {
  getChildContext() {
    return {
      imageSources: this.props.imageSources,
      videoEmbedCodes: this.state.parsedContent.videoEmbedCodes,
    };
  }

  componentWillMount() {
    this.setParsedContent();
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
        const textWrapperElement = document.createElement('span');
        const firstTextEl = text[0].textContent;

        textWrapperElement.innerHTML = `<span>${firstTextEl.slice(0, 1)}</span>${firstTextEl.slice(1)}`;
        textWrapperElement.setAttribute('aria-label', firstTextEl);

        firstParagraph[0].replaceChild(textWrapperElement, text[0]);
      }
    }
  }

  setParsedContent({ content: { markdown } } = this.props) {
    this.setState({
      parsedContent: parseInsetContent(markdown),
    });
  }

  componentWilReceiveProps(props) {
    this.setParsedContent(props);
  }

  render() {
    const { isFirstModule: hasDropCap } = this.props;
    return (
      <div className={cx(styles.componentWrapper, { hasDropCap }, CLASSES.BODY_TEXT)}>
        <div
          className={styles.content}
          ref={(el) => { this.markdownWrapper = el; }}
        >
          <Markdown
            allowedTypes={ALLOWED_TYPES.WITH_IMAGE}
            className={styles.componentContent}
            source={this.state.parsedContent.filteredMarkdown}
          />
        </div>
      </div>
    );
  }
}

BodyText.propTypes = propTypes;
BodyText.childContextTypes = PROP_TYPES.MARKDOWN_IMAGE_CONTEXT;
BodyText.contextTypes = {
  language: PROP_SHAPES.LANGUAGE.isRequired,
};

export default BodyText;
