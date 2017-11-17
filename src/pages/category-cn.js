/* eslint-disable max-len */
import React from 'react';
import cx from 'classnames';

import Carousel from '../content-modules/global/carousel';

import largeImage from '../test-content/images/article-large.jpg';
import smallImage from '../test-content/images/article-small.jpg';


import styles from './modules.module.css';

const CategoryCn = () => (
  <div className={cx('wrapper_isChinese', styles.moduleWrapper)}>
    <div>Carousel with captions of different lengths</div>
    <div className={styles.component}>
      <Carousel
        images={
          [
            {
              original: largeImage,
              originalAlt: '促进我',
              caption: '促进',
            },
            {
              original: smallImage,
              originalAlt: '促进我促进我',
              caption: '促进我们校园的经济文化多样性宋体华文仿宋',
            },
            {
              original: largeImage,
              originalAlt: '促进我们校园的经济文化多样性宋体华文仿宋',
              caption: '当第一所Whittle School＆Studios校园于2020年开放时促进我们校园的经济文文',
            },
          ]
        }
      />
    </div>

    <div>Carousel with max number of items</div>
    <div className={styles.component}>
      <Carousel
        images={
          [
            {
              original: largeImage,
              originalAlt: '促进我',
              caption: '促进',
            },
            {
              original: smallImage,
              originalAlt: '促进我促进我',
              caption: '促进我们校园的经济文化多样性宋体华文仿宋',
            },
            {
              original: largeImage,
              originalAlt: '促进我们校园的经济文化多样性宋体华文仿宋',
              caption: '当第一所Whittle School＆Studios校园于2020年开放时促进我们校园的经济文文',
            },
            {
              original: largeImage,
              originalAlt: '促进我',
              caption: '促进',
            },
            {
              original: smallImage,
              originalAlt: '促进我促进我',
              caption: '促进我们校园的经济文化多样性宋体华文仿宋',
            },
            {
              original: largeImage,
              originalAlt: '促进我们校园的经济文化多样性宋体华文仿宋',
              caption: '当第一所Whittle School＆Studios校园于2020年开放时促进我们校园的经济文文',
            },
          ]
        }
      />
    </div>
  </div>
);

export default CategoryCn;
