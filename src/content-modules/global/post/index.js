import React from 'react';
import PropTypes from 'prop-types';

import { PROP_SHAPES } from '../../../constants/custom-property-types';
import { parseLink } from '../../../utils/nav';
import Date from '../../../components/global/date';
import Markdown from '../../../components/global/markdown';
import Link from '../../../components/global/link';

import styles from './post.module.css';

const propTypes = {
  date: PropTypes.string.isRequired,
  description: PROP_SHAPES.MARKDOWN.isRequired,
  linkExternal: PropTypes.string,
  linkInternal: PROP_SHAPES.INTERNAL_LINK,
  source: PropTypes.string,
  title: PropTypes.string.isRequired,
};

const Post = ({
  date,
  linkExternal,
  linkInternal,
  description,
  source,
  title,
}, { translation }) => (
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
          source={description.markdown}
        />
        {(linkInternal || linkExternal) && (
          <Link
            className={styles.readMore}
            to={parseLink({ external: linkExternal, internal: linkInternal })}
          >
            {translation('post.continueReading')}
          </Link>
        )}
      </div>
    </div>
  </div>
);

Post.propTypes = propTypes;
Post.contextTypes = { translation: PropTypes.func.isRequired };

export default Post;
