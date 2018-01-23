import React, { Component } from 'react';

import ListItem from './list-item';

import { PROP_TYPES } from '../../../constants/custom-property-types';
import styles from './list.module.css';

class List extends Component {
  createItem = n => (
    <ListItem
      description={this.props[`description${n}`].markdown}
      key={n - 1}
      title={this.props[`title${n}`]}
    />
  );

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.list}>
          <ul // eslint-disable-line jsx-a11y/no-redundant-roles
            className={styles.listItems}
            role="list"
          >
            {[...Array(8)].fill(0).map((_, index) => (this.props[`description${index + 1}`] &&
              this.props[`title${index + 1}`]) && this.createItem(index + 1))}
          </ul>
        </div>
      </div>);
  }
}

List.propTypes = PROP_TYPES.LIST;

export default List;
