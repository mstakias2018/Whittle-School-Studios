import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Plx from 'react-plx';

import Title from '../../global/title';
import Picture from '../../global/picture';

import { PROP_TYPES } from '../../../constants/custom-property-types';
import { PAGE_TYPE } from '../../../constants/settings';
import { PARALLAX_HOME_TITLE } from '../../../constants/parallax';

import WithWindowListener from '../../../hocs/withWindow';

import styles from './page-head.module.css';

const propTypes = {
  breakpoint: PROP_TYPES.BREAKPOINT,
  headline: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  imageSources: PROP_TYPES.IMAGE_SOURCES,
  subhead: PropTypes.string,
  type: PROP_TYPES.PAGE_TYPES.isRequired,
};

const PageHead = ({
  breakpoint,
  headline,
  imageAlt,
  imageSources,
  subhead,
  type,
}) => {
  const title = (<Title
    isSingle={!subhead && !imageSources}
    text={headline}
    type={type}
  />);

  return (
    <div className={styles.wrapper}>
      <div
        className={cx(styles.pageHead, {
          [styles.pageHead_home]: type === PAGE_TYPE.HOME,
          [styles.pageHead_article]: type === PAGE_TYPE.ARTICLE,
          [styles.pageHead_category]: type === PAGE_TYPE.CATEGORY,
        })}
      >
        {(type === PAGE_TYPE.HOME) ?
          <Plx
            className={styles.parallaxTitle}
            parallaxData={PARALLAX_HOME_TITLE[breakpoint]}
          >
            {title}
          </Plx>
          : title
        }
        {type === PAGE_TYPE.CATEGORY &&
        subhead &&
        <h2 className={styles.subhead}>{subhead}</h2>
        }
        {imageSources &&
        <Picture
          alt={imageAlt}
          sourcesBySize={imageSources}
        />
        }
        {type === PAGE_TYPE.ARTICLE &&
        subhead &&
        <h2 className={styles.subhead}>{subhead}</h2>
        }
      </div>
    </div>
  );
};

PageHead.propTypes = propTypes;

export default WithWindowListener(PageHead);
