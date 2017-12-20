import React from 'react';

import Markdown from '../../../../components/global/markdown';
import Picture from '../../../../components/global/picture';

import { PROP_TYPES } from '../../../../constants/custom-property-types';

import styles from './thumbnails-list-item.module.css';

const propTypes = PROP_TYPES.THUMBNAIL_LIST_ITEM;

const ThumbnailsListItem = ({
  description,
  imageAlt,
  imageSources,
  title,
}) => (
  <li className={styles.listItem}>
    <div className={styles.text}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.videoLength}>5:15</div>
      <Markdown
        className={styles.description}
        source={description.markdown}
      />
    </div>
    <div className={styles.asset}>
      <Picture
        alt={imageAlt}
        sourcesBySize={imageSources}
      />
    </div>
  </li>
);

ThumbnailsListItem.propTypes = propTypes;

export default ThumbnailsListItem;
