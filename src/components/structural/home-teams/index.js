import React from 'react';
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

const getNumOfnumOfBiosInFirst = (section) => {
  let toRet = 0;

  for (let i = 0; i < 6; i += 1) {
    toRet += section[`person${i}Name`] ? 1 : 0;
  }

  return toRet;
};

const setSingleBio = (data, isOnContentPage, pathContext, sectionNumber, bioNumber) => {
  if (!data.sections[sectionNumber - 1][`person${bioNumber}Name`]) {
    return null;
  }
  return {
    bioDescription: data.sections[sectionNumber - 1][`person${bioNumber}Description`],
    bioImage: isOnContentPage ?
      pathContext && pathContext[1] && pathContext[1][sectionNumber - 1][bioNumber - 1].fulfillmentValue :
      pathContext && pathContext.imageDataByType &&
      pathContext.imageDataByType[STRUCTURAL_COMPONENTS.HOME_TEAMS][`personImage${sectionNumber - 1}${bioNumber}`],
    bioImageAlt: data.sections[sectionNumber - 1][`person${bioNumber}ImageAlt`],
    bioName: data.sections[sectionNumber - 1][`person${bioNumber}Name`],
    bioTitle: data.sections[sectionNumber - 1][`person${bioNumber}Title`]
  };
};

const HomeTeams = ({
  data,
  isOnContentPage,
  pathContext
}) => {
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
            numOfBiosInFirst={getNumOfnumOfBiosInFirst(data.sections[0])}
            statistic1={statistic1}
            statistic2={statistic2}
            teamBio1={setSingleBio(data, isOnContentPage, pathContext, 1, 1)}
            teamBio2={setSingleBio(data, isOnContentPage, pathContext, 1, 2)}
            teamBio3={setSingleBio(data, isOnContentPage, pathContext, 1, 3)}
            teamBio4={setSingleBio(data, isOnContentPage, pathContext, 1, 4)}
            teamBio5={setSingleBio(data, isOnContentPage, pathContext, 1, 5)}
            teamBio6={setSingleBio(data, isOnContentPage, pathContext, 1, 6)}
            teamLinkTarget={data.sections[0].sectionLinkDestination}
            teamSectionTitle={data.sections[0].sectionTitle}
          />
          {data.sections[1] && (
            <TeamsSection
              numOfBiosInFirst={getNumOfnumOfBiosInFirst(data.sections[0])}
              secondBio
              statistic2={statistic2}
              teamBio1={setSingleBio(data, isOnContentPage, pathContext, 2, 1)}
              teamBio2={setSingleBio(data, isOnContentPage, pathContext, 2, 2)}
              teamBio3={setSingleBio(data, isOnContentPage, pathContext, 2, 3)}
              teamBio4={setSingleBio(data, isOnContentPage, pathContext, 2, 4)}
              teamBio5={setSingleBio(data, isOnContentPage, pathContext, 2, 5)}
              teamBio6={setSingleBio(data, isOnContentPage, pathContext, 2, 6)}
              teamLinkTarget={data.sections[1].sectionLinkDestination}
              teamSectionTitle={data.sections[1].sectionTitle}
            />
          )}
          {data.sections[2] && (
            <TeamsSection
              teamBio1={setSingleBio(data, isOnContentPage, pathContext, 3, 1)}
              teamBio2={setSingleBio(data, isOnContentPage, pathContext, 3, 2)}
              teamBio3={setSingleBio(data, isOnContentPage, pathContext, 3, 3)}
              teamBio4={setSingleBio(data, isOnContentPage, pathContext, 3, 4)}
              teamBio5={setSingleBio(data, isOnContentPage, pathContext, 3, 5)}
              teamBio6={setSingleBio(data, isOnContentPage, pathContext, 3, 6)}
              teamLinkTarget={data.sections[2].sectionLinkDestination}
              teamSectionTitle={data.sections[2].sectionTitle}
            />
          )}
          {data.sections[3] && (
            <TeamsSection
              teamBio1={setSingleBio(data, isOnContentPage, pathContext, 4, 1)}
              teamBio2={setSingleBio(data, isOnContentPage, pathContext, 4, 2)}
              teamBio3={setSingleBio(data, isOnContentPage, pathContext, 4, 3)}
              teamBio4={setSingleBio(data, isOnContentPage, pathContext, 4, 4)}
              teamBio5={setSingleBio(data, isOnContentPage, pathContext, 4, 5)}
              teamBio6={setSingleBio(data, isOnContentPage, pathContext, 4, 6)}
              teamLinkTarget={data.sections[3].sectionLinkDestination}
              teamSectionTitle={data.sections[3].sectionTitle}
            />
          )}
          {data.sections[4] && (
            <TeamsSection
              teamBio1={setSingleBio(data, isOnContentPage, pathContext, 5, 1)}
              teamBio2={setSingleBio(data, isOnContentPage, pathContext, 5, 2)}
              teamBio3={setSingleBio(data, isOnContentPage, pathContext, 5, 3)}
              teamBio4={setSingleBio(data, isOnContentPage, pathContext, 5, 4)}
              teamBio5={setSingleBio(data, isOnContentPage, pathContext, 5, 5)}
              teamBio6={setSingleBio(data, isOnContentPage, pathContext, 5, 6)}
              teamLinkTarget={data.sections[4].sectionLinkDestination}
              teamSectionTitle={data.sections[4].sectionTitle}
            />
          )}
        </ul>
      </div>
    </div>
  );
};

HomeTeams.propTypes = propTypes;

export default HomeTeams;
