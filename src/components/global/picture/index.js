import React from 'react';
import PropTypes from 'prop-types';

import { PROP_TYPES } from '../../../constants/customPropertyTypes';
import { MEDIA_QUERY } from '../../../constants/breakpoints';

const propTypes = {
  alt: PropTypes.string.isRequired,
  image: PROP_TYPES.IMAGE_SET.isRequired,
};

const Picture = ({
  alt,
  image,
}) => (
  <picture>
    { image.small &&
      <source
        media={MEDIA_QUERY.SMALL}
        srcSet={image.small}
      />
    }
    { image.medium &&
      <source
        media={MEDIA_QUERY.MEDIUM}
        srcSet={image.medium}
      />
    }
    <img
      alt={alt}
      src={image.large}
    />
  </picture>
);

Picture.propTypes = propTypes;

export default Picture;
