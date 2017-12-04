import { BREAKPOINTS, ORIENTATION, VIEWPORT, BREAKPOINTS_NAME } from '../constants/breakpoints';

export default function () {
  const subs = {};
  /**
   * subs is an object of components subscribed to breakpoint mixin
   */

  const getBreakpoint = () => {
    if (window.innerWidth > BREAKPOINTS.BREAKPOINT_XLG) {
      return BREAKPOINTS_NAME.extraLarge;
    } else if (window.innerWidth > BREAKPOINTS.BREAKPOINT_LG) {
      return BREAKPOINTS_NAME.large;
    } else if (window.innerWidth > BREAKPOINTS.BREAKPOINT_MD) {
      return BREAKPOINTS_NAME.medium;
    } else if (window.innerWidth > BREAKPOINTS.BREAKPOINT_SM) {
      return BREAKPOINTS_NAME.small;
    }

    return false;
  };

  const getOrientation = () => {
    if (window.matchMedia(VIEWPORT['--landscape']).matches) {
      return ORIENTATION.landscape;
    } else if (window.matchMedia(VIEWPORT['--portrait']).matches) {
      return ORIENTATION.portrait;
    }

    return false;
  };

  const windowInfo = {
    breakpoint: getBreakpoint(),
    dimensions: {
      x: window.innerWidth,
      y: window.innerHeight,
    },
  };

  let ticking = false;

  const setBreakpoint = () => {
    windowInfo.breakpoint = getBreakpoint();
  };

  const setDimensions = () => {
    windowInfo.dimensions = {
      x: window.innerWidth,
      y: window.innerHeight,
    };
  };

  const setOrientation = () => {
    windowInfo.orientation = getOrientation();
  };

  const publish = (breakpoint, orientation, dimensions) => {
    Object.keys(subs).forEach(key => subs[key](breakpoint, orientation, dimensions));
  };

  const onResize = () => {
    setDimensions();
    setBreakpoint();
    setOrientation();
    publish(
      windowInfo.breakpoint,
      windowInfo.orientation,
      windowInfo.dimensions,
    );

    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(onResize);
      ticking = true;
    }
  };

  const addBreakpointListeners = () => {
    window.addEventListener('resize', requestTick);
  };

  const getCurrentBreakpoint = () => getBreakpoint();

  const getCurrentDimensions = () => windowInfo.dimensions;

  const getCurrentOrientation = () => getOrientation();

  const removeBreakpointListeners = () => {
    window.removeEventListener('resize', requestTick);
  };

  const subscribe = (key, fn) => {
    subs[key] = fn;
  };

  const unsubscribe = (key) => {
    delete subs[key];
  };

  return {
    addBreakpointListeners,
    getCurrentBreakpoint,
    getCurrentDimensions,
    getCurrentOrientation,
    onResize,
    publish,
    removeBreakpointListeners,
    requestTick,
    setBreakpoint,
    setDimensions,
    setOrientation,
    subscribe,
    unsubscribe,
  };
}
