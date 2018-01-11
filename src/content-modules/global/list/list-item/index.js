import React from 'react';

import Markdown from '../../../../components/global/markdown';

import { PROP_TYPES } from '../../../../constants/custom-property-types';

import styles from './list-item.module.css';

const propTypes = PROP_TYPES.LIST_ITEM;

const ListItem = ({
  description,
  title,
}) => (
  <li className={styles.listItem}>
    <span>
      <span className={styles.title}>{title}</span>
      <Markdown
        className={styles.description}
        source={description}
      />
    </span>
  </li>
);

ListItem.propTypes = propTypes;

export default ListItem;
