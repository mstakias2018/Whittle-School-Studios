import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Title from '../title';
import Picture from '../picture';

import { PROP_TYPES } from '../../../constants/customPropertyTypes';
import { PAGE_TYPE } from '../../../constants/settings';

import styles from './main-image.module.css';

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

const MainImage = ({
  alt,
  headline,
  image,
  subhead,
  type,
}) => (
  <div className={cx(styles.mainImage, {
      [styles.mainImage__home]: type === PAGE_TYPE.HOME,
      [styles.mainImage__article]: type === PAGE_TYPE.ARTICLE,
      [styles.mainImage__category]: type === PAGE_TYPE.CATEGORY,
    })}
  >
    <Title
      className="h1-test"
      text={headline}
      type={type}
    />
    <Picture
      alt={alt}
      image={image}
    />
    { subhead &&
      <h2 className={styles.subhead}>{subhead}</h2>
    }
  </div>
);

MainImage.propTypes = propTypes;
MainImage.defaultProps = defaultProps;

export default MainImage;
