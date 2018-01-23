// Adapted from https://github.com/stiang/remove-markdown
exports.removeMarkdown = string => (string ?
  string
    // Remove inline links
    .replace(/\[(.*?)\][[(].*?[\])]/g, '$1')
    // Remove emphasis (repeat the line to remove double emphasis)
    .replace(/([*_]{1,3})(\S.*?\S{0,1})\1/g, '$2')
    .replace(/([*_]{1,3})(\S.*?\S{0,1})\1/g, '$2') : '');

const isVimeo = str => !!(str && str.match('player.vimeo.com'));

exports.isVimeo = isVimeo;

exports.parseVideoEmbedCode = (videoEmbedCode) => {
  const src = videoEmbedCode
    && videoEmbedCode.embedCode
    && videoEmbedCode.embedCode.match(/src=[“"]([^“"]*)[”"]/)[1];

  return {
    isVimeo: isVimeo(src),
    src,
  };
};

exports.parseInsetContent = (markdown) => {
  const IMAGE_REGEX = /!\[([^\]]*)]\(([^)]*)\)/g;
  const assets = [];
  let videoCount = 0;

  const filteredMarkdown = markdown.replace(IMAGE_REGEX, (match, alt, src) => {
    const srcRegex = /^(\/\/images\.contentful\.com\/[^\s]*)? ?("[^"]*")? ?(.*)?/;
    const [, image, caption, videoEmbedCode] = src.match(srcRegex);

    const newSrc = [
      // use a string placeholder if needed so ReactMarkdown still recognizes image tag
      image || 'VIDEO-NO-COVER-IMAGE',
      ...caption ? [caption] : [],
    ];

    const [altTag] = alt.split('--');

    const asset = { alt: altTag };

    if (image) {
      asset.imageUrl = image;
    }

    let videoIndicator = '';
    if (videoEmbedCode) {
      videoIndicator = `--VIDEO-${videoCount}`;
      videoCount += 1;
      asset.videoEmbedCode = videoEmbedCode;
    }

    assets.push(asset);

    return `![${alt}${videoIndicator}](${newSrc.join(' ')})`;
  });
  return {
    assets,
    filteredMarkdown,
  };
};
