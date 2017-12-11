import React from 'react';
import * as PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import ContentModules from '../../content-modules';
import PageHead from '../../components/structural/page-head';
import Share from '../../components/structural/share';
import PageWrapper from '../../components/structural/page-wrapper';

import { PROP_TYPES } from '../../constants/custom-property-types';
import { IMAGE_TYPE } from '../../constants/images';
import {
  transformLocalizedSlugData,
  transformSubnavProps,
} from '../../utils/nav';

import styles from './content-page.module.css';

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

  return (
    <PageWrapper
      localizedSlugList={transformLocalizedSlugData(localizedSlugData)}
      subNavProps={subNavProps}
    >
      <div className={styles.wrapper}>
        <Helmet>
          <title>{seoMetaTitle || navTitle || headline}</title>
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
      overviewNavTitle
      categorySlug: slug
      subcategories {
        description: navDescription
        id
        slug
        title: navTitle
      }

      # SUBNAV PROPERTIES - NESTED ARTICLE
      parentCategory: contentpage {
        categoryTitle: navTitle
        categoryDescription: navDescription
        overviewNavTitle
        categorySlug: slug
        subcategories {
          description: navDescription
          id
          slug
          title: navTitle
        }
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
      }
    }
  }
`;
