import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Title from '../title';
import Picture from '../picture';

import { PROP_TYPES } from '../../../constants/customPropertyTypes';
import { PAGE_TYPE } from '../../../constants/settings';

import styles from './page-head.module.css';

const propTypes = {
  alt: PropTypes.string.isRequired,
  image: PROP_TYPES.IMAGE_SET.isRequired,
  headline: PropTypes.string.isRequired,
  subhead: PropTypes.string,
  type: PROP_TYPES.PAGE_TYPES.isRequired,
};

const defaultProps = {
  subhead: null,
};

const PageHead = ({
  alt,
  headline,
  image,
  subhead,
  type,
}) => (
  <div className={cx(styles.pageHead, {
      [styles.pageHead__home]: type === PAGE_TYPE.HOME,
      [styles.pageHead__article]: type === PAGE_TYPE.ARTICLE,
      [styles.pageHead__category]: type === PAGE_TYPE.CATEGORY,
    })}
  >
    <Title
      className="h1-test"
      text={headline}
      type={type}
    />
    { type === PAGE_TYPE.CATEGORY &&
      subhead &&
      <h2 className={styles.subhead}>{subhead}</h2>
    }
    <Picture
      alt={alt}
      image={image}
    />
    { type === PAGE_TYPE.ARTICLE &&
      subhead &&
      <h2 className={styles.subhead}>{subhead}</h2>
    }
  </div>
);

PageHead.propTypes = propTypes;
PageHead.defaultProps = defaultProps;

export default PageHead;
