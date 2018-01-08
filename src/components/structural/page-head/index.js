import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Plx from 'react-plx';

import Title from '../../global/title';
import Picture from '../../global/picture';

import { PROP_SHAPES } from '../../../constants/custom-property-types';
import { PAGE_TYPE } from '../../../constants/settings';
import { PARALLAX_HOME_TITLE } from '../../../constants/parallax';

import WithWindowListener from '../../../hocs/withWindow';

import styles from './page-head.module.css';

const propTypes = {
  breakpoint: PROP_SHAPES.BREAKPOINT,
  headline: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  imageSources: PROP_SHAPES.IMAGE_SOURCES,
  subhead: PropTypes.string,
  type: PROP_SHAPES.PAGE_TYPES.isRequired,
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
            animateWhenNotInViewport
            className={styles.parallaxTitle}
            parallaxData={PARALLAX_HOME_TITLE[breakpoint]}
          >
            {title}
          </Plx>
          : title
        }
        {type === PAGE_TYPE.CATEGORY &&
        subhead &&
        <div className={styles.subhead}>{subhead}</div>
        }
        {imageSources &&
        <Picture
          alt={imageAlt}
          sourcesBySize={imageSources}
        />
        }
        {type === PAGE_TYPE.ARTICLE &&
        subhead &&
        <h2 className={cx(styles.subhead, styles.subhead_withBorder)}>{subhead}</h2>
        }
      </div>
    </div>
  );
};

PageHead.propTypes = propTypes;

export default WithWindowListener(PageHead);
