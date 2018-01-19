import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import cx from 'classnames';

import Markdown from '../../../components/global/markdown';
import LoadingSpinner from '../../../components/structural/loading-spinner';

import styles from './openapply-iframe.module.css';
import { PROP_SHAPES } from '../../../constants/custom-property-types';
import { LANGUAGE_PATH } from '../../../constants/regions';

const propTypes = {
  description: PROP_SHAPES.MARKDOWN.isRequired,
  scriptTags: PropTypes.shape({
    scriptTags: PropTypes.string.isRequired,
  }).isRequired,
};

class OpenApplyIFrame extends Component {
  state = {
    hasMounted: false,
    iframeHeight: 0,
    isIframeLoaded: false,
  }

  componentDidMount() {
    this.setState({ hasMounted: true });
    this.observer = new MutationObserver(this.onChange);

    if (this.wrapper) {
      this.observer.observe(this.wrapper, { attributes: true, childList: true });
    }
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  onChange = (elements) => {
    elements.forEach((el) => {
      if (el.addedNodes[0] && el.addedNodes[0].nodeName.toUpperCase() === 'IFRAME') {
        this.observer.observe(el.addedNodes[0], { attributes: true });

        this.setState({
          iframeHeight: el.addedNodes[0].offsetHeight,
        });
      }

      if (el.attributeName === 'style' && el.target.nodeName.toUpperCase() === 'IFRAME') {
        if (el.target.offsetHeight !== this.state.iframeHeight) {
          this.setState({
            isIframeLoaded: true,
          });
        }
      }
    });
  }

  getUrlLang = (url) => {
    const vars = url.split('&');

    for (let i = 0; i < vars.length; i += 1) {
      const pair = vars[i].split('=');

      if (pair[0] === 'lang') {
        return pair[1].split('-')[0];
      }
    }

    return false;
  }

  getSourceUrl = () => {
    const { scriptTags: { scriptTags: scriptTagsString } } = this.props;
    const { language } = this.context;

    const regex = /<script[^>]+src='?([^"\s]+)"?\s*'><\/script>/g;

    let scriptLangUrl;
    let defaultUrl;
    let match = regex.exec(scriptTagsString);
    while (match) {
      const source = match[1];
      const scriptLanguage = this.getUrlLang(source);

      if (scriptLanguage === LANGUAGE_PATH[language]) {
        scriptLangUrl = source;
      }

      if (!scriptLanguage) {
        defaultUrl = source;
      }
      match = regex.exec(scriptTagsString);
    }

    return scriptLangUrl || defaultUrl;
  }

  render() {
    const { description } = this.props;

    return (
      <div className={styles.wrapper}>
        <Helmet
          script={
            this.state.hasMounted && [{
              src: this.getSourceUrl(),
              type: 'text/javascript',
            }]
          }
        />
        <div className={styles.componentWrapper}>
          <div
            className={cx(
              styles.componentContent,
              {
                [styles.iframe_loaded]: this.state.isIframeLoaded,
              }
            )}
            ref={(el) => { this.wrapper = el; }}
          >
            <Markdown
              className={styles.description}
              source={description.markdown}
            />
            <div className={styles.loadingPlaceholder}>
              <LoadingSpinner />
            </div>
            <span id="openapplyScript" />
          </div>
        </div>
      </div>
    );
  }
}

OpenApplyIFrame.propTypes = propTypes;
OpenApplyIFrame.contextTypes = {
  language: PROP_SHAPES.LANGUAGE.isRequired,
};

export default OpenApplyIFrame;
