import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { adaptSourcesBySize } from '../../../utils/images';
import { PROP_TYPES } from '../../../constants/custom-property-types';
import { PAGE_TYPE } from '../../../constants/settings';
import { IMAGE_SUBTYPE } from '../../../constants/images';
import IMAGE_CONFIG from '../../../constants/image-config';

const OG_PAGE_TYPE_MAP = {
  [PAGE_TYPE.ARTICLE]: 'article',
  [PAGE_TYPE.CATEGORY]: 'article',
  [PAGE_TYPE.HOME]: 'website',
};

const IMAGE_CONFIG_MAP = {
  [PAGE_TYPE.ARTICLE]: IMAGE_SUBTYPE.MAIN_ARTICLE,
  [PAGE_TYPE.CATEGORY]: IMAGE_SUBTYPE.MAIN_CATEGORY,
  [PAGE_TYPE.HOME]: IMAGE_SUBTYPE.HERO,
};

const MetaTags = ({
  description,
  imageSources,
  keywords,
  title,
  type,
}, {
  currentUrl,
  rootUrl,
}) => {
  let pageImage;
  let pageImageBp;

  if (imageSources) {
    const { largestBreakpoint, largestSrc } = adaptSourcesBySize(imageSources);
    pageImage = largestSrc;
    if (pageImage.match(/^\/[^/]/)) {
      pageImage = `${rootUrl}${pageImage.slice(1)}`;
    }
    pageImageBp = largestBreakpoint;
  }

  const pageImageDimensions = pageImage ? IMAGE_CONFIG[IMAGE_CONFIG_MAP[type]][pageImageBp] : {};

  return (
    <Helmet>
      <title>{title}</title>
      <meta
        content={OG_PAGE_TYPE_MAP[type]}
        property="og:type"
      />
      <meta
        content={currentUrl}
        property="og:url"
      />
      <meta
        content={title}
        property="og:title"
      />
      {pageImage &&
        [
          <meta
            content={pageImage}
            key="og:image"
            property="og:image"
          />,
          <meta
            content={pageImageDimensions.width}
            key="og:image:width"
            property="og:image:width"
          />,
          <meta
            content={pageImageDimensions.height}
            key="og:image:height"
            property="og:image:height"
          />,
        ]
      }
      <meta
        content={description}
        property="og:description"
      />
      <meta
        content={description}
        name="description"
      />
      {keywords && (
        <meta
          content={keywords}
          name="keywords"
        />
      )}
    </Helmet>
  );
};

MetaTags.propTypes = PROP_TYPES.META_TAG_PROPS;
MetaTags.contextTypes = {
  currentUrl: PropTypes.string.isRequired,
  rootUrl: PropTypes.string.isRequired,
};

export default MetaTags;
