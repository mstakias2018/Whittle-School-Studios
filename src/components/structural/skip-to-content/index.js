import React from 'react';
import PropTypes from 'prop-types';

import styles from './skip.module.css';

const propTypes = {
  handleSkipToContent: PropTypes.func.isRequired,
};

const Skip = (props, { translation }) => (
  <button
    className={styles.button}
    onClick={props.handleSkipToContent}
  >
    <div className={styles.text}>
      {translation && translation('general.skip')}
    </div>
  </button>
);

Skip.propTypes = propTypes;
Skip.contextTypes = { translation: PropTypes.func.isRequired };

export default Skip;
