import React, {PropTypes} from 'react';

const propTypes = {
  description: PropTypes.string.isRequired,
  video: PropTypes.object
};

export default function InlineVideo({description, video}) {
  return (
    <div>
      <h2>Video</h2>
      <video controls src={video.file.url} width="400" />
      <p>{description}</p>
    </div>
  );
}

InlineVideo.propTypes = propTypes;
