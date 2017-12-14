import React from 'react';

import ThumbnailsListItem from './thumbnails-list-item';
import { PROP_TYPES } from '../../../constants/custom-property-types';

import styles from './thumbnails-list.module.css';

const propTypes = PROP_TYPES.THUMBNAILS_LIST;

const ThumbnailsList = ({
  title,
  item1Asset,
  item1Description,
  item1Title,
  item2Asset,
  item2Description,
  item2Title,
  item3Asset,
  item3Description,
  item3Title,
  item4Asset,
  item4Description,
  item4Title,
  item5Asset,
  item5Description,
  item5Title,
  item6Asset,
  item6Description,
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
        {item1Asset && item1Description && item1Asset &&
          <ThumbnailsListItem
            asset={item1Asset}
            description={item1Description}
            title={item1Title}
          />
        }
        {item2Asset && item2Description && item2Asset &&
          <ThumbnailsListItem
            asset={item2Asset}
            description={item2Description}
            title={item2Title}
          />
        }
        {item3Asset && item3Description && item3Asset &&
          <ThumbnailsListItem
            asset={item3Asset}
            description={item3Description}
            title={item3Title}
          />
        }
        {item4Asset && item4Description && item4Asset &&
          <ThumbnailsListItem
            asset={item4Asset}
            description={item4Description}
            title={item4Title}
          />
        }
        {item5Asset && item5Description && item5Asset &&
          <ThumbnailsListItem
            asset={item5Asset}
            description={item5Description}
            title={item5Title}
          />
        }
        {item6Asset && item6Description && item6Asset &&
          <ThumbnailsListItem
            asset={item6Asset}
            description={item6Description}
            title={item6Title}
          />
        }
      </ul>
    </div>
  </div>
);

ThumbnailsList.propTypes = propTypes;

export default ThumbnailsList;
