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
import ThumbnailsList from './global/thumbnails-list';

import { PROP_SHAPES } from '../constants/custom-property-types';
import { CONTENT_MODULE } from '../constants/contentful';

const MODULE_MAP = {
  [CONTENT_MODULE.BODY_TEXT]: BodyText,
  [CONTENT_MODULE.CAROUSEL]: Carousel,
  [CONTENT_MODULE.INLINE_IMAGE]: InlineImage,
  [CONTENT_MODULE.LIST]: List,
  [CONTENT_MODULE.OPENAPPLY_IFRAME]: OpenApplyIFrame,
  [CONTENT_MODULE.POST]: Post,
  [CONTENT_MODULE.QUOTE]: Quote,
  [CONTENT_MODULE.SECTION_TITLE]: SectionTitle,
  [CONTENT_MODULE.THREE_UP_BREAKER]: ThreeUpBreaker,
  [CONTENT_MODULE.THUMBNAIL_LIST]: ThumbnailsList,
};

const propTypes = {
  moduleImageData: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.arrayOf(PROP_SHAPES.IMAGE_SOURCES),
    PROP_SHAPES.IMAGE_SOURCES,
  ])),
  modules: PROP_SHAPES.MODULES,
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
