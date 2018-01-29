import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { CONTENTFUL_SPACE } from '../../constants/contentful';
import { ENV } from '../../constants/env';
import {
  CONTENT_PAGE_RULES,
  HEADER_RULES,
  HOMEPAGE_RULES,
  PAGE_TYPE_RULES,
  SUBCATEGORY_RULES,
} from '../../constants/validations';

import styles from './validator.module.css';

const propTypes = {
  data: PropTypes.shape({
    allContentfulContentPage: PropTypes.object.isRequired,
    allContentfulHeader: PropTypes.object.isRequired,
    allContentfulHomePage: PropTypes.object.isRequired,
  }).isRequired,
};

const sortByValidity = (r1, r2) => (r1.isValid > r2.isValid ? 1 : -1);
const doSort = (p1, p2) => {
  if (p1.isValid && !p2.isValid) return 1;
  if (p2.isValid && p2.isValid) return -1;
  return p1.slug > p2.slug ? 1 : -1;
};

class Validator extends Component {
  state = {
    shouldHidePassing: true,
    validatedHeaders: [],
    validatedHome: [],
    validatedPages: [],
  };

  componentDidMount() {
    this.setState({
      validatedHeaders: this.getValidatedHeaders(),
      validatedHome: this.getValidatedHome(),
      validatedPages: this.getValidatedPages(),
    });
  }

  getValidatedHeaders = () => {
    const {
      data: {
        allContentfulHeader: { headers }
      }
    } = this.props;

    return this.getValidated(headers, [HEADER_RULES]);
  };

  getValidatedHome = () => {
    const {
      data: {
        allContentfulHomePage: { homepage }
      }
    } = this.props;

    return this.getValidated(homepage, [HOMEPAGE_RULES]);
  };

  getRuleValidations = (ruleGroups, shouldHidePassing, node) => {
    let isAllValid = true;
    const ruleValidations = ruleGroups
      .reduce((ruleGroupList, ruleGroup) => {
        if (!ruleGroup) return ruleGroupList;

        const { title, list } = ruleGroup;
        let isRuleGroupValid = true;

        const validatedList = list
          .reduce((ruleList, { text, validator }) => {
            const isRuleValid = validator(node);
            isRuleGroupValid = isRuleGroupValid && isRuleValid;
            isAllValid = isAllValid && isRuleValid;

            if (!isRuleValid || !shouldHidePassing) {
              ruleList.push({
                isValid: isRuleValid,
                text,
              });
            }

            return ruleList;
          }, [])
          .sort(sortByValidity);

        if (!isRuleGroupValid || !shouldHidePassing) {
          ruleGroupList.push({
            isValid: isRuleGroupValid,
            list: validatedList,
            title,
          });
        }

        return ruleGroupList;
      }, [])
      .sort(sortByValidity);

    return {
      isAllValid,
      ruleValidations,
    };
  };

  getValidated = (items, ruleGroups) => {
    const { shouldHidePassing } = this.state;

    return items
      .reduce((pageRuleList, { node }) => {
        if (node.dummycontentindex) return pageRuleList;

        const {
          isAllValid,
          ruleValidations,
        } = this.getRuleValidations(ruleGroups, shouldHidePassing, node);

        if (!isAllValid || !shouldHidePassing) {
          pageRuleList.push({
            isValid: isAllValid,
            locale: node.locale,
            ruleValidations,
          });
        }

        return pageRuleList;
      }, [])
      .sort(doSort);
  };

  getValidatedPages = () => {
    const {
      data: {
        allContentfulContentPage: { contentPages }
      }
    } = this.props;

    const { shouldHidePassing } = this.state;

    return contentPages.reduce((pageRuleList, { node }) => {
      if (node.dummycontentindex) return pageRuleList;

      const ruleGroups = [CONTENT_PAGE_RULES, PAGE_TYPE_RULES[node.pageType]];
      if (node.parentCategory) ruleGroups.push(SUBCATEGORY_RULES);

      const {
        isAllValid,
        ruleValidations,
      } = this.getRuleValidations(ruleGroups, shouldHidePassing, node);

      if (!isAllValid || !shouldHidePassing) {
        pageRuleList.push({
          isValid: isAllValid,
          locale: node.locale,
          ruleValidations,
          slug: node.slug,
        });
      }

      return pageRuleList;
    }, [])
      .sort(doSort);
  };

  toggleShouldHidePassing = () => {
    this.setState({
      shouldHidePassing: !this.state.shouldHidePassing,
    }, () => this.setState({
      validatedHeaders: this.getValidatedHeaders(),
      validatedHome: this.getValidatedHome(),
      validatedPages: this.getValidatedPages(),
    }));
  };

  renderValidations = validations => (
    <ul className={styles.pageList}>
      {validations.map(({ locale, ruleValidations, slug }, i) => (
        <li
          className={styles.page}
          key={i}
        >
          <div className={styles.pageHeader}>
            <strong>{slug}</strong>
            <span>{locale}</span>
          </div>
          <ul className={styles.ruleGroupList}>
            {ruleValidations.map(({ title, list }, j) => (
              <li key={j}>
                <div className={styles.ruleGroupTitle}>{title}</div>
                <ul className={styles.ruleList}>
                  {list.map(({ text, isValid }, k) => (
                    <li key={k}>
                      <strong
                        className={cx(styles.ruleStatus, {
                          [styles.ruleStatus_isValid]: isValid,
                        })}
                      >
                        {isValid ? '✓' : '✗'}
                      </strong>
                      {text}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );

  render() {
    const {
      shouldHidePassing,
      validatedPages,
      validatedHeaders,
      validatedHome,
    } = this.state;

    return (
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Content validator
          </h1>
          <ul className={styles.headerData}>
            <li className={styles.headerDataItem}>
              <strong>Last build: </strong>
              {process.env.GATSBY_BUILD_TIME}
            </li>
            <li className={styles.headerDataItem}>
              <strong>Last commit: </strong>
              {process.env.GATSBY_COMMIT_REF && process.env.GATSBY_COMMIT_REF.slice(0, 7)}
            </li>
            <li className={styles.headerDataItem}>
              <strong>Contentful space: </strong>
              {CONTENTFUL_SPACE[process.env.GATSBY_ENV][process.env.GATSBY_REGION].spaceName}
            </li>
            <li className={styles.headerDataItem}>
              <strong>Using Preview API: </strong>
              {process.env.GATSBY_ENV === ENV.STAGING ? 'Yes' : 'No'}
            </li>
            <li className={styles.headerDataItem}>
              <button
                className={styles.headerButton}
                onClick={this.toggleShouldHidePassing}
              >
                {shouldHidePassing ? 'Show' : 'Hide'} passing validations
              </button>
            </li>
          </ul>
        </header>
        <div className={styles.section}>
          <h1>Header</h1>
          {this.renderValidations(validatedHeaders)}
        </div>
        <div className={styles.section}>
          <h1>Homepage</h1>
          {this.renderValidations(validatedHome)}
        </div>
        <div className={styles.section}>
          <h1>Content pages</h1>
          {this.renderValidations(validatedPages)}
        </div>
      </div>
    );
  }
}

Validator.propTypes = propTypes;

export default Validator;

export const pageQuery = graphql`
  query validatorQuery {
    allContentfulHomePage {
      homepage: edges {
        node {
          dummycontentindex {
            id
          }
          headline
          hero {
            videos {
              alt1: video1ImageVideoAlt
              video1: video1VideoEmbedCode {
                videoEmbedCode: video1VideoEmbedCode
              }
              video1cover: video1AssetCoverPhoto {
                id
              }
              alt2: video2ImageVideoAlt
              video2: video2VideoEmbedCode {
                videoEmbedCode: video2VideoEmbedCode
              }
              video2cover: video2AssetCoverPhoto {
                id
              }
              alt3: video3ImageVideoAlt
              video3: video3VideoEmbedCode {
                videoEmbedCode: video3VideoEmbedCode
              }
              video3cover: video3AssetCoverPhoto {
                id
              }
            }
          }
          locale: node_locale
          campusModule {
            video: videoEmbedCode {
              videoEmbedCode
            }
            imageAlt
            image {
              id
            }
            campusSectionTitle: sectionTitle
          }
          teamsModule {
            heroName
            heroTitle
            heroImage {
              id
            }
            heroDescription {
              id
            }
            heroLinkDestination {
              id
            }
            sections {
              title1: person1Title
              image1: person1Image {
                id
              }
              title2: person2Title
              image2: person2Image {
                id
              }
              title3: person3Title
              image3: person3Image {
                id
              }
              title4: person4Title
              image4: person4Image {
                id
              }
              title5: person5Title
              image5: person5Image {
                id
              }
              title6: person6Title
              image6: person6Image {
                id
              }
            }
            teamsSectionTitle: sectionTitle
          }
          eventList {
            eventListSectionTitle: sectionTitle
            date1: event1Date
            date2: event2Date
            date3: event3Date
            date4: event4Date
            date5: event5Date
            title1: event1TitleLine1
            title2: event2TitleLine1
            title3: event3TitleLine1
            title4: event4TitleLine1
            title5: event5TitleLine1
            location1: event1Location
            location2: event2Location
            location3: event3Location
            location4: event4Location
            location5: event5Location
            description1: event1Description {
              text: event1Description
            }
            description2: event2Description {
              text: event2Description
            }
            description3: event3Description {
              text: event3Description
            }
            description4: event4Description {
              text: event4Description
            }
            description5: event5Description {
              text: event5Description
            }
            link1: event1RegistrationLink
            link2: event2RegistrationLink
            link3: event3RegistrationLink
            link4: event4RegistrationLink
            link5: event5RegistrationLink
          }
        }
      }
    }
    allContentfulHeader {
      headers: edges {
        node {
          id
          type: __typename
          contentPages {
            id
            pageType
          }
          locale: node_locale
        }
      }
    }
    allContentfulContentPage {
      contentPages: edges {
        node {
          dummycontentindex {
            id
          }
          header {
            id: contentful_id
          }
          locale: node_locale
          modules {
            type: __typename
            ... on ContentfulInlineVideo {
              asset {
                id
              }
              alt
              video: videoEmbedCode {
                id
                videoEmbedCode
              }
            }
            ... on ContentfulVideos {
              alt1: video1ImageVideoAlt
              video1: video1VideoEmbedCode {
                videoEmbedCode: video1VideoEmbedCode
              }
              video1cover: video1AssetCoverPhoto {
                id
              }
              alt2: video2ImageVideoAlt
              video2: video2VideoEmbedCode {
                videoEmbedCode: video2VideoEmbedCode
              }
              video2cover: video2AssetCoverPhoto {
                id
              }
              alt3: video3ImageVideoAlt
              video3: video3VideoEmbedCode {
                videoEmbedCode: video3VideoEmbedCode
              }
              video3cover: video3AssetCoverPhoto {
                id
              }
            }
            ... on ContentfulInlineImage {
              asset {
                id
              }
              shape
            }
            ... on ContentfulBodyText {
              content {
                text: content
              }
            }
            ... on ContentfulThumbnailList {
              title
              video1: item1VideoEmbedCode {
                videoEmbedCode: item1VideoEmbedCode
              }
              alt1: item1ImageAlt
              asset1: item1Asset {
                id
              }
              video2: item2VideoEmbedCode {
                videoEmbedCode: item2VideoEmbedCode
              }
              alt2: item2ImageAlt
              asset2: item2Asset {
                id
              }
              video3: item3VideoEmbedCode {
                videoEmbedCode: item3VideoEmbedCode
              }
              alt3: item3ImageAlt
              asset3: item3Asset {
                id
              }
              video4: item4VideoEmbedCode {
                videoEmbedCode: item4VideoEmbedCode
              }
              alt4: item4ImageAlt
              asset4: item4Asset {
                id
              }
              video5: item5VideoEmbedCode {
                videoEmbedCode: item5VideoEmbedCode
              }
              alt5: item5ImageAlt
              asset5: item5Asset {
                id
              }
              video6: item6VideoEmbedCode {
                videoEmbedCode: item6VideoEmbedCode
              }
              alt6: item6ImageAlt
              asset6: item6Asset {
                id
              }
            }
            ... on ContentfulTeams {
              heroName
              heroTitle
              heroImage {
                id
              }
              heroDescription {
                id
              }
              heroLinkDestination {
                id
              }
              sections {
                title1: person1Title
                image1: person1Image {
                  id
                }
                title2: person2Title
                image2: person2Image {
                  id
                }
                title3: person3Title
                image3: person3Image {
                  id
                }
                title4: person4Title
                image4: person4Image {
                  id
                }
                title5: person5Title
                image5: person5Image {
                  id
                }
                title6: person6Title
                image6: person6Image {
                  id
                }
              }
              teamsSectionTitle: sectionTitle
            }
          }
          mainImage {
           id
          }
          mainImageAlt
          overviewNavTitle
          navTitle
          navDescription
          pageType
          parentCategory: contentpage {
            id: contentful_id
          }
          subcategories {
            id: contentful_id
            pageType
          }
          subhead
          slug
        }
      }
    }
  }
`;
