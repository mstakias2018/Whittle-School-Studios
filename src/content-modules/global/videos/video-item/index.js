import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import cx from 'classnames';

import Markdown from '../../../../components/global/markdown';
import WithWindowListener from '../../../../hocs/withWindow';
import WithVideo from '../../../../hocs/with-video';
import { parseLink } from '../../../../utils/nav';

import { PROP_SHAPES, PROP_TYPES } from '../../../../constants/custom-property-types';

import styles from './video-item.module.css';

const propTypes = {
  ...PROP_SHAPES.HERO_VIDEO,
  ...PROP_TYPES.WITH_VIDEO,
  getVideoContentHeight: PropTypes.func,
  isSecond: PropTypes.bool,
  isSmall: PropTypes.bool,
};

class VideoItem extends Component {
  componentDidMount() {
    this.getFirstVideoContentHeight();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dimensions !== this.props.dimensions) {
      this.getFirstVideoContentHeight();
    }
  }

  getFirstVideoContentHeight = () => {
    const { getVideoContentHeight } = this.props;
    if (getVideoContentHeight) {
      setTimeout(() => {
        getVideoContentHeight(this.contentWrapper.offsetHeight);
      });
    }
  };

  render() {
    const {
      assetWithVideo,
      description,
      hasPlayButton,
      isSecond,
      isSmall,
      link,
      title,
    } = this.props;
    const { translation } = this.context;
    const hasLink = link && (link.linkDestinationInternal || link.linkDestinationExternal);

    return (
      <div className={cx(styles.wrapper, {
        [styles.wrapper_isSecond]: isSecond,
        [styles.wrapper_isSmall]: isSmall,
        [styles.wrapper_hasPlayButton]: hasPlayButton,
      })}
      >
        {assetWithVideo}
        <div
          className={styles.contentWrapper}
          ref={(el) => { this.contentWrapper = el; }}
        >
          <div className={styles.content}>
            <div className={cx(styles.titleWrapper, {
              [styles.titleWrapper_hasLink]: hasLink,
            })}
            >
              <h3 className={styles.title}>
                {title}
              </h3>
              {hasLink && (
                <Link
                  className={styles.link}
                  to={parseLink({ external: link.linkDestinationExternal, internal: link.linkDestinationInternal })}
                >
                  <h3 className={styles.linkTitleText}>{title}</h3>
                  <span className={styles.defaultLinkText}>{translation('general.learnMore')}</span>
                </Link>
              )}
            </div>
            <Markdown
              className={cx(styles.description, 'hideSm')}
              source={description.markdown}
            />
          </div>
        </div>
      </div>
    );
  }
}

VideoItem.propTypes = propTypes;
VideoItem.contextTypes = { translation: PropTypes.func.isRequired };

export default WithVideo(WithWindowListener(VideoItem));
