import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './list-item';

import styles from './list.module.css';

const propTypes = {
  description1: PropTypes.string.isRequired,
  description2: PropTypes.string.isRequired,
  description3: PropTypes.string.isRequired,
  description4: PropTypes.string,
  description5: PropTypes.string,
  description6: PropTypes.string,
  description7: PropTypes.string,
  description8: PropTypes.string,
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  title4: PropTypes.string,
  title5: PropTypes.string,
  title6: PropTypes.string,
  title7: PropTypes.string,
  title8: PropTypes.string,
};

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

List.propTypes = propTypes;

export default List;
