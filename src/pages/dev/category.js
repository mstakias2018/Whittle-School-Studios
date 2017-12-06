/* eslint-disable max-len */
import React from 'react';

import BodyText from '../../content-modules/global/body-text';
import InlineImage from '../../content-modules/global/inline-image';
import InlineVideo from '../../content-modules/global/inline-video';
import PageWrapper from '../../components/structural/page-wrapper';
import SectionTitle from '../../components/global/section-title';
import List from '../../content-modules/global/list';

import { IMAGE_SIZE, IMAGE_SHAPE } from '../../constants/images';

import largeImage from '../../test-content/images/article-large.jpg';
import smallImage from '../../test-content/images/article-small.jpg';

import styles from './modules.module.css';

import ThreeUpBreaker from '../../content-modules/global/three-up-breaker';

const Category = () => (
  <PageWrapper>
    <div className={styles.componentInfo}>3 up breaker component</div>
    <ThreeUpBreaker
      bodyText1="Any parent knows what a child or two can do to a home in short order. Imagine what 2,500 can do to a school building! We must choose materials that can co-exist with the natural energy of children—or that can be replaced easily when it is time"
      bodyText2="Any parent knows what a child or two can do to a home in short order. Imagine what 2,500 can do to a school building! We must choose materials that can co-exist with the natural energy of children—or that can be replaced easily when it is time"
      bodyText3="Any parent knows what a child or two can do to a home in short order. Imagine what 2,500 can do to a school building! We must choose materials that can co-exist with the natural energy of children—or that can be replaced easily when it is time"
      title1="A School of One"
      title2="Exceptional Faculty"
      title3="Progressive Pedagogy"
    />

    <div className={styles.componentInfo}>3 up breaker component with markdown</div>
    <ThreeUpBreaker
      bodyText1="Any parent knows what a child or two can do to a home in short order. _This is italic!_ We must choose materials that can co-exist with the natural energy of children—or that can be replaced easily when it is time"
      bodyText2="Any parent knows what a child or two can do to a home in short order. **This is bold** We must choose materials that can co-exist with the natural energy of children—or that can be replaced easily when it is time"
      bodyText3="Any parent knows what a child or two can do to a home in short order. **This is bold and _italic_, wow!** We must choose materials that can co-exist with the natural energy of children—or that can be replaced easily when it is time"
      title1="A School of One"
      title2="Exceptional Faculty"
      title3="Progressive Pedagogy"
    />

    <div className={styles.componentInfo}>Video</div>
    <InlineVideo
      alt="Tiger video"
      coverImageSources={{
        [IMAGE_SIZE.SMALL]: {
          src: smallImage,
        },
        [IMAGE_SIZE.LARGE]: {
          src: largeImage,
        },
      }}
      src="https://player.vimeo.com/video/243740445"
    />

    <div className={styles.componentInfo}>Video (with caption)</div>
    <InlineVideo
      alt="Tiger video"
      caption="The quick brown box jumped over the lazy dog."
      coverImageSources={{
        [IMAGE_SIZE.SMALL]: {
          src: smallImage,
        },
        [IMAGE_SIZE.LARGE]: {
          src: largeImage,
        },
      }}
      src="https://player.vimeo.com/video/243740445"
    />

    <div className={styles.componentInfo}>Body text</div>
    <BodyText
      content={{ markdown: 'Lorem ipsum dolor amet ramps tofu chillwave tousled. Pok pok pickled marfa, lumbersexual artisan etsy pop-up offal cliche flannel yuccie ramps. Narwhal ethical pop-up, glossier knausgaard marfa brunch next level portland brooklyn helvetica. Everyday carry banjo synth yuccie cronut mumblecore before they sold out leggings disrupt wayfarers deep v hot chicken. Master cleanse keffiyeh cloud bread man bun meh gochujang, selvage jianbing leggings taxidermy keytar tattooed messenger bag. Deep v palo santo beard lyft.' }}
    />

    <div className={styles.componentInfo}>Inline image (new caption alignment)</div>
    <InlineImage
      alt="Testtt"
      caption="The quick brown box jumped over the lazy dog."
      imageSources={{
        [IMAGE_SIZE.SMALL]: {
          src: smallImage,
        },
        [IMAGE_SIZE.LARGE]: {
          src: largeImage,
        },
      }}
      shape={IMAGE_SHAPE.RECTANGLE}
    />

    <div className={styles.componentInfo}>List</div>
    <List data={[{
        description: 'Cursus magna, vel scelerisque nisl consectetur et.',
        title: 'Shenzhen',
      }, {
        description: 'Praesent commodo cursus magna, vel scelerisque nisl.',
        title: 'New York',
      }, {
        description: '[Cursus magna](/#), vel scelerisque nisl consectetur et.',
        title: 'Washington D.C.',
      }, {
        description: 'Praesent commodo cursus magna, vel scelerisque.',
        title: 'Dubai',
      }, {
        description: 'Praesent commodo cursus magna, vel scelerisque.',
        title: 'Mumbai',
      }, {
        description: 'Praesent commodo cursus magna, vel scelerisque.',
        title: 'Shanghai',
      }]}
    />

    <div className={styles.componentInfo}>Section title</div>
    <SectionTitle
      number={5}
      title="Our Upcoming Locations"
    />
  </PageWrapper>
);

export default Category;
