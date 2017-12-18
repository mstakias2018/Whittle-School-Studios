/* eslint-disable max-len */
import React from 'react';

import BodyText from '../../content-modules/global/body-text';
import InlineImage from '../../content-modules/global/inline-image';
import InlineVideo from '../../content-modules/global/inline-video';
import PageWrapper from '../../components/structural/page-wrapper';
import ThreeUpBreaker from '../../content-modules/global/three-up-breaker';
import ThumbnailsList from '../../content-modules/global/thumbnails-list';

import { IMAGE_SIZE, IMAGE_SHAPE } from '../../constants/images';

import largeImage from '../../test-content/images/article-large.jpg';
import smallImage from '../../test-content/images/article-small.jpg';

import styles from './modules.module.css';

const Category = () => (
  <PageWrapper>
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

    <div className={styles.componentInfo}>3 up breaker component</div>
    <ThreeUpBreaker
      content1={{ markdown: 'Any parent knows what a child or two can do to a home in short order. Imagine what 2,500 can do to a school building! We must choose materials that can co-exist with the natural energy of children—or that can be replaced easily when it is time' }}
      content2={{ markdown: 'Any parent knows what a child or two can do to a home in short order. Imagine what 2,500 can do to a school building! We must choose materials that can co-exist with the natural energy of children—or that can be replaced easily when it is time' }}
      content3={{ markdown: 'Any parent knows what a child or two can do to a home in short order. Imagine what 2,500 can do to a school building! We must choose materials that can co-exist with the natural energy of children—or that can be replaced easily when it is time.Any parent knows what a child or two can do to a home in short order. Imagine what 2,500 can do to a school building! We must choose materials that can co-exist with the natural energy of children—or that can be replaced easily when it is time' }}
      title1="A School of One"
      title2="Exceptional Faculty"
      title3="Progressive Pedagogy"
    />

    <div className={styles.componentInfo}>Categorized list with thumbnails</div>
    <ThumbnailsList
      item1Asset={{ alt: 'Image 1 alt', image: largeImage }}
      item1Description="Est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit lorem."
      item1Title="Charlie Friedlander"
      item2Asset={{ alt: 'Image 2 alt', image: largeImage }}
      item2Description="Est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit lorem."
      item2Title="Charlie Friedlander"
      item3Asset={{ alt: 'Image 3 alt', image: largeImage }}
      item3Description="Est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit lorem."
      item3Title="Charlie Friedlander"
      title="Our Heads"
    />
  </PageWrapper>
);

export default Category;
