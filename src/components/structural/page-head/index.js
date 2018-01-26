import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Title from '../../global/title';
import Picture from '../../global/picture';

import { PROP_SHAPES } from '../../../constants/custom-property-types';
import { PAGE_TYPE } from '../../../constants/settings';
import styles from './page-head.module.css';

const { CLASSES } = require('./../../../constants/classes');

const propTypes = {
  headline: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  imageSources: PROP_SHAPES.IMAGE_SOURCES,
  subhead: PropTypes.string,
  type: PROP_SHAPES.PAGE_TYPES.isRequired,
};

class PageHead extends Component {
  state = { titleOffset: 0 };

  componentDidMount() {
    if (this.props.type === PAGE_TYPE.HOME) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    if (this.props.type === PAGE_TYPE.HOME) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll = () => {
    if (window.pageYOffset < 1000) {
      requestAnimationFrame(() => {
        this.setState({ titleOffset: window.pageYOffset / 10 });
      });
    }
  };

  render() {
    const {
      headline,
      imageAlt,
      imageSources,
      subhead,
      type,
    } = this.props;

    const titleStyle = {
      bottom: this.state.titleOffset,
    };

    return (
      <div
        className={cx(styles.wrapper, {
          [styles.wrapper_home]: type === PAGE_TYPE.HOME,
          [styles.wrapper_article]: type === PAGE_TYPE.ARTICLE,
          [styles.wrapper_category]: type === PAGE_TYPE.CATEGORY,
          [styles.wrapper_hasImage]: imageSources,
        })}
      >
        <div className={styles.pageHead}>
          <div
            className={cx(styles.parallaxTitle, CLASSES.HEADLINE, {
              [styles[`type${type}_isSingle`]]: !subhead && !imageSources,
            })}
            style={titleStyle}
          >
            <Title
              text={headline}
              type={type}
            />
          </div>
          {type === PAGE_TYPE.CATEGORY &&
          subhead &&
          <div className={styles.subhead}>{subhead}</div>
          }
          {imageSources && (
            <Picture
              alt={imageAlt}
              sourcesBySize={imageSources}
            />
          )}
          {type === PAGE_TYPE.ARTICLE &&
          subhead &&
          <h2 className={cx(styles.subhead, styles.subhead_withBorder)}>{subhead}</h2>
          }
        </div>
      </div>
    );
  }
}

PageHead.propTypes = propTypes;

export default PageHead;
