import React from 'react';
import PropTypes from 'prop-types';

import { PROP_TYPES } from '../../../../constants/custom-property-types';
import { getIdFromImgUrl } from '../../../../utils/images';
import InsetImage from './inset-image';

const propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
};

const MarkdownImage = ({
  alt,
  src,
  title: caption,
}, {
  imageSources,
  insetAssets,
}) => {
  const id = getIdFromImgUrl(src);
  const sourcesBySize = imageSources.find(n => n.id === id);
  const [altTag, ...indicators] = alt.split('--');
  const videoMatch = alt.match(/--VIDEO-(\d)/);
  const videoNumber = videoMatch && videoMatch[1];

  return (
    <InsetImage
      alt={altTag}
      caption={caption}
      imageSources={sourcesBySize}
      indicators={indicators}
      videoEmbedCode={videoNumber && { embedCode: insetAssets[videoNumber].videoEmbedCode }}
    />
  );
};

MarkdownImage.propTypes = propTypes;
MarkdownImage.contextTypes = PROP_TYPES.MARKDOWN_IMAGE_CONTEXT;

export default MarkdownImage;
