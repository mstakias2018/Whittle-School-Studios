import React from 'react';


import { PROP_TYPES } from '../../../../constants/custom-property-types';

import styles from './thumbnails-list-item.module.css';

const propTypes = PROP_TYPES.THUMBNAILS_LIST_ITEM;

const ThumbnailsListItem = ({
  asset,
  description,
  title,
}) => (
  <li className={styles.listItem}>
    <div className={styles.text}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.videoLength}>5:15</div>
      <div className={styles.description}>{description}</div>
    </div>
    <div className={styles.asset}>
      <img
        alt={asset.alt}
        src={asset.image}
      />
    </div>
  </li>
);

ThumbnailsListItem.propTypes = propTypes;

export default ThumbnailsListItem;
