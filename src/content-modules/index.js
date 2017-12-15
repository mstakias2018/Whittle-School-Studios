import React from 'react';
import PropTypes from 'prop-types';

import BodyText from './global/body-text';
import Carousel from './global/carousel';
import Post from './global/post';
import InlineImage from './global/inline-image';
import List from './global/list';
import OpenApplyIFrame from './global/openapply-iframe';
import Quote from './global/quote';
import SectionTitle from './global/section-title';
import ThreeUpBreaker from './global/three-up-breaker';

import { PROP_TYPES } from '../constants/custom-property-types';

const MODULE_MAP = {
  ContentfulBodyText: BodyText,
  ContentfulInlineImage: InlineImage,
  ContentfulList: List,
  ContentfulOpenApplyIFrame: OpenApplyIFrame,
  ContentfulPost: Post,
  ContentfulQuote: Quote,
  ContentfulSectionTitle: SectionTitle,
  ContentfulSlideshowCarousel: Carousel,
  ContentfulThreeUpBreaker: ThreeUpBreaker,
};

const propTypes = {
  moduleImageData: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.arrayOf(PROP_TYPES.IMAGE_SOURCES),
    PROP_TYPES.IMAGE_SOURCES,
  ])),
  modules: PROP_TYPES.MODULES,
};

const ContentModules = ({ moduleImageData, modules }) =>
  modules.map(({ __typename: type, ...props }, i) => {
    const Component = MODULE_MAP[type];
    return Component && (
      <Component
        imageSources={moduleImageData && moduleImageData[i]}
        isFirstModule={i === 0}
        key={i}
        {...props}
      />
    );
  });

ContentModules.propTypes = propTypes;

export default ContentModules;
