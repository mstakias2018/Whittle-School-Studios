import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Title from '../title';
import Picture from '../picture';

import { PROP_TYPES } from '../../../constants/custom-property-types';
import { PAGE_TYPE } from '../../../constants/settings';

import styles from './page-head.module.css';

const propTypes = {
  headline: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  imageSources: PROP_TYPES.IMAGE_SOURCES,
  subhead: PropTypes.string,
  type: PROP_TYPES.PAGE_TYPES.isRequired,
};

const PageHead = ({
  headline,
  imageAlt,
  imageSources,
  subhead,
  type,
}) => (
  <div
    className={cx(styles.pageHead, {
      [styles.pageHead_home]: type === PAGE_TYPE.HOME,
      [styles.pageHead_article]: type === PAGE_TYPE.ARTICLE,
      [styles.pageHead_category]: type === PAGE_TYPE.CATEGORY,
    })}
  >
    <Title
      text={headline}
      type={type}
    />
    { type === PAGE_TYPE.CATEGORY &&
      subhead &&
      <h2 className={styles.subhead}>{subhead}</h2>
    }
    { imageSources &&
      <Picture
        alt={imageAlt}
        sourcesBySize={imageSources}
      />
    }
    { type === PAGE_TYPE.ARTICLE &&
      subhead &&
      <h2 className={styles.subhead}>{subhead}</h2>
    }
  </div>
);

PageHead.propTypes = propTypes;

export default PageHead;
