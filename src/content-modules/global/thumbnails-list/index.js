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
  item2Description,
  item2ImageAlt,
  item2Title,
  item3Description,
  item3ImageAlt,
  item3Title,
  item4Description,
  item4ImageAlt,
  item4Title,
  item5Description,
  item5ImageAlt,
  item5Title,
  item6Description,
  item6ImageAlt,
  item6Title,
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
        {item1Title && item1Description && imageSources[0] &&
          <ThumbnailsListItem
            description={item1Description}
            imageAlt={item1ImageAlt}
            imageSources={imageSources[0]}
            title={item1Title}
          />
        }
        {item2Title && item2Description && imageSources[1] &&
          <ThumbnailsListItem
            description={item2Description}
            imageAlt={item2ImageAlt}
            imageSources={imageSources[1]}
            title={item2Title}
          />
        }
        {item3Title && item3Description && imageSources[2] &&
          <ThumbnailsListItem
            description={item3Description}
            imageAlt={item3ImageAlt}
            imageSources={imageSources[2]}
            title={item3Title}
          />
        }
        {item4Title && item4Description && imageSources[3] &&
          <ThumbnailsListItem
            description={item4Description}
            imageAlt={item4ImageAlt}
            imageSources={imageSources[3]}
            title={item4Title}
          />
        }
        {item5Title && item5Description && imageSources[4] &&
          <ThumbnailsListItem
            description={item5Description}
            imageAlt={item5ImageAlt}
            imageSources={imageSources[4]}
            title={item5Title}
          />
        }
        {item6Title && item6Description && imageSources[5] &&
          <ThumbnailsListItem
            description={item6Description}
            imageAlt={item6ImageAlt}
            imageSources={imageSources[5]}
            title={item6Title}
          />
        }
      </ul>
    </div>
  </div>
);

ThumbnailsList.propTypes = propTypes;

export default ThumbnailsList;
