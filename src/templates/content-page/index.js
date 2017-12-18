import React from 'react';
import * as PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import ContentModules from '../../content-modules';
import PageHead from '../../components/structural/page-head';
import Share from '../../components/structural/share';
import PageWrapper from '../../components/structural/page-wrapper';

import { PROP_TYPES } from '../../constants/custom-property-types';
import { IMAGE_TYPE } from '../../constants/images';
import { CONTENT_MODULE } from '../../constants/contentful';
import {
  transformLocalizedSlugData,
  transformSubnavProps,
} from '../../utils/nav';
import { removeMarkdown } from '../../utils/strings';

const propTypes = {
  // TODO FIX data prop type
  data: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  pathContext: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageDataByType: PROP_TYPES.IMAGE_DATA_BY_TYPE.isRequired,
  }).isRequired,
};

const ContentPageTemplate = ({
  data: { localizedSlugData, currentPageData },
  pathContext: { id, imageDataByType },
}) => {
  const {
    hasShareButtons,
    headline,
    mainImageAlt,
    modules,
    overviewNavTitle,
    navDescription,
    navTitle,
    pageType,
    parentCategory,
    categorySlug,
    seoMetaDescription,
    seoMetaTitle,
    subcategories,
    subhead,
  } = currentPageData;

  let subNavProps;

  if (parentCategory) {
    subNavProps = transformSubnavProps({
      ...parentCategory[0],
      currentPageId: id,
      currentPageType: pageType,
    });
  } else if (subcategories) {
    subNavProps = transformSubnavProps({
      categoryDescription: navDescription,
      categorySlug,
      categoryTitle: navTitle,
      currentPageId: id,
      currentPageType: pageType,
      overviewNavTitle,
      subcategories,
    });
  }

  const metaDescription = (seoMetaDescription && seoMetaDescription.content) ||
    navDescription ||
    subhead;

  const shouldDisableFab = modules && modules.some(({ __typename: type }) =>
    type === CONTENT_MODULE.OPENAPPLY_IFRAME);

  return (
    <PageWrapper
      localizedSlugList={transformLocalizedSlugData(localizedSlugData)}
      shouldDisableFab={shouldDisableFab}
      subNavProps={subNavProps}
    >
      <div>
        <Helmet>
          <title>{seoMetaTitle || navTitle || removeMarkdown(headline)}</title>
          <meta
            content={metaDescription}
            name="description"
          />
        </Helmet>
        <PageHead
          headline={headline}
          imageAlt={mainImageAlt}
          imageSources={imageDataByType[IMAGE_TYPE.MAIN]}
          subhead={subhead}
          type={pageType}
        />
        {modules &&
          <ContentModules
            moduleImageData={imageDataByType[IMAGE_TYPE.MODULE]}
            modules={modules}
          />
        }
        {hasShareButtons && <Share />}
      </div>
    </PageWrapper>
  );
};

ContentPageTemplate.propTypes = propTypes;

export default ContentPageTemplate;

export const pageQuery = graphql`
  fragment commonNavProps on ContentfulContentPage {
    overviewNavTitle
    categorySlug: slug
    subcategories {
      description: navDescription
      id
      slug
      title: navTitle
    }
  }

  query contentPageQuery($id: String!, $idRegex: String!) {
    localizedSlugData: allContentfulContentPage(
      filter: { id: { regex: $idRegex } }
    ) {
      edges {
        node {
          locale: node_locale
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
    }

    currentPageData: contentfulContentPage(id: { eq: $id }) {
      hasShareButtons
      headline
      mainImageAlt
      navTitle
      navDescription
      pageType
      seoMetaDescription {
        content: seoMetaDescription
      }
      seoMetaTitle
      subhead

      # SUBNAV PROPERTIES - CATEGORY
      ...commonNavProps

      # SUBNAV PROPERTIES - NESTED ARTICLE
      parentCategory: contentpage {
        categoryTitle: navTitle
        categoryDescription: navDescription
        ...commonNavProps
      }

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
        ... on ContentfulOpenApplyIFrame {
          description {
            markdown: description
          }
          scriptUrl
        }
        ... on ContentfulQuote {
          quoteType
          content {
            content
          }
          source
        }
        ... on ContentfulSlideshowCarousel {
          slides {
            shape
            alt
            caption
          }
        }
        ... on ContentfulThreeUpBreaker {
          content1 {
            markdown: content1
          }
          content2 {
            markdown: content2
          }
          content3 {
            markdown: content3
          }
          title1
          title2
          title3
        }
        ... on ContentfulList {
          description1 {
            markdown: description1
          }
          description2 {
            markdown: description2
          }
          description3 {
            markdown: description3
          }
          description4 {
            markdown: description4
          }
          description5 {
            markdown: description5
          }
          description6 {
            markdown: description6
          }
          description7 {
            markdown: description7
          }
          description8 {
            markdown: description8
          }
          title1
          title2
          title3
          title4
          title5
          title6
          title7
          title8
        }
        ... on ContentfulSectionTitle {
          number
          title
        }
        ... on ContentfulPost {
          date
          title
          source
          description {
            markdown: description
          }
          linkInternal {
            slug
            parentCategory: contentpage {
              slug
            }
          }
          linkExternal
        }
      }
    }
  }
`;
