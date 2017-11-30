import React from 'react';

import { PROP_TYPES } from '../../../constants/custom-property-types';

import styles from './pull-quote.module.css';

const propTypes = PROP_TYPES.QUOTE;

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
