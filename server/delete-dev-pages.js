module.exports = ({ page, boundActionCreators }) => {
  const { deletePage } = boundActionCreators;
  if (/^\/dev\//.test(page.path)) deletePage(page);
};
