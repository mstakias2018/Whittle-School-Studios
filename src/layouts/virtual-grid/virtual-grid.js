import React from 'react';
import cx from 'classnames';

import styles from './virtual-grid.module.css';

class VirtualGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  componentDidMount() {
    window.addEventListener('keyup', (e) => {
      if (e.keyCode === 71) {
        this.setState({
          visible: !this.state.visible,
        });
      }
    });
  }

  render() {
    return (
      <div className={cx(this.state.visible ? styles.virtualGridEnabled : styles.virtualGrid)}>
        <div className={cx(this.state.visible ? styles.gridSm : styles.grid)}>
          { Array.from({ length: 4, }, (v, i) => <span key={i} />) }
        </div>
        <div className={(this.state.visible ? styles.gridMd : styles.grid)}>
          { Array.from({ length: 8, }, (v, i) => <span key={i} />) }
        </div>
        <div className={(this.state.visible ? styles.gridLg : styles.grid)}>
          { Array.from({ length: 12, }, (v, i) => <span key={i} />) }
        </div>
      </div>
    );
  }
}

export default VirtualGrid;
