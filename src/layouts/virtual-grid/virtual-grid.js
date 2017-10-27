import React from 'react';

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

  render () {
    return (<div className={styles.virtualGrid}>
      <div className={(this.state.visible ? styles.grid : '')}>
        { Array.from({ length: 12, }, (v, i) => <span key={i.toString()} />) }
      </div>
    </div>);
  }
}

export default VirtualGrid;
