import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import cx from 'classnames';

import Markdown from '../../../../../components/global/markdown';
import WithVideo from '../../../../../hocs/with-video';
import { parseLink } from '../../../../../utils/nav';

import { PROP_SHAPES, PROP_TYPES } from '../../../../../constants/custom-property-types';

import styles from './video-item.module.css';
import commonStyles from '../videos.module.css';

const propTypes = {
  ...PROP_SHAPES.HERO_VIDEO,
  ...PROP_TYPES.WITH_VIDEO,
  isSmall: PropTypes.bool,
};

const VideoItem = ({
  assetWithVideo,
  description,
  hasPlayButton,
  isSmall,
  link,
  title,
}, { translation }) => (
  <div className={cx(styles.wrapper, {
         [styles.wrapper_isSmall]: isSmall,
         [styles.wrapper_hasPlayButton]: hasPlayButton,
       })}
  >
    <div className={styles.asset}>
      {assetWithVideo}
    </div>
    <div className={styles.content}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>
          {title}
        </h3>
        {link && (link.linkDestinationInternal || link.linkDestinationExternal) && (
          <Link
            className={commonStyles.link}
            to={parseLink({ external: link.linkDestinationExternal, internal: link.linkDestinationInternal })}
          >
            {translation('general.learnMore')}
          </Link>
        )}
      </div>
      <Markdown
        className={cx(styles.description, 'hideSm')}
        source={description.markdown}
      />
    </div>
  </div>
);

VideoItem.propTypes = propTypes;
VideoItem.contextTypes = { translation: PropTypes.func.isRequired };

export default WithVideo(VideoItem);
