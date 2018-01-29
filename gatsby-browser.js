
exports.onRouteUpdate = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }
};

exports.shouldUpdateScroll = () => false;
