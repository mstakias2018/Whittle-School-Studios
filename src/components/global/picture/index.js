import React from 'react';

import { PROP_TYPES } from '../../../constants/custom-property-types';
import { IMAGE_MQ } from '../../../constants/images';

const Picture = ({
  alt,
  sourcesBySize,
}) => {
  const breakpoints = Object.keys(sourcesBySize);
  const largestBreakpoint = breakpoints[breakpoints.length - 1];

  return (
    <picture>
      {breakpoints.map(breakpoint =>
          sourcesBySize[breakpoint].srcSet && (
            <source
              key={breakpoint}
              media={IMAGE_MQ[breakpoint]}
              srcSet={sourcesBySize[breakpoint].srcSet}
            />
          ))}
      <img
        alt={alt}
        src={sourcesBySize[largestBreakpoint].src}
      />
    </picture>
  );
};

Picture.propTypes = PROP_TYPES.IMAGE_PROP_TYPES;

export default Picture;
