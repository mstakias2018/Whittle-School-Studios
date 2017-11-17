/* eslint-disable max-len */
import React from 'react';

import Carousel from '../content-modules/global/carousel';

import largeImage from '../test-content/images/article-large.jpg';
import smallImage from '../test-content/images/article-small.jpg';

import styles from './modules.module.css';

const Category = () => (
  <div className={styles.moduleWrapper}>
    <div>Carousel with captions of different lengths</div>
    <div className={styles.component}>
      <Carousel
        images={
          [
            {
              original: largeImage,
              originalAlt: 'Alt 1',
              caption: 'Caption one',
            },
            {
              original: smallImage,
              originalAlt: 'Alt 2',
              caption: 'Imagine the first global school, created by an international',
            },
            {
              original: largeImage,
              originalAlt: 'Alt 3',
              caption: 'Lorem ipsum dolor amet iPhone biodiesel photo booth, seitan',
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
              originalAlt: 'Alt 1',
              caption: 'Caption one',
            },
            {
              original: smallImage,
              originalAlt: 'Alt 2',
              caption: 'Imagine the first global school, created by an international',
            },
            {
              original: largeImage,
              originalAlt: 'Alt 3',
              caption: 'Lorem ipsum dolor amet iPhone biodiesel photo booth, seitan',
            },
            {
              original: largeImage,
              originalAlt: 'Alt 1',
              caption: 'Caption one',
            },
            {
              original: smallImage,
              originalAlt: 'Alt 2',
              caption: 'Imagine the first global school, created by an international',
            },
            {
              original: largeImage,
              originalAlt: 'Alt 3',
              caption: 'Lorem ipsum dolor amet iPhone biodiesel photo booth, seitan',
            },
          ]
        }
      />
    </div>
  </div>
);

export default Category;
