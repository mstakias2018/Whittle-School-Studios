import React from 'react';

import ListItem from './list-item';

import { PROP_TYPES } from '../../../constants/custom-property-types';

import styles from './list.module.css';

const propTypes = {
  data: PROP_TYPES.LIST.isRequired,
};

const List = ({ data }) => (
  <div className={styles.wrapper}>
    <div className={styles.list}>
      <ul className={styles.listItems}>
        {data.map((item, index) => (
          <ListItem
            description={item.description}
            key={index.toString()}
            title={item.title}
          />
        ))}
      </ul>
    </div>
  </div>
);

List.propTypes = propTypes;

export default List;
