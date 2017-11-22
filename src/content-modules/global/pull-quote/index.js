import React from 'react';
import PropTypes from 'prop-types';

import styles from './pull-quote.module.css';

const propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string,
};

const PullQuote = ({ quote, author }) => (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <div className={styles.quoteBlock}>
        <blockquote className={styles.quote}>
          {quote}
          { author && <span className={styles.lastLineSeparator} />}
          { author &&
            <span className={styles.author}>
              {author}
            </span>
          }
        </blockquote>
      </div>
    </div>
  </div>
);

PullQuote.propTypes = propTypes;

export default PullQuote;
