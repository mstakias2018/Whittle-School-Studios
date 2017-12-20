import React from 'react';
import PropTypes from 'prop-types';

import Plx from 'react-plx';
import WithWindowListener from '../../../hocs/withWindow';

import HomeSectionTitle from '../home-section-title';
import Picture from '../../global/picture';

import { HOME_SECTION_TITLE_COLOR, HOME_SECTION_TITLE_POSITION } from '../../../constants/settings';
import { PROP_TYPES } from '../../../constants/custom-property-types';
import { BREAKPOINTS_NAME } from '../../../constants/breakpoints';

import Link from '../../global/link';
import Markdown, { ALLOWED_TYPES } from '../../global/markdown';

import styles from './home-campuses.module.css';

const propTypes = {
  architectImage: PropTypes.string,
  architectName: PropTypes.string,
  architectQuote: PropTypes.string,
  breakpoint: PROP_TYPES.BREAKPOINT,
  descriptionText: PropTypes.string,
  dimensions: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  imageAlt: PropTypes.string,
  imageSources: PROP_TYPES.IMAGE_SOURCES,
  linkTarget: PropTypes.string,
  linkText: PropTypes.string,
  sectionTitleText: PropTypes.string.isRequired,
};

class HomeCampuses extends React.Component {
  state = {
    clientHeight: 0,
    paralaxEndValue: 0,
    shouldTitleBreakTop: false,
  };

  componentDidMount = () => {
    this.setInitialStates();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.dimensions !== this.props.dimensions) {
      this.setInitialStates();
    }
  }

  setInitialStates = () => {
    setTimeout(() => {
      let paralaxEndValue;
      switch (this.props.breakpoint) {
        case BREAKPOINTS_NAME.medium:
          paralaxEndValue = -70;
          break;
        case BREAKPOINTS_NAME.large:
        case BREAKPOINTS_NAME.extraLarge:
          paralaxEndValue = -140;
          break;
        default:
          paralaxEndValue = 0;
          break;
      }
      this.setState({
        clientHeight: this.props.dimensions.y,
        paralaxEndValue,
        shouldTitleBreakTop:
          this.props.breakpoint === BREAKPOINTS_NAME.small || this.props.breakpoint === BREAKPOINTS_NAME.medium,
      });
    }, 0);
  };

  render() {
    const {
      architectImage,
      architectName,
      architectQuote,
      descriptionText,
      imageAlt,
      imageSources,
      linkTarget,
      linkText,
      sectionTitleText,
    } = this.props;

    return (
      <div className={styles.wrapper}>
        <HomeSectionTitle
          color={HOME_SECTION_TITLE_COLOR.GRAY}
          isBreakingTop={this.state.shouldTitleBreakTop}
          position={HOME_SECTION_TITLE_POSITION.RIGHT}
          text={sectionTitleText}
        />
        <Plx
          animateWhenNotInViewport
          className={styles.content}
          parallaxData={[
            {
              duration: 200,
              offset: -this.state.clientHeight,
              properties: [
                {
                  endValue: this.state.paralaxEndValue,
                  property: 'translateY',
                  startValue: 0,
                },
              ],
              start: 'top',
            },
          ]}
        >
          <Picture
            alt={imageAlt}
            className={styles.headImage}
            sourcesBySize={imageSources}
          />
          <div className={styles.contentBlock}>
            <div className={styles.descriptionBlock}>
              <Markdown
                allowedTypes={ALLOWED_TYPES.SHORT_TEXT}
                className={styles.description}
                source={descriptionText}
              />
              {this.props.linkText &&
                this.props.linkTarget && (
                  <Link
                    className={styles.link}
                    to={linkTarget}
                  >
                    {linkText}
                  </Link>
                )}
            </div>
            <div className={styles.architectBlock}>
              <div className={styles.architectInnerBlock}>
                <div className={styles.architectName}>{architectName}</div>
                <img
                  alt={imageAlt}
                  className={styles.architectImage}
                  src={architectImage}
                />
              </div>
              <Markdown
                allowedTypes={ALLOWED_TYPES.SHORT_TEXT}
                className={styles.architectQuote}
                source={`"${architectQuote}"`}
              />
            </div>
          </div>
        </Plx>
      </div>
    );
  }
}

HomeCampuses.propTypes = propTypes;

export default WithWindowListener(HomeCampuses);
