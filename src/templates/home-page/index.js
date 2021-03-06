import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

import PageHead from '../../components/structural/page-head';
import PIC from '../../content-modules/global/pic';
import PageWrapper from '../../components/structural/page-wrapper';
import HomeCampuses from '../../components/structural/home-campuses';
import Hero from '../../content-modules/global/hero';
import HomeTeams from '../../components/structural/home-teams';

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
  }),
};
class HomePageTemplate extends Component {
  getChildContext() {
    return {
      isHomePage: true,
    };
  }

  render() {
    const {
      data: { homePageData },
      pathContext,
    } = this.props;

    const {
      campusModule,
      headline,
      hero,
      eventList,
      seoMetaDescription,
      seoMetaKeywords,
      seoMetaTitle,
      teamsModule,
      downloadBook,
    } = homePageData;

    const metaDescription = (seoMetaDescription && seoMetaDescription.content) || (hero && hero.title);
    const metaKeywords = seoMetaKeywords && seoMetaKeywords.content;
    const metaTitle = seoMetaTitle || removeMarkdown(headline) || (hero && hero.title);
    const heroImages = pathContext.imageDataByType && pathContext.imageDataByType[STRUCTURAL_COMPONENTS.HOME_HERO];
    const mainHeroImage = heroImages && heroImages.image;
    const downloadBookImages = pathContext.imageDataByType &&
      pathContext.imageDataByType[STRUCTURAL_COMPONENTS.HOME_BOOK_DOWLOADS];
    const downloadBookImage = downloadBookImages && downloadBookImages.image;

    const metaProps = {
      description: metaDescription,
      imageSources: mainHeroImage,
      keywords: metaKeywords,
      title: metaTitle,
      type: PAGE_TYPE.HOME,
    };

    // eventList and campusModule are required, but we check for their existence
    // to avoid breaking the site on new deploysto production

    // after these modules are filled in on US - Prod and China - Prod,
    // these checks can be removed
    return (
      <PageWrapper
        isHomePage
        metaProps={metaProps}
      >
        <PageHead
          headline={headline}
          type={PAGE_TYPE.HOME}
        />
        <Hero
          data={hero}
          downloadBook={downloadBook}
          downloadBookImage={downloadBookImage}
          eventList={eventList}
          image={mainHeroImage}
          imageSources={heroImages && [
            heroImages.video1AssetCoverPhoto,
            heroImages.video2AssetCoverPhoto,
            heroImages.video3AssetCoverPhoto,
          ]}
        />
        {eventList && (
          <PIC
            cityName={eventList.cityName}
            description={eventList.introText.markdown}
            eventList={eventList}
            sectionTitle={eventList.sectionTitle}
          />
        )}
        {campusModule && (
          <HomeCampuses
            {...campusModule}
            architectImage={pathContext.imageDataByType &&
              pathContext.imageDataByType[STRUCTURAL_COMPONENTS.HOME_CAMPUSES].architectImage}
            imageSources={pathContext.imageDataByType &&
              pathContext.imageDataByType[STRUCTURAL_COMPONENTS.HOME_CAMPUSES].image}
          />
        )}
        {teamsModule && (
          <HomeTeams
            data={teamsModule}
            pathContext={pathContext}
          />
        )}
      </PageWrapper>
    );
  }
}

HomePageTemplate.propTypes = propTypes;
HomePageTemplate.childContextTypes = {
  isHomePage: PropTypes.bool.isRequired,
};

export default HomePageTemplate;

export const pageQuery = graphql`
  query homePageQuery($id: String!, $locale: String!) {
    homePageData: contentfulHomePage(
      contentful_id: { eq: $id },
      node_locale: { eq: $locale }
    ) {
      headline
      seoMetaDescription {
        content: seoMetaDescription
      }
      seoMetaKeywords {
        content: seoMetaKeywords
      }
      seoMetaTitle
      hero {
        eventListTitle
        imageAlt
        title
        description {
          markdown: description
        }
        link {
          linkTitle
          linkDestinationInternal {
            slug
            parentCategory: contentpage {
              slug
            }
          }
          linkDestinationExternal
        }
        countdownTitle
        countdownDate
        videos {
          title
          video1Title
          video1Link {
            linkDestinationExternal
            linkDestinationInternal {
              slug
              parentCategory: contentpage {
                slug
              }
            }
          }
          video1Description {
            markdown: video1Description
          }
          video1ImageVideoAlt
          video1VideoEmbedCode {
            embedCode: video1VideoEmbedCode
          }
          video2Title
          video2Link {
            linkDestinationExternal
            linkDestinationInternal {
              slug
              parentCategory: contentpage {
                slug
              }
            }
          }
          video2Description {
            markdown: video2Description
          }
          video2ImageVideoAlt
          video2VideoEmbedCode {
            embedCode: video2VideoEmbedCode
          }
          video3Title
          video3Link {
            linkDestinationExternal
            linkDestinationInternal {
              slug
              parentCategory: contentpage {
                slug
              }
            }
          }
          video3Description {
            markdown: video3Description
          }
          video3ImageVideoAlt
          video3VideoEmbedCode {
            embedCode: video3VideoEmbedCode
          }
        }
      }
      eventList {
        sectionTitle
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
        alt: imageAlt
        architectImageAlt
        architectName
        architectQuote {
          markdown: architectQuote
        }
        descriptionText: description {
          markdown: description
        }
        linkTarget: linkDestination {
          slug
          parentCategory: contentpage {
            slug
          }
        }
        linkText: linkTitle
        videoEmbedCode {
          embedCode: videoEmbedCode
        }
        sectionTitle
      }
      teamsModule {
        sectionTitleText: sectionTitle
        heroImageAlt
        heroName
        heroTitle
        heroDescription {
          markdown: heroDescription
        }
        heroLinkTarget: heroLinkDestination {
          slug
          parentCategory: contentpage {
            slug
          }
        }
        statistic1Number1
        statistic1Number2
        statistic1TextLineBottom
        statistic1TextLineTop
        statistic1Type
        statistic2Number1
        statistic2Number2
        statistic2TextLineBottom
        statistic2TextLineTop
        statistic2Type
        sections {
          sectionTitle
          sectionLinkDestination {
            slug
            parentCategory: contentpage {
              slug
            }
          }
          person1ImageAlt
          person1Name
          person1Title
          person1Description {
            markdown: person1Description
          }
          person2ImageAlt
          person2Name
          person2Title
          person2Description {
            markdown: person2Description
          }
          person3ImageAlt
          person3Name
          person3Title
          person3Description {
            markdown: person3Description
          }
          person4ImageAlt
          person4Name
          person4Title
          person4Description {
            markdown: person4Description
          }
          person5ImageAlt
          person5Name
          person5Title
          person5Description {
            markdown: person5Description
          }
          person6ImageAlt
          person6Name
          person6Title
          person6Description {
            markdown: person6Description
          }
        }
      }
      downloadBook {
        title
        url
      }
    }
  }
`;
