import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Picture from '../../global/picture';
import Markdown from '../../global/markdown';
import { PROP_SHAPES } from '../../../constants/custom-property-types';

import styles from './not-found.module.css';

const propTypes = {
  imageAlt: PropTypes.string,
  imageSources: PROP_SHAPES.IMAGE_SOURCES,
  text: PROP_SHAPES.MARKDOWN,
  title: PropTypes.string.isRequired,
};

const NotFound = ({
  imageAlt,
  imageSources,
  text,
  title,
}) => (
  <div className={cx(styles.wrapper, {
    [styles.wrapper_hasImage]: imageSources,
  })}
  >
    {imageSources &&
      <Picture
        alt={imageAlt}
        sourcesBySize={imageSources}
      />}
    <div className={styles.textWrapper}>
      <h1 className={styles.number}>404</h1>
      <h2 className={styles.title}>{title}</h2>
      <Markdown
        className={styles.text}
        source={text.markdown}
      />
    </div>
  </div>
);

NotFound.propTypes = propTypes;

export default NotFound;
