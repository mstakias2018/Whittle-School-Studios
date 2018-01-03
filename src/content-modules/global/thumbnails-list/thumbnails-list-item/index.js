import React from 'react';

import Markdown from '../../../../components/global/markdown';
import WithVideo from '../../../../hocs/with-video';

import { PROP_TYPES } from '../../../../constants/custom-property-types';

import styles from './thumbnails-list-item.module.css';

const propTypes = {
  ...PROP_TYPES.THUMBNAIL_LIST_ITEM,
  ...PROP_TYPES.WITH_VIDEO,
};

const ThumbnailsListItem = ({
  assetWithVideo,
  description,
  title,
  videoDuration,
}) => (
  <li className={styles.listItem}>
    <div className={styles.text}>
      <h3 className={styles.title}>{title}</h3>
      {videoDuration && <div className={styles.videoLength}>{videoDuration}</div>}
      <Markdown
        className={styles.description}
        source={description.markdown}
      />
    </div>
    <div className={styles.asset}>
      {assetWithVideo}
    </div>
  </li>
);

ThumbnailsListItem.propTypes = propTypes;

export default WithVideo(ThumbnailsListItem, { isSmall: true });
