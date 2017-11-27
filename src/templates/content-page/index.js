import React from 'react';
import * as PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import ContentModules from '../../content-modules';
import PageHead from '../../components/global/page-head';
import Share from '../../components/global/share';

import { PROP_TYPES } from '../../constants/custom-property-types';
import { IMAGE_TYPE } from '../../constants/images';
import { SOCIAL_NETWORK } from '../../constants/social-networks';

import styles from './content-page.module.css';

const propTypes = {
  // TODO FIX data prop type
  data: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  pathContext: PropTypes.shape({
    imageDataByType: PROP_TYPES.IMAGE_DATA_BY_TYPE.isRequired,
  }).isRequired,
};

const ContentPageTemplate = ({ data: { contentfulContentPage }, pathContext: { imageDataByType } }) => {
  const {
    headline,
    mainImageAlt,
    modules,
    pageType,
    subhead,
  } = contentfulContentPage;

  return (
    <div className={styles.wrapper}>
      <Helmet title={headline} />
      <PageHead
        headline={headline}
        imageAlt={mainImageAlt}
        imageSources={imageDataByType[IMAGE_TYPE.MAIN]}
        subhead={subhead}
        type={pageType}
      />
      { modules &&
        <ContentModules
          imageDataByType={imageDataByType}
          modules={modules}
        />
      }
      <Share networksToShow={[SOCIAL_NETWORK.FACEBOOK, SOCIAL_NETWORK.TWITTER]} />
    </div>
  );
};

ContentPageTemplate.propTypes = propTypes;

export default ContentPageTemplate;

export const pageQuery = graphql`
  query contentPageQuery($id: String!) {
    contentfulContentPage(id: { eq: $id }) {
      headline
      subhead
      mainImageAlt
      pageType
      modules {
        __typename
        ... on ContentfulBodyText {
          content {
            markdown: content
          }
        }
        ... on ContentfulInlineImage {
          shape
          alt
          caption
        }
        ... on ContentfulSlideshowCarousel {
          slides {
            shape
            alt
            caption
          }
        }
      }
    }
  }
`;
