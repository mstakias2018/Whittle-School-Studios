import React from 'react';

import PageWrapper from '../components/structural/page-wrapper';
import NotFound from '../components/structural/not-found';

import { IMAGE_SIZE } from '../constants/images';

import largeImage from '../test-content/images/404-large.jpg';
import mediumImage from '../test-content/images/404-medium.jpg';
import smallImage from '../test-content/images/404-small.jpg';

/* This page has not yet been integrated because The Whittle School does not
have a 404 asset ready. When it's ready to be integrated, we can add the asset
as a field in the GlobalSettings content model. */

const PAGE_NOT_FOUND = {
  imageAlt: '404',
  imageSources: {
    [IMAGE_SIZE.SMALL_MID]: {
      src: smallImage,
    },
    [IMAGE_SIZE.MEDIUM_MID]: {
      src: mediumImage,
    },
    [IMAGE_SIZE.LARGE]: {
      src: largeImage,
    },
  },
};

const NotFoundPage = () => (
  <PageWrapper>
    <NotFound {...PAGE_NOT_FOUND} />
  </PageWrapper>
);

export default NotFoundPage;
