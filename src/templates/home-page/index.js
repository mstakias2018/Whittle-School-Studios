import React from 'react';
import * as PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import PageHead from '../../components/structural/page-head';
import PageWrapper from '../../components/structural/page-wrapper';
import { PAGE_TYPE } from '../../constants/settings';

const propTypes = {
  // TODO FIX data prop type
  data: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};

const ContentPageTemplate = ({
  data: { homePageData },
}) => {
  const { headline } = homePageData;

  return (
    <PageWrapper>
      <Helmet title={headline} />
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
    homePageData: contentfulHomePage(id: { eq: $id }) {
      headline
    }
  }
`;
