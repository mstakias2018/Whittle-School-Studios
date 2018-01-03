import React, { Component } from 'react';

import ThumbnailsListItem from './thumbnails-list-item';
import { PROP_SHAPES } from '../../../constants/custom-property-types';

import styles from './thumbnails-list.module.css';

const propTypes = PROP_SHAPES.THUMBNAIL_LIST;

const THUMBNAIL_RANGE = [1, 2, 3, 4, 5, 6];

class ThumbnailsList extends Component {
  renderThumbnailItem = (n) => {
    const [alt, description, title, videoDuration, videoEmbedCode] = [
      this.props[`item${n}ImageAlt`],
      this.props[`item${n}Description`],
      this.props[`item${n}Title`],
      this.props[`item${n}VideoDuration`],
      this.props[`item${n}VideoEmbedCode`],
    ];
    const imageSources = this.props.imageSources[n];

    return (title && description && (imageSources || videoDuration)) ? (
      <ThumbnailsListItem
        alt={alt}
        description={description}
        imageSources={imageSources}
        key={n}
        title={title}
        videoDuration={videoDuration}
        videoEmbedCode={videoEmbedCode}
      />
    ) : null;
  }

  render() {
    const { title } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <h2
              className={styles.title}
            >
              {title}
            </h2>
          </div>
          <ul className={styles.list}>
            {THUMBNAIL_RANGE.map(this.renderThumbnailItem)}
          </ul>
        </div>
      </div>
    );
  }
}

ThumbnailsList.propTypes = propTypes;

export default ThumbnailsList;
