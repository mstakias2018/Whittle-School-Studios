import React from 'react';

import ListItem from './list-item';

import { PROP_TYPES } from '../../../constants/custom-property-types';
import styles from './list.module.css';

const List = ({
  description1, description2, description3, description4, description5, description6,
  description7, description8, title1, title2, title3, title4, title5, title6, title7, title8,
}) => (
  <div className={styles.wrapper}>
    <div className={styles.list}>
      <ul className={styles.listItems}>
        {description1 && title1 &&
          <ListItem
            description={description1.markdown}
            title={title1}
          />
        }
        {description2 && title2 &&
        <ListItem
          description={description2.markdown}
          title={title2}
        />
        }
        {description3 && title3 &&
        <ListItem
          description={description3.markdown}
          title={title3}
        />
        }
        {description4 && title4 &&
        <ListItem
          description={description4.markdown}
          title={title4}
        />
        }
        {description5 && title5 &&
        <ListItem
          description={description5.markdown}
          title={title5}
        />
        }
        {description6 && title6 &&
        <ListItem
          description={description6.markdown}
          title={title6}
        />
        }
        {description7 && title7 &&
        <ListItem
          description={description7.markdown}
          title={title7}
        />
        }
        {description8 && title8 &&
        <ListItem
          description={description8.markdown}
          title={title8}
        />
        }
      </ul>
    </div>
  </div>
);

List.propTypes = PROP_TYPES.LIST;

export default List;
