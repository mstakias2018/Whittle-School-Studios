import React from 'react';
import PropTypes from 'prop-types';

import { PROP_SHAPES } from '../../../constants/custom-property-types';
import { adaptSourcesBySize } from '../../../utils/images';
import WithWindowListener from '../../../hocs/withWindow';

const propTypes = {
  ...PROP_SHAPES.IMAGE_PROP_TYPES,
  className: PropTypes.string,
  isAriaHidden: PropTypes.bool,
};

const Picture = ({
  alt,
  className,
  dimensions,
  isAriaHidden,
  sourcesBySize,
}) => {
  const { sourceList, largestSrc } = adaptSourcesBySize(sourcesBySize);

  return (
    <picture
      className={className}
      key={dimensions && dimensions.x}
    >
      {sourceList.map(({ media, srcSet, src }) => (
        <source
          key={media}
          media={media}
          srcSet={srcSet && srcSet.length ? srcSet : src}
        />
      ))}
      <img
        alt={alt}
        aria-hidden={isAriaHidden}
        src={largestSrc}
      />
    </picture>
  );
};

Picture.propTypes = propTypes;

export default WithWindowListener(Picture);
