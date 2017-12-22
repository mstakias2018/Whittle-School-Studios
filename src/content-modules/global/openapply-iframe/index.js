import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import cx from 'classnames';

import Markdown from '../../../components/global/markdown';
import styles from './openapply-iframe.module.css';
import { PROP_SHAPES } from '../../../constants/custom-property-types';

import loadingSpinner from '../../../assets/images/loading-spinner.svg';

const propTypes = {
  description: PROP_SHAPES.MARKDOWN.isRequired,
  scriptUrl: PropTypes.string.isRequired,
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

  render() {
    const { description, scriptUrl } = this.props;

    return (
      <div className={styles.wrapper}>
        <Helmet
          script={
            this.state.hasMounted && [{
              src: scriptUrl,
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
              },
            )}
            ref={(el) => { this.wrapper = el; }}
          >
            <Markdown
              className={styles.description}
              source={description.markdown}
            />
            <div className={styles.loadingPlaceholder}>
              <img
                alt=""
                className={styles.loadingSpinner}
                src={loadingSpinner}
              />
            </div>
            <span id="openapplyScript" />
          </div>
        </div>
      </div>
    );
  }
}

OpenApplyIFrame.propTypes = propTypes;

export default OpenApplyIFrame;
