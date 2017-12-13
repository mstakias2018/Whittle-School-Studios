// Adapted from https://github.com/stiang/remove-markdown
exports.removeMarkdown = (string = '') => string
  // Remove inline links
  .replace(/\[(.*?)\][[(].*?[\])]/g, '$1')
  // Remove emphasis (repeat the line to remove double emphasis)
  .replace(/([*_]{1,3})(\S.*?\S{0,1})\1/g, '$2')
  .replace(/([*_]{1,3})(\S.*?\S{0,1})\1/g, '$2');
