import React from 'react';

import ThumbnailsListItem from './thumbnails-list-item';
import { PROP_SHAPES } from '../../../constants/custom-property-types';

import styles from './thumbnails-list.module.css';

const propTypes = PROP_SHAPES.THUMBNAIL_LIST;

const ThumbnailsList = ({
  title,
  imageSources,
  item1Description,
  item1ImageAlt,
  item1Title,
  item1VideoEmbedCode,
  item2Description,
  item2ImageAlt,
  item2Title,
  item2VideoEmbedCode,
  item3Description,
  item3ImageAlt,
  item3Title,
  item3VideoEmbedCode,
  item4Description,
  item4ImageAlt,
  item4Title,
  item4VideoEmbedCode,
  item5Description,
  item5ImageAlt,
  item5Title,
  item5VideoEmbedCode,
  item6Description,
  item6ImageAlt,
  item6Title,
  item6VideoEmbedCode,
}) => (
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
        {item1Title && item1Description && (imageSources[0] || item1VideoEmbedCode) &&
          <ThumbnailsListItem
            alt={item1ImageAlt}
            description={item1Description}
            imageSources={imageSources[0]}
            title={item1Title}
            videoEmbedCode={item1VideoEmbedCode}
          />
        }
        {item2Title && item2Description && (imageSources[1] || item2VideoEmbedCode) &&
          <ThumbnailsListItem
            alt={item2ImageAlt}
            description={item2Description}
            imageSources={imageSources[1]}
            title={item2Title}
            videoEmbedCode={item2VideoEmbedCode}
          />
        }
        {item3Title && item3Description && (imageSources[2] || item3VideoEmbedCode) &&
          <ThumbnailsListItem
            alt={item3ImageAlt}
            description={item3Description}
            imageSources={imageSources[2]}
            title={item3Title}
            videoEmbedCode={item3VideoEmbedCode}
          />
        }
        {item4Title && item4Description && (imageSources[3] || item4VideoEmbedCode) &&
          <ThumbnailsListItem
            alt={item4ImageAlt}
            description={item4Description}
            imageSources={imageSources[3]}
            title={item4Title}
            videoEmbedCode={item4VideoEmbedCode}
          />
        }
        {item5Title && item5Description && (imageSources[4] || item5VideoEmbedCode) &&
          <ThumbnailsListItem
            alt={item5ImageAlt}
            description={item5Description}
            imageSources={imageSources[4]}
            title={item5Title}
            videoEmbedCode={item5VideoEmbedCode}
          />
        }
        {item6Title && item6Description && (imageSources[5] || item6VideoEmbedCode) &&
          <ThumbnailsListItem
            alt={item6ImageAlt}
            description={item6Description}
            imageSources={imageSources[5]}
            title={item6Title}
            videoEmbedCode={item6VideoEmbedCode}
          />
        }
      </ul>
    </div>
  </div>
);

ThumbnailsList.propTypes = propTypes;

export default ThumbnailsList;
