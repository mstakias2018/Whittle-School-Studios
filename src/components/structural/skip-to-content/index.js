import React from 'react';
import PropTypes from 'prop-types';

import styles from './skip.module.css';

const propTypes = {
  handleSkipToContent: PropTypes.func.isRequired,
};

const Skip = (props, { translations }) => (
  <button
    className={styles.button}
    onClick={props.handleSkipToContent}
  >
    <div className={styles.text}>
      {translations.general.skip}
    </div>
  </button>
);

Skip.propTypes = propTypes;
Skip.contextTypes = { translations: PropTypes.object.isRequired };

export default Skip;
