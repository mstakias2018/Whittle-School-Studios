import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WithWindowListener from '../../../../hocs/withWindow';

import styles from './section.module.css';

import TeamsBio, { bioPropType } from '../bio';
import Statistic, { statisticPropTypes } from '../statistic';
import Link from '../../../global/link';
import { createContentPageLink } from '../../../../utils/global';

import { BREAKPOINTS_NAME } from '../../../../constants/breakpoints';
import { PROP_SHAPES } from '../../../../constants/custom-property-types';

const teamSectionPropTypes = {
  breakpoint: PROP_SHAPES.BREAKPOINT,
  firstBio: PropTypes.bool,
  numOfBiosInFirst: PropTypes.number,
  secondBio: PropTypes.bool,
  statistic1: PropTypes.shape(statisticPropTypes),
  statistic2: PropTypes.shape(statisticPropTypes),
  teamBio1: PropTypes.shape(bioPropType).isRequired,
  teamBio2: PropTypes.shape(bioPropType).isRequired,
  teamBio3: PropTypes.shape(bioPropType).isRequired,
  teamBio4: PropTypes.shape(bioPropType),
  teamBio5: PropTypes.shape(bioPropType),
  teamBio6: PropTypes.shape(bioPropType),
  teamLinkTarget: PROP_SHAPES.LINK.isRequired,
  teamSectionTitle: PropTypes.string.isRequired,
};

class TeamsSection extends Component {
  getNumOfBios = () => {
    let numOfBiosInThisSection = 0;
    numOfBiosInThisSection += this.props.teamBio1 ? 1 : 0;
    numOfBiosInThisSection += this.props.teamBio2 ? 1 : 0;
    numOfBiosInThisSection += this.props.teamBio3 ? 1 : 0;
    numOfBiosInThisSection += this.props.teamBio4 ? 1 : 0;
    numOfBiosInThisSection += this.props.teamBio5 ? 1 : 0;
    numOfBiosInThisSection += this.props.teamBio6 ? 1 : 0;
    return numOfBiosInThisSection;
  };

  renderBio = (num, hasLeftMargin = false) => {
    const bio = this.props[`teamBio${num}`];
    const toRet = (
      <TeamsBio
        bioDescription={bio.bioDescription}
        bioImage={bio.bioImage}
        bioImageAlt={bio.bioImageAlt}
        bioName={bio.bioName}
        bioTitle={bio.bioTitle}
        hasLeftMargin={hasLeftMargin}
      />
    );
    return toRet;
  };

  renderStatistic = (num, hasRightMargin = false) => {
    const statistic = this.props[`statistic${num}`];
    const toRet = (
      <Statistic
        hasRightMargin={hasRightMargin}
        layout={statistic.layout}
        number1={statistic.number1}
        number2={statistic.number2}
        textLineBottom={statistic.textLineBottom}
        textLineTop={statistic.textLineTop}
        type={statistic.type}
      />
    );
    return toRet;
  };

  renderTitle = () => {
    const { translation } = this.context;
    return (
      <div className={styles.title}>
        {this.props.teamSectionTitle}
        <div className={styles.linkWrapper}>
          <Link
            className={styles.link}
            to={createContentPageLink(this.props.teamLinkTarget)}
          >
            {translation('teams.teamLinkText')}
          </Link>
        </div>
      </div>
    );
  };

  renderSmallLayout = () => (
    <ul className={styles.smallBioList}>
      {this.renderBio(1)}
      {this.renderBio(2)}
      {this.renderBio(3)}
      {this.props.teamBio4 &&
        this.renderBio(4)
      }
      {this.props.teamBio5 &&
        this.renderBio(5)
      }
      {this.props.teamBio6 &&
        this.renderBio(6)
      }
    </ul>
  );

  renderMediumAndLargeLayout = (breakpoint) => {
    const isMediumBrakepoint = breakpoint === BREAKPOINTS_NAME.medium;
    const isLargeBrakepoint = breakpoint === BREAKPOINTS_NAME.large ||
      breakpoint === BREAKPOINTS_NAME.extraLarge;
    const numOfBiosInThisSection = this.getNumOfBios();
    return (
      <ul className={styles.mediumAndLargeBioList}>
        {this.renderTitle()}
        {this.renderBio(1)}
        {isLargeBrakepoint && this.props.statistic1 &&
          this.renderStatistic(1)
        }
        {this.renderBio(2, !!this.props.statistic1)}
        {isMediumBrakepoint && this.props.statistic1 &&
          this.renderStatistic(1)
        }
        {isMediumBrakepoint && this.props.statistic2 && this.props.secondBio && this.props.numOfBiosInFirst < 5 &&
          this.renderStatistic(2)
        }
        {this.renderBio(3)}
        {isLargeBrakepoint &&
         this.props.statistic2 &&
         this.props.secondBio &&
         this.props.numOfBiosInFirst < 5 &&
         numOfBiosInThisSection > 3 &&
         this.renderStatistic(2, true)
        }
        {this.props.teamBio4 &&
          this.renderBio(4, (!this.props.statistic1 && !this.props.statistic2) ||
                            (this.props.secondBio && this.props.numOfBiosInFirst > 4))
        }
        {isLargeBrakepoint && this.props.statistic2 && this.props.firstBio && this.props.numOfBiosInFirst > 4 &&
          this.renderStatistic(2, !this.props.secondBio)
        }
        {this.props.teamBio5 &&
          this.renderBio(5, (this.props.firstBio && !this.props.statistic2))
        }
        {this.props.teamBio6 &&
          this.renderBio(6)
        }
        {isMediumBrakepoint && this.props.statistic2 && this.props.firstBio && this.props.numOfBiosInFirst >= 5 &&
          this.renderStatistic(2)
        }
      </ul>
    );
  };

  render() {
    const {
      breakpoint,
      secondBio,
      statistic1,
      statistic2,
    } = this.props;

    const isSmallBrakepoint = breakpoint === BREAKPOINTS_NAME.small;

    return (
      <li className={styles.wrapper}>
        {isSmallBrakepoint && statistic1 &&
          this.renderStatistic(1)
        }
        {isSmallBrakepoint && secondBio && statistic2 &&
          this.renderStatistic(2)
        }
        {isSmallBrakepoint && this.renderTitle()}
        {isSmallBrakepoint && this.renderSmallLayout()}
        {!isSmallBrakepoint && this.renderMediumAndLargeLayout(breakpoint)}
      </li>
    );
  }
}

TeamsSection.contextTypes = { translation: PropTypes.func.isRequired };
TeamsSection.propTypes = teamSectionPropTypes;

export default WithWindowListener(TeamsSection);
