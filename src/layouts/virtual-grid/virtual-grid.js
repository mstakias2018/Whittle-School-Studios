import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import WithWindowListener from '../../hocs/withWindow';

import styles from './virtual-grid.module.css';

const maxGridSize = () => {
  const array = [];
  for (let i = 0; i < 12; i += 1) {
    array.push(i);
  }

  return array;
};

let orientationChanges = 0;

const propTypes = {
  orientation: PropTypes.string,
};

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.orientation !== this.props.orientation) {
      orientationChanges += 1;

      if (orientationChanges % 2 === 0) {
        this.setState({
          visible: !this.state.visible,
          onTop: !this.state.onTop,
        });
      }
    }
  }

  render() {
    return (
      <div
        className={cx(styles.virtualGrid, {
          [styles.onTop]: this.state.onTop,
        })}
      >
        <div
          className={cx({
            [styles.grid]: this.state.visible,
          })}
        >
          <div className={styles.gridContainer}>
            {maxGridSize().map((v, i) => <span key={i} />)}
          </div>
        </div>
      </div>
    );
  }
}

VirtualGrid.propTypes = propTypes;

export default WithWindowListener(VirtualGrid);
