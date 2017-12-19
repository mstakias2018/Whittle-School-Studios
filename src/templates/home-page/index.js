import React from 'react';
import * as PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import PageHead from '../../components/structural/page-head';
import PageWrapper from '../../components/structural/page-wrapper';
import { PAGE_TYPE } from '../../constants/settings';
import { removeMarkdown } from '../../utils/strings';

const propTypes = {
  // TODO FIX data prop type
  data: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};

const ContentPageTemplate = ({
  data: { homePageData },
}) => {
  const {
    headline,
    schoolIntroTitle,
    seoMetaDescription,
    seoMetaTitle,
  } = homePageData;

  const metaDescription = (seoMetaDescription && seoMetaDescription.content) ||
    (schoolIntroTitle && schoolIntroTitle.content);

  return (
    <PageWrapper>
      <Helmet>
        <title>{seoMetaTitle || removeMarkdown(headline)}</title>
        <meta
          content={metaDescription}
          name="description"
        />
      </Helmet>
      <PageHead
        headline={headline}
        type={PAGE_TYPE.HOME}
      />
    </PageWrapper>
  );
};

ContentPageTemplate.propTypes = propTypes;

export default ContentPageTemplate;

export const pageQuery = graphql`
  query homePageQuery($id: String!) {
    homePageData: contentfulHomePage(contentful_id: { eq: $id }) {
      headline
      schoolIntroTitle {
        content: schoolIntroTitle
      }
      seoMetaDescription {
        content: seoMetaDescription
      }
      seoMetaTitle
    }
  }
`;
