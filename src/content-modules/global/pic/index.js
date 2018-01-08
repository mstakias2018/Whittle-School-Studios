import React from 'react';
import PropTypes from 'prop-types';

import EventsList from '../events-list';
import IntroText from './intro-text';
import HomeSectionTitle from '../../../components/structural/home-section-title';

import { PROP_TYPES } from '../../../constants/custom-property-types';
import { HOME_SECTION_TITLE_COLOR, HOME_SECTION_TITLE_POSITION } from '../../../constants/settings';

import styles from './pic.module.css';

const propTypes = {
  cityName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  eventList: PropTypes.shape(PROP_TYPES.EVENTS_LIST).isRequired,
  sectionTitle: PropTypes.string.isRequired,
};

const PIC = ({
  cityName,
  description,
  eventList,
  sectionTitle,
}) => (
  <div className={styles.wrapper}>
    <div className={styles.componentContainer}>
      <HomeSectionTitle
        color={HOME_SECTION_TITLE_COLOR.YELLOW}
        isBreakingTop
        position={HOME_SECTION_TITLE_POSITION.LEFT}
        text={sectionTitle}
      />
      <div className={styles.container}>
        <IntroText
          cityName={cityName}
          description={description}
        />
        <EventsList {...eventList} />
      </div>
    </div>
  </div>
);

PIC.propTypes = propTypes;

export default PIC;
