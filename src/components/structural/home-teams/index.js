import React from 'react';
import PropTypes from 'prop-types';

import HomeSectionTitle from '../home-section-title';

import TeamsHero from './hero';
import TeamsSection, { teamSectionPropTypes } from './section';
import { statisticPropTypes } from './statistic';

import styles from './home-teams.module.css';

import { HOME_SECTION_TITLE_COLOR, HOME_SECTION_TITLE_POSITION } from '../../../constants/settings';

const propTypes = {
  heroDescription: PropTypes.string.isRequired,
  heroImage: PropTypes.string.isRequired,
  heroImageAlt: PropTypes.string,
  heroLinkTarget: PropTypes.string.isRequired,
  heroName: PropTypes.string.isRequired,
  heroTitle: PropTypes.string,
  sectionTitleText: PropTypes.string.isRequired,
  statistic1: PropTypes.shape(statisticPropTypes),
  statistic2: PropTypes.shape(statisticPropTypes),
  teamSection1: PropTypes.shape(teamSectionPropTypes),
  teamSection2: PropTypes.shape(teamSectionPropTypes),
  teamSection3: PropTypes.shape(teamSectionPropTypes),
  teamSection4: PropTypes.shape(teamSectionPropTypes),
  teamSection5: PropTypes.shape(teamSectionPropTypes),
};

const getNumOfnumOfBiosInFirst = (teamSection) => {
  let toRet = 0;

  for (let i = 0; i < 6; i += 1) {
    toRet += teamSection[`teamBio${i}`] ? 1 : 0;
  }

  return toRet;
};

const HomeTeams = ({
  sectionTitleText,
  heroDescription,
  heroImage,
  heroImageAlt,
  heroLinkTarget,
  heroName,
  heroTitle,
  statistic1,
  statistic2,
  teamSection1,
  teamSection2,
  teamSection3,
  teamSection4,
  teamSection5,
}) => (
  <div className={styles.wideWrapper}>
    <div className={styles.wrapper}>
      <HomeSectionTitle
        color={HOME_SECTION_TITLE_COLOR.GRAY}
        isBreakingTop
        position={HOME_SECTION_TITLE_POSITION.LEFT}
        text={sectionTitleText}
      />
      <ul className={styles.content}>
        <TeamsHero
          heroDescription={heroDescription}
          heroImage={heroImage}
          heroImageAlt={heroImageAlt}
          heroLinkTarget={heroLinkTarget}
          heroName={heroName}
          heroTitle={heroTitle}
        />
        <TeamsSection
          firstBio
          numOfBiosInFirst={getNumOfnumOfBiosInFirst(teamSection1)}
          statistic1={statistic1}
          statistic2={statistic2}
          teamBio1={teamSection1.teamBio1}
          teamBio2={teamSection1.teamBio2}
          teamBio3={teamSection1.teamBio3}
          teamBio4={teamSection1.teamBio4}
          teamBio5={teamSection1.teamBio5}
          teamBio6={teamSection1.teamBio6}
          teamLinkTarget={teamSection1.teamLinkTarget}
          teamSectionTitle={teamSection1.teamSectionTitle}
        />
        {teamSection2 &&
          <TeamsSection
            numOfBiosInFirst={getNumOfnumOfBiosInFirst(teamSection1)}
            secondBio
            statistic2={statistic2}
            teamBio1={teamSection2.teamBio1}
            teamBio2={teamSection2.teamBio2}
            teamBio3={teamSection2.teamBio3}
            teamBio4={teamSection2.teamBio4}
            teamBio5={teamSection2.teamBio5}
            teamBio6={teamSection2.teamBio6}
            teamLinkTarget={teamSection2.teamLinkTarget}
            teamSectionTitle={teamSection1.teamSectionTitle}
          />
        }
        {teamSection3 &&
          <TeamsSection
            teamBio1={teamSection3.teamBio1}
            teamBio2={teamSection3.teamBio2}
            teamBio3={teamSection3.teamBio3}
            teamBio4={teamSection3.teamBio4}
            teamBio5={teamSection3.teamBio5}
            teamBio6={teamSection3.teamBio6}
            teamLinkTarget={teamSection3.teamLinkTarget}
            teamSectionTitle={teamSection3.teamSectionTitle}
          />
        }
        {teamSection4 &&
          <TeamsSection
            teamBio1={teamSection4.teamBio1}
            teamBio2={teamSection4.teamBio2}
            teamBio3={teamSection4.teamBio3}
            teamBio4={teamSection4.teamBio4}
            teamBio5={teamSection4.teamBio5}
            teamBio6={teamSection4.teamBio6}
            teamLinkTarget={teamSection4.teamLinkTarget}
            teamSectionTitle={teamSection4.teamSectionTitle}
          />
        }
        {teamSection5 &&
          <TeamsSection
            teamBio1={teamSection5.teamBio1}
            teamBio2={teamSection5.teamBio2}
            teamBio3={teamSection5.teamBio3}
            teamBio4={teamSection5.teamBio4}
            teamBio5={teamSection5.teamBio5}
            teamBio6={teamSection5.teamBio6}
            teamLinkTarget={teamSection5.teamLinkTarget}
            teamSectionTitle={teamSection5.teamSectionTitle}
          />
        }
      </ul>
    </div>
  </div>
);

HomeTeams.propTypes = propTypes;

export default HomeTeams;
