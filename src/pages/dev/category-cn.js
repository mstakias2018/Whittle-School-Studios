/* eslint-disable max-len */
import React from 'react';

import BodyText from '../../content-modules/global/body-text';
import InlineImage from '../../content-modules/global/inline-image';
import InlineVideo from '../../content-modules/global/inline-video';
import PageWrapper from '../../components/structural/page-wrapper';

import { IMAGE_SIZE, IMAGE_SHAPE } from '../../constants/images';

import largeImage from '../../test-content/images/article-large.jpg';
import smallImage from '../../test-content/images/article-small.jpg';

import styles from './modules.module.css';

const CategoryCn = () => (
  <PageWrapper>
    <div className="wrapper_isChinese">
      <div className={styles.componentInfo}>Video</div>
      <InlineVideo
        alt="适区没接后"
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
        alt="适区没接后"
        caption="队组响至件集构广流资打院，速定各点肃9分因展"
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

      <div className={styles.componentInfo}>Body text (to compare caption alignment)</div>
      <BodyText
        content={{ markdown: '金政所间风族争验口这部如，置调可往识导律作近第，领往几丽日路图己声响。 界特还理增西局利做办，可实公律就器工东自，高次8带办投心气实。 求中形品收满参记，么入正变层织四京，维肃建枪常均' }}
      />

      <div className={styles.componentInfo}>Inline image (new caption alignment)</div>
      <InlineImage
        alt="适区没接后"
        caption="队组响至件集构广流资打院，速定各点肃9分因展"
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
    </div>
  </PageWrapper>
);

export default CategoryCn;
