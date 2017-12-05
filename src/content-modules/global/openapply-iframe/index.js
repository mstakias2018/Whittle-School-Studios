import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Markdown from '../../../components/global/markdown';
import styles from './openapply-iframe.module.css';
import { PROP_TYPES } from '../../../constants/custom-property-types';

const propTypes = {
  description: PROP_TYPES.MARKDOWN,
  scriptUrl: PropTypes.string.isRequired,
};

const OpenApplyIFrame = ({ description, scriptUrl }) => (
  <div className={styles.wrapper}>
    <Helmet
      script={[{
        src: scriptUrl,
        type: 'text/javascript',
      }]}
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

OpenApplyIFrame.propTypes = propTypes;

export default OpenApplyIFrame;
