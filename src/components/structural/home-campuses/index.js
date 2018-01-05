import React from 'react';
import PropTypes from 'prop-types';

import Plx from 'react-plx';
import WithWindowListener from '../../../hocs/withWindow';

import HomeSectionTitle from '../home-section-title';
import Picture from '../../global/picture';
import { createContentPageLink } from '../../../utils/global';

import { HOME_SECTION_TITLE_COLOR, HOME_SECTION_TITLE_POSITION } from '../../../constants/settings';
import { PROP_SHAPES } from '../../../constants/custom-property-types';
import { BREAKPOINTS_NAME } from '../../../constants/breakpoints';

import Link from '../../global/link';
import Markdown, { ALLOWED_TYPES } from '../../global/markdown';

import styles from './home-campuses.module.css';

const propTypes = {
  architectImage: PROP_SHAPES.IMAGE_SOURCES.isRequired,
  architectName: PropTypes.string,
  architectQuote: PROP_SHAPES.MARKDOWN,
  breakpoint: PROP_SHAPES.BREAKPOINT,
  descriptionText: PROP_SHAPES.MARKDOWN.isRequired,
  dimensions: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  imageAlt: PropTypes.string,
  imageSources: PROP_SHAPES.IMAGE_SOURCES,
  linkTarget: PROP_SHAPES.LINK,
  linkText: PropTypes.string,
  sectionTitle: PropTypes.string.isRequired,
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
      sectionTitle,
    } = this.props;

    return (
      <div className={styles.wrapper}>
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
                  alt={imageAlt}
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

export default WithWindowListener(HomeCampuses);
