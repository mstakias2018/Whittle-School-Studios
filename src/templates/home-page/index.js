import React from 'react';
import * as PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import PageHead from '../../components/structural/page-head';
import PIC from '../../content-modules/global/pic';
import PageWrapper from '../../components/structural/page-wrapper';
import HomeCampuses from '../../components/structural/home-campuses';

import { PAGE_TYPE } from '../../constants/settings';
import { PROP_SHAPES } from '../../constants/custom-property-types';
import { STRUCTURAL_COMPONENTS } from '../../constants/contentful';
import { removeMarkdown } from '../../utils/strings';

const propTypes = {
  // TODO FIX data prop type
  data: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  pathContext: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageDataByType: PROP_SHAPES.IMAGE_DATA_BY_TYPE.isRequired,
  }).isRequired,
};

const ContentPageTemplate = ({
  data: { homePageData },
  pathContext,
}) => {
  const {
    campusModule,
    headline,
    eventList,
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
      <PIC
        cityName={eventList.cityName}
        description={eventList.introText.markdown}
        eventList={eventList}
      />
      <HomeCampuses
        {...campusModule}
        architectImage={pathContext.imageDataByType &&
          pathContext.imageDataByType[STRUCTURAL_COMPONENTS.HOME_CAMPUSES].architectImage}
        imageSources={pathContext.imageDataByType &&
          pathContext.imageDataByType[STRUCTURAL_COMPONENTS.HOME_CAMPUSES].image}
        sectionTitleText="Campuses."
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
      eventList {
        cityName
        introText {
          markdown: introText
        }
        event1Date
        event1Description {
          markdown: event1Description
        }
        event1Location
        event1RegistrationLink
        event1TitleLine1
        event1TitleLine2
        event2Date
        event2Description {
          markdown: event2Description
        }
        event2Location
        event2RegistrationLink
        event2TitleLine1
        event2TitleLine2
        event3Date
        event3Description {
          markdown: event3Description
        }
        event3Location
        event3RegistrationLink
        event3TitleLine1
        event3TitleLine2
        event4Date
        event4Description {
          markdown: event4Description
        }
        event4Location
        event4RegistrationLink
        event4TitleLine1
        event4TitleLine2
        event5Date
        event5Description {
          markdown: event5Description
        }
        event5Location
        event5RegistrationLink
        event5TitleLine1
        event5TitleLine2
      }
      campusModule {
        architectName
        architectQuote {
          markdown: architectQuote
        }
        descriptionText: description {
          markdown: description
        }
        imageAlt
        linkTarget: linkDestination {
          slug
          parentCategory: contentpage {
            slug
          }
        }
        linkText: linkTitle
      }
    }
  }
`;
