import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import HomeSectionTitle from '../home-section-title';

import TeamsHero from './hero';
import TeamsSection from './section';

import styles from './home-teams.module.css';

import { HOME_SECTION_TITLE_COLOR, HOME_SECTION_TITLE_POSITION } from '../../../constants/settings';

import { STRUCTURAL_COMPONENTS } from '../../../constants/contentful';

import { PROP_SHAPES } from '../../../constants/custom-property-types';

const propTypes = {
  data: PROP_SHAPES.TEAMS.isRequired,
  isOnContentPage: PropTypes.bool,
  pathContext: PropTypes.any, // eslint-disable-line react/forbid-prop-types
};

class HomeTeams extends Component {
  getNumOfBiosInSection = (section) => {
    let toRet = 0;
    if (section) {
      for (let i = 0; i < 6; i += 1) {
        toRet += section[`person${i}Name`] ? 1 : 0;
      }
    }
    return toRet;
  };

  setSingleBio = (sectionNumber, bioNumber) => {
    const {
      data,
      isOnContentPage,
      pathContext
    } = this.props;
    const n = sectionNumber - 1;
    const sectionData = data.sections[n];
    if (!sectionData[`person${bioNumber}Name`]) {
      return null;
    }
    return {
      bioDescription: sectionData[`person${bioNumber}Description`],
      bioImage: isOnContentPage ?
        pathContext && pathContext[1] && pathContext[1][sectionNumber - 1][bioNumber - 1].fulfillmentValue :
        pathContext && pathContext.imageDataByType &&
        pathContext.imageDataByType[STRUCTURAL_COMPONENTS.HOME_TEAMS][`personImage${sectionNumber - 1}${bioNumber}`],
      bioImageAlt: sectionData[`person${bioNumber}ImageAlt`],
      bioName: sectionData[`person${bioNumber}Name`],
      bioTitle: sectionData[`person${bioNumber}Title`]
    };
  };

  displaySecondStatIn = () => {
    const { sections } = this.props.data;

    // Place where second statistic will be displayed depends on number of bios in each section.
    // For first section there needs to be 4+ bios, and for other sections it's 3+ bios.
    // It will be displayed in first sections that satisfies this condition.
    if (this.getNumOfBiosInSection(sections[0]) > 4) return 1;
    if (this.getNumOfBiosInSection(sections[1]) > 3) return 2;
    if (this.getNumOfBiosInSection(sections[2]) > 3) return 3;
    if (this.getNumOfBiosInSection(sections[3]) > 3) return 4;
    if (this.getNumOfBiosInSection(sections[4]) > 3) return 5;
    return null;
  }

  render() {
    const {
      data,
      isOnContentPage,
      pathContext
    } = this.props;

    const statistic1 = {
      number1: data.statistic1Number1,
      number2: data.statistic1Number2,
      textLineBottom: data.statistic1TextLineBottom,
      textLineTop: data.statistic1TextLineTop,
      type: data.statistic1Type
    };

    const statistic2 = {
      number1: data.statistic2Number1,
      number2: data.statistic2Number2,
      textLineBottom: data.statistic2TextLineBottom,
      textLineTop: data.statistic2TextLineTop,
      type: data.statistic2Type
    };

    const heroImage = isOnContentPage ?
      pathContext && pathContext[0] :
      pathContext && pathContext.imageDataByType &&
      pathContext.imageDataByType[STRUCTURAL_COMPONENTS.HOME_TEAMS].heroImage;

    const blockHasHero = data.heroName &&
                         data.heroTitle &&
                         data.heroDescription;

    const displaySecondStatIn = this.displaySecondStatIn();

    return (
      <div className={cx(
          styles.wideWrapper,
          {
            [styles.wrapper_isOnContentPage]: isOnContentPage,
            [styles.wrapper_hasNoHero]: !blockHasHero,
          }
        )}
      >
        <div className={styles.wrapper}>
          {!isOnContentPage && (
            <HomeSectionTitle
              color={HOME_SECTION_TITLE_COLOR.GRAY}
              isBreakingTop
              position={HOME_SECTION_TITLE_POSITION.LEFT}
              text={data.sectionTitleText}
            />
          )}
          <ul className={styles.content}>
            {blockHasHero && (
              <TeamsHero
                heroDescription={data.heroDescription}
                heroImage={heroImage}
                heroImageAlt={data.heroImageAlt}
                heroLinkTarget={data.heroLinkTarget}
                heroName={data.heroName}
                heroTitle={data.heroTitle}
              />
            )}
            <TeamsSection
              firstBio
              numOfBiosInFirst={this.getNumOfBiosInSection(data.sections[0])}
              statistic1={statistic1}
              statistic2={displaySecondStatIn === 1 ? statistic2 : null}
              teamBio1={this.setSingleBio(1, 1)}
              teamBio2={this.setSingleBio(1, 2)}
              teamBio3={this.setSingleBio(1, 3)}
              teamBio4={this.setSingleBio(1, 4)}
              teamBio5={this.setSingleBio(1, 5)}
              teamBio6={this.setSingleBio(1, 6)}
              teamLinkTarget={data.sections[0].sectionLinkDestination}
              teamSectionTitle={data.sections[0].sectionTitle}
            />
            {data.sections[1] && (
              <TeamsSection
                numOfBiosInFirst={this.getNumOfBiosInSection(data.sections[0])}
                secondBio
                statistic2={displaySecondStatIn === 2 ? statistic2 : null}
                teamBio1={this.setSingleBio(2, 1)}
                teamBio2={this.setSingleBio(2, 2)}
                teamBio3={this.setSingleBio(2, 3)}
                teamBio4={this.setSingleBio(2, 4)}
                teamBio5={this.setSingleBio(2, 5)}
                teamBio6={this.setSingleBio(2, 6)}
                teamLinkTarget={data.sections[1].sectionLinkDestination}
                teamSectionTitle={data.sections[1].sectionTitle}
              />
            )}
            {data.sections[2] && (
              <TeamsSection
                statistic2={displaySecondStatIn === 3 ? statistic2 : null}
                teamBio1={this.setSingleBio(3, 1)}
                teamBio2={this.setSingleBio(3, 2)}
                teamBio3={this.setSingleBio(3, 3)}
                teamBio4={this.setSingleBio(3, 4)}
                teamBio5={this.setSingleBio(3, 5)}
                teamBio6={this.setSingleBio(3, 6)}
                teamLinkTarget={data.sections[2].sectionLinkDestination}
                teamSectionTitle={data.sections[2].sectionTitle}
              />
            )}
            {data.sections[3] && (
              <TeamsSection
                statistic2={displaySecondStatIn === 4 ? statistic2 : null}
                teamBio1={this.setSingleBio(4, 1)}
                teamBio2={this.setSingleBio(4, 2)}
                teamBio3={this.setSingleBio(4, 3)}
                teamBio4={this.setSingleBio(4, 4)}
                teamBio5={this.setSingleBio(4, 5)}
                teamBio6={this.setSingleBio(4, 6)}
                teamLinkTarget={data.sections[3].sectionLinkDestination}
                teamSectionTitle={data.sections[3].sectionTitle}
              />
            )}
            {data.sections[4] && (
              <TeamsSection
                statistic2={displaySecondStatIn === 5 ? statistic2 : null}
                teamBio1={this.setSingleBio(5, 1)}
                teamBio2={this.setSingleBio(5, 2)}
                teamBio3={this.setSingleBio(5, 3)}
                teamBio4={this.setSingleBio(5, 4)}
                teamBio5={this.setSingleBio(5, 5)}
                teamBio6={this.setSingleBio(5, 6)}
                teamLinkTarget={data.sections[4].sectionLinkDestination}
                teamSectionTitle={data.sections[4].sectionTitle}
              />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

HomeTeams.propTypes = propTypes;

export default HomeTeams;
