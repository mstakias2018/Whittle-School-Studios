import React from 'react';
import PropTypes from 'prop-types';

import styles from './pull-quote.module.css';

const propTypes = {
  content: PropTypes.shape({
    content: PropTypes.string,
  }).isRequired,
  source: PropTypes.string,
};

const PullQuote = ({ content, source }) => (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <div className={styles.quoteBlock}>
        <blockquote className={styles.quote}>
          {content.content}
          {source && <span className={styles.lastLineSeparator} />}
          {source &&
            <span className={styles.author}>
              {source}
            </span>
          }
        </blockquote>
      </div>
    </div>
  </div>
);

PullQuote.propTypes = propTypes;

export default PullQuote;
