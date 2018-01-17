import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Picture from '../../../global/picture';
import Markdown, { ALLOWED_TYPES } from '../../../global/markdown';

import { PROP_SHAPES } from '../../../../constants/custom-property-types';

import styles from './bio.module.css';

const bioPropType = {
  bioDescription: PROP_SHAPES.MARKDOWN.isRequired,
  bioImage: PROP_SHAPES.IMAGE_SOURCES,
  bioImageAlt: PropTypes.string,
  bioName: PropTypes.string.isRequired,
  bioTitle: PropTypes.string.isRequired,
  hasLeftMargin: PropTypes.bool,
};

const TeamsBio = ({
  bioDescription,
  bioImage,
  bioImageAlt,
  bioName,
  bioTitle,
  hasLeftMargin,
}) => (
  <li className={cx(styles.wrapper, { [styles.wrapper_hasLeftMargin]: hasLeftMargin })}>
    <div className={styles.bioInner}>
      {bioImage && (
        <Picture
          alt={bioImageAlt}
          className={styles.image}
          sourcesBySize={bioImage}
        />
      )}
      <div className={styles.name}>
        {bioName}
      </div>
      <div className={styles.title}>
        {bioTitle}
      </div>
      <Markdown
        allowedTypes={ALLOWED_TYPES.SHORT_TEXT}
        className={styles.description}
        source={bioDescription.markdown}
      />
    </div>
  </li>
);

TeamsBio.propTypes = bioPropType;

export default TeamsBio;
