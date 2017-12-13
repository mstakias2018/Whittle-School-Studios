/* eslint-disable max-len */
import React from 'react';

import BodyText from '../../content-modules/global/body-text';
import InlineImage from '../../content-modules/global/inline-image';
import InlineVideo from '../../content-modules/global/inline-video';
import PageWrapper from '../../components/structural/page-wrapper';
import SectionTitle from '../../content-modules/global/section-title';
import List from '../../content-modules/global/list';
import Post from '../../content-modules/global/post';

import { IMAGE_SIZE, IMAGE_SHAPE } from '../../constants/images';

import largeImage from '../../test-content/images/article-large.jpg';
import smallImage from '../../test-content/images/article-small.jpg';

import styles from './modules.module.css';

const CategoryCn = () => (
  <PageWrapper>
    <div className="wrapper_isChinese">
      <div className={styles.componentInfo}>Post</div>
      <Post
        date="2017-01-13"
        link="/"
        shortText="__顕終然省賞__ 批行選部持傷社。光阪傷芳死情彫聞寄家考密集予蔵。不量聞北聞拭針二覧判申年売県名能戦。一以名向写保家朔南必能演機須。万混何落要正表女収芸糸使属警治。奈極投北同載佐国賠辞検田。護竹遺未歴前芸題竹帯窮雪那決。住辰壊砲世定示多手査森城資牧組罪権。勢入勇務評問能催向国得政政特同作"
        source="県名能戦"
        title="明辺宅横後達社翻購択面将健"
      />
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

      <div className={styles.componentInfo}>List</div>
      <List data={[{
        description: '[金政所间风族争验口这部如](/#), 金政所间风族争验口这部如.',
        title: '金政所间风族争验口这部如',
      }, {
        description: '[金政所间风族争验口这部如](/#), 金政所间风族争验口这部如.',
        title: '金政所间风族争验口这部如',
      }, {
        description: '金政所间风族争验口这部如 金政所间风 所间风.',
        title: '金政所间风族争验口这部如',
      }, {
        description: '[金政所间风族争验口这部如](/#), 金政所间风族争验口这部如.',
        title: '金政所间风族争验口这部如',
      }, {
        description: '[金政所间风族争验口这部如](/#), 金政如.',
        title: '金政所间风族争验口这部如',
      }, {
        description: '[金政所间风族争验口这部如](/#), 金政所间风族争验口这部如.',
        title: '金政所间风族争验口这部如',
      }]}
      />

      <div className={styles.componentInfo}>Section title</div>
      <SectionTitle
        number={5}
        title="度応格改応記則用更現村開道図特"
      />
    </div>
  </PageWrapper>
);

export default CategoryCn;
