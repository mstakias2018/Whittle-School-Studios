import React from 'react';
import cx from 'classnames';

import { PROP_TYPES } from '../../../constants/custom-property-types';
import { QUOTE_TYPE } from '../../../constants/settings';

import styles from './quote.module.css';

const propTypes = PROP_TYPES.QUOTE;

const PullQuote = ({ quoteType, content, source }) => (
  <div className={cx(styles.wrapper, { [styles.wrapper_isBlockQuote]: quoteType === QUOTE_TYPE.BLOCK })}>
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
