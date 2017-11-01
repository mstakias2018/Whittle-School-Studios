import React from 'react';
import cx from 'classnames';

import styles from './virtual-grid.module.css';

class VirtualGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onTop: false,
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
      if (e.keyCode === 84) {
        this.setState({
          onTop: !this.state.onTop,
        });
      }
    });
  }

  render() {
    return (
      <div className={cx(styles.virtualGrid, {
        [styles.onTop]: this.state.onTop,
      })}
      >
        <div className={cx({
            [styles.grid]: this.state.visible,
        })}
        >
          {Array.from({ length: 12, }, (v, i) => <span key={i.toString()} />)}
        </div>
      </div>
    );
  }
}

export default VirtualGrid;
