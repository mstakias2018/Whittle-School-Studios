import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Markdown from '../../../components/global/markdown';
import styles from './openapply-iframe.module.css';
import { PROP_SHAPES } from '../../../constants/custom-property-types';

const propTypes = {
  description: PROP_SHAPES.MARKDOWN.isRequired,
  scriptUrl: PropTypes.string.isRequired,
};

class OpenApplyIFrame extends Component {
  state = {
    hasMounted: false,
  }

  componentDidMount() {
    this.setState({ hasMounted: true });
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
          <div className={styles.componentContent}>
            <Markdown
              className={styles.description}
              source={description.markdown}
            />
            <span id="openapplyScript" />
          </div>
        </div>
      </div>
    );
  }
}

OpenApplyIFrame.propTypes = propTypes;

export default OpenApplyIFrame;
