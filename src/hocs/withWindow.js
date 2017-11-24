import React from 'react';
import resizeManager from '../utils/resize-manager';
import { getRandomKey } from '../utils/global';

let ResizeManager = null;

function WithWindowListener(WrappedComponent) {
  class windowListener extends React.Component {
    constructor() {
      super();

      // Get Initial State
      if (typeof window === 'undefined') {
        this.state = {
          breakpoint: null,
          dimensions: {},
          key: getRandomKey(),
          orientation: null,
        };
      } else {
        ResizeManager = resizeManager();

        this.state = {
          breakpoint: ResizeManager.getCurrentBreakpoint(),
          dimensions: ResizeManager.getCurrentDimensions(),
          key: getRandomKey(),
          orientation: ResizeManager.getCurrentOrientation(),
        };
      }
    }

    componentDidMount() {
      ResizeManager.addBreakpointListeners();

      ResizeManager.subscribe(this.state.key, (breakpoint, orientation, dimensions) => {
        const newState = {};

        if (this.state.breakpoint !== breakpoint) {
          newState.breakpoint = breakpoint;
        }

        if (this.state.orientation !== orientation) {
          newState.orientation = orientation;
        }

        if (this.state.dimensions !== dimensions) {
          newState.dimensions = dimensions;
        }

        this.setState(newState);
      });
    }

    componentWillUnmount() {
      ResizeManager.unsubscribe(this.state.key);
      ResizeManager.removeBreakpointListeners();
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          breakpoint={this.state.breakpoint}
          dimensions={this.state.dimensions}
          orientation={this.state.orientation}
        />
      );
    }
  }

  return windowListener;
}

export default WithWindowListener;
