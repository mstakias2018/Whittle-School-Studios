import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

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
import HomeTeams from '../components/structural/home-teams';
import Videos from '../content-modules/global/videos';

import { PROP_SHAPES } from '../constants/custom-property-types';
import { CONTENT_MODULE } from '../constants/contentful';

import './content-modules.module.css';

const MODULE_MAP = {
  [CONTENT_MODULE.BODY_TEXT]: BodyText,
  [CONTENT_MODULE.CAROUSEL]: Carousel,
  [CONTENT_MODULE.INLINE_IMAGE]: InlineImage,
  [CONTENT_MODULE.INLINE_VIDEO]: InlineImage,
  [CONTENT_MODULE.LIST]: List,
  [CONTENT_MODULE.OPENAPPLY_IFRAME]: OpenApplyIFrame,
  [CONTENT_MODULE.POST]: Post,
  [CONTENT_MODULE.QUOTE]: Quote,
  [CONTENT_MODULE.SECTION_TITLE]: SectionTitle,
  [CONTENT_MODULE.THREE_UP_BREAKER]: ThreeUpBreaker,
  [CONTENT_MODULE.THUMBNAIL_LIST]: ThumbnailsList,
  [CONTENT_MODULE.TEAMS]: HomeTeams,
  [CONTENT_MODULE.VIDEOS]: Videos,
};

const propTypes = {
  moduleImageData: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.arrayOf(PROP_SHAPES.IMAGE_SOURCES),
    PROP_SHAPES.IMAGE_SOURCES,
  ])),
  modules: PROP_SHAPES.MODULES,
};

const ContentModules = ({ moduleImageData, modules }) => {
  const filteredModules = modules.reduce((acc, { __typename: type, ...props }) => {
    const Component = MODULE_MAP[type];

    if (Component) {
      acc.push({
        Component,
        type,
        ...props,
      });
    }

    return acc;
  }, []);

  const content = filteredModules.map(({ Component, type, ...props }, i) => {
    const isFirstModule = i === 0;
    let inside;

    if (type !== CONTENT_MODULE.TEAMS) {
      inside = (
        <Component
          imageSources={moduleImageData && moduleImageData[i]}
          isFirstModule={isFirstModule}
          isOnContentPage
          {...props}
        />
      );
    } else {
      inside = (
        <HomeTeams
          data={props}
          isOnContentPage
          pathContext={moduleImageData && moduleImageData[i]}
        />
      );
    }

    return (
      <div
        className={cx('module', `module_${type}`)}
        key={i}
      >
        {inside}
      </div>
    );
  });

  // Extra div helps with `:first-child`-type CSS
  return (
    <div>{content}</div>
  );
};

ContentModules.propTypes = propTypes;

export default ContentModules;
