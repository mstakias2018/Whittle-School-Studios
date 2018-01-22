// Adapted from https://github.com/stiang/remove-markdown
exports.removeMarkdown = string => (string ?
  string
    // Remove inline links
    .replace(/\[(.*?)\][[(].*?[\])]/g, '$1')
    // Remove emphasis (repeat the line to remove double emphasis)
    .replace(/([*_]{1,3})(\S.*?\S{0,1})\1/g, '$2')
    .replace(/([*_]{1,3})(\S.*?\S{0,1})\1/g, '$2') : '');

exports.parseInsetContent = (markdown) => {
  const IMAGE_REGEX = /!\[([^\]]*)]\(([^)]*)\)/g;
  const images = [];
  const videoEmbedCodes = [];

  const filteredMarkdown = markdown.replace(IMAGE_REGEX, (match, alt, src) => {
    const srcRegex = /^(\/\/images\.contentful\.com\/[^\s]*)? ?("[^"]*")? ?(.*)?/;
    const [, image, caption, videoEmbedCode] = src.match(srcRegex);

    const newSrc = [
      image || 'VIDEO-NO-COVER-IMAGE',
      ...caption ? [caption] : [],
    ];

    const altTag = alt.split('--');

    if (image) {
      images.push({
        alt: altTag[0] || null,
        hasVideo: !!videoEmbedCode,
        url: image,
      });
    }

    let videoIndicator = '';
    if (videoEmbedCode) {
      videoIndicator = `--VIDEO-${videoEmbedCodes.length}`;
      videoEmbedCodes.push(videoEmbedCode);
    }

    return `![${alt}${videoIndicator}](${newSrc.join(' ')})`;
  });
  return {
    filteredMarkdown,
    images,
    videoEmbedCodes,
  };
};
