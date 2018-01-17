import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Plx from 'react-plx';
import WithVideo from '../../../hocs/with-video';
import WithWindowListener from '../../../hocs/withWindow';

import HomeSectionTitle from '../home-section-title';
import Picture from '../../global/picture';
import { createContentPageLink } from '../../../utils/nav';

import { HOME_SECTION_TITLE_COLOR, HOME_SECTION_TITLE_POSITION } from '../../../constants/settings';
import { PROP_TYPES, PROP_SHAPES } from '../../../constants/custom-property-types';
import { BREAKPOINTS_NAME } from '../../../constants/breakpoints';

import Link from '../../global/link';
import Markdown, { ALLOWED_TYPES } from '../../global/markdown';

import styles from './home-campuses.module.css';

const propTypes = {
  architectImage: PROP_SHAPES.IMAGE_SOURCES.isRequired,
  architectImageAlt: PropTypes.string,
  architectName: PropTypes.string,
  architectQuote: PROP_SHAPES.MARKDOWN,
  breakpoint: PROP_SHAPES.BREAKPOINT,
  descriptionText: PROP_SHAPES.MARKDOWN.isRequired,
  dimensions: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  linkTarget: PROP_SHAPES.LINK,
  linkText: PropTypes.string,
  sectionTitle: PropTypes.string.isRequired,
  ...PROP_TYPES.WITH_VIDEO,
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
          paralaxEndValue = -40;
          break;
        case BREAKPOINTS_NAME.large:
        case BREAKPOINTS_NAME.extraLarge:
          paralaxEndValue = -90;
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
      architectImageAlt,
      architectName,
      architectQuote,
      assetWithVideo,
      descriptionText,
      hasVideo,
      linkTarget,
      linkText,
      sectionTitle,
    } = this.props;

    return (
      <div className={cx(styles.wrapper, {
        [styles.wrapper_hasVideo]: hasVideo,
        })}
      >
        <HomeSectionTitle
          color={HOME_SECTION_TITLE_COLOR.GRAY}
          isBreakingTop={this.state.shouldTitleBreakTop}
          position={HOME_SECTION_TITLE_POSITION.RIGHT}
          text={sectionTitle}
        />
        <Plx
          animateWhenNotInViewport
          className={styles.content}
          parallaxData={[
            {
              duration: this.state.clientHeight / 2,
              offset: -this.state.clientHeight,
              properties: [
                {
                  endValue: this.state.paralaxEndValue,
                  property: 'translateY',
                  startValue: 0,
                },
              ],
              start: 'self',
            },
          ]}
        >
          <div className={styles.headImage}>
            {assetWithVideo}
          </div>
          <div className={styles.contentBlock}>
            <div className={styles.descriptionBlock}>
              <Markdown
                allowedTypes={ALLOWED_TYPES.SHORT_TEXT}
                className={styles.description}
                source={descriptionText.markdown}
              />
              {this.props.linkText &&
                this.props.linkTarget && (
                  <Link
                    className={styles.link}
                    to={createContentPageLink(linkTarget)}
                  >
                    {linkText}
                  </Link>
                )}
            </div>
            <div className={styles.architectBlock}>
              <div className={styles.architectInnerBlock}>
                <div className={styles.architectName}>{architectName}</div>
                <Picture
                  alt={architectImageAlt}
                  className={styles.architectImage}
                  sourcesBySize={architectImage}
                />
              </div>
              <Markdown
                allowedTypes={ALLOWED_TYPES.SHORT_TEXT}
                className={styles.architectQuote}
                source={architectQuote.markdown}
              />
            </div>
          </div>
        </Plx>
      </div>
    );
  }
}

HomeCampuses.propTypes = propTypes;

export default WithVideo(WithWindowListener(HomeCampuses));
