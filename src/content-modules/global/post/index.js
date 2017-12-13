import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Date from '../../../components/global/date';
import Markdown from '../../../components/global/markdown';

import styles from './post.module.css';

const propTypes = {
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  shortText: PropTypes.string.isRequired,
  source: PropTypes.string,
  title: PropTypes.string.isRequired,
};

const Post = ({
  date,
  link,
  shortText,
  source,
  title,
}, { translations }) => (
  <div className={styles.postWrapper}>
    <div className={styles.post}>
      <div className={styles.dateContainer}>
        <Date date={date} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {source &&
          <span className={styles.source}>{source}</span>
        }
        <Markdown
          className={styles.text}
          source={shortText}
        />
        <Link
          className={styles.readMore}
          to={link}
        >
          {translations.post.continueReading}
        </Link>
      </div>
    </div>
  </div>
);

Post.propTypes = propTypes;
Post.contextTypes = { translations: PropTypes.object.isRequired };

export default Post;
