import React from 'react';

import BodyText from './global/body-text';
import Carousel from './global/carousel';
import InlineImage from './global/inline-image';
import OpenApplyIFrame from './global/openapply-iframe';
import PullQuote from './global/pull-quote';

import { PROP_TYPES } from '../constants/custom-property-types';
import { MODULE_IMAGE_TYPE_MAP } from '../constants/images';

const MODULE_MAP = {
  ContentfulBodyText: BodyText,
  ContentfulInlineImage: InlineImage,
  ContentfulOpenApplyIFrame: OpenApplyIFrame,
  ContentfulQuote: PullQuote,
  ContentfulSlideshowCarousel: Carousel,
};

const propTypes = {
  imageDataByType: PROP_TYPES.IMAGE_DATA_BY_TYPE,
  modules: PROP_TYPES.MODULES,
};

const ContentModules = ({ imageDataByType, modules }) =>
  modules.map(({ __typename: type, ...props }, i) => {
    const Component = MODULE_MAP[type];
    const imageType = MODULE_IMAGE_TYPE_MAP[type];
    const imageSources = imageType && imageDataByType[imageType][i];
    return Component && (
      <Component
        imageSources={imageSources}
        isFirstModule={i === 0}
        key={i}
        {...props}
      />
    );
  });

ContentModules.propTypes = propTypes;

export default ContentModules;
