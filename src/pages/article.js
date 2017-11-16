/* eslint-disable max-len */
import React from 'react';

import Title from '../components/global/title';
import PageHead from '../components/global/page-head';

import BodyText from '../content-modules/global/body-text';
import InlineImage from '../content-modules/global/inline-image';
import Carousel from '../content-modules/global/carousel';

import { IMAGE_BP, IMAGE_SHAPE } from '../constants/images';
import { PAGE_TYPE } from '../constants/settings';

import largeImage from '../test-content/images/article-large.jpg';
import mediumImage from '../test-content/images/article-medium.jpg';
import smallImage from '../test-content/images/article-small.jpg';

import styles from './modules.module.css';

const Article = () => (
  <div className={styles.moduleWrapper}>
    <div className={styles.component}>
      <Title
        text="Promoting Economic & Cultural Diversity Across Our Campuses"
        type={PAGE_TYPE.ARTICLE}
      />
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
              caption: 'Caption Loreum Ipsum: Lorem ipsum cum sociis natoque penatibus et magnis dis parturient montes, nascetur',
            },
            {
              original: largeImage,
              originalAlt: 'Alt 3',
              caption: 'Caption three',
            },
          ]
        }
      />
      <BodyText
        content={{
          markdown: `Favoring our work is the emergence of a new educational canon thanks, in large part, to the di cult, pioneering e orts of so many change agents who have gone before us. We stand on their shoulders. They taught us that a modern school is one that thinks as much about learning as teaching; knows that how one learns will outlast what one learns; hopes to bring about the end of lock-step, one-size- ts-all education; understands that the emotional development of its students must also be given time; intuits that the physical design of a facility is a lesson unto itself; believes that a well- designed system of schools will surpass a single one; harnesses the horses of our new digital age; appreciates that education can no longer be bound by local or national jurisdictions; and works to make social responsibility much more than its scholarship program.

Favoring our work is the emergence of a new educational canon thanks, in large part, to the di cult, pioneering e orts of so many change agents who have gone before us. We stand on their shoulders. They taught us that a modern school is one that thinks as much about learning as teaching; knows that how one learns will outlast what one learns; hopes to bring about the end of lock-step, one-size- ts-all education; understands that the emotional development of its students must also be given time; intuits that the physical design of a facility is a lesson unto itself; believes that a well- designed system of schools will surpass a single one; harnesses the horses of our new digital age; appreciates that education can no longer be bound by local or national jurisdictions; and works to make social responsibility much more than its scholarship program.

Favoring our work is the emergence of a new educational canon thanks, in large part, to the di cult, pioneering e orts of so many change agents who have gone before us. We stand on their shoulders. They taught us that a modern school is one that thinks as much about learning as teaching; knows that how one learns will outlast what one learns; hopes to bring about the end of lock-step, one-size- ts-all education; understands that the emotional development of its students must also be given time; intuits that the physical design of a facility is a lesson unto itself; believes that a well- designed system of schools will surpass a single one; harnesses the horses of our new digital age; appreciates that education can no longer be bound by local or national jurisdictions; and works to make social responsibility much more than its scholarship program.
          `,
        }}
        isFirstModule
      />
      <InlineImage
        alt="Demo alt"
        caption="Caption Loreum Ipsum: Lorem ipsum cum sociis natoque penatibus et magnis dis parturient montes, nascetur "
        imageSources={{
          [IMAGE_BP.SMALL]: {
            src: smallImage,
          },
        }}
        shape={IMAGE_SHAPE.SQUARE}
      />
      <InlineImage
        alt="Demo alt"
        caption="Caption Loreum Ipsum: Lorem ipsum cum sociis natoque penatibus et magnis dis parturient montes, nascetur "
        imageSources={{
          [IMAGE_BP.LARGE]: {
            src: largeImage,
          },
        }}
        shape={IMAGE_SHAPE.RECTANGLE}
      />
      <BodyText
        content={{
          markdown: `Favoring our work is the emergence of a new educational canon thanks, in large part, to the di cult, pioneering e orts of so many change agents who have gone before us. We stand on their shoulders. They taught us that a modern school is one that thinks as much about learning as teaching; knows that how one learns will outlast what one learns; hopes to bring about the end of lock-step, one-size- ts-all education; understands that the emotional development of its students must also be given time; intuits that the physical design of a facility is a lesson unto itself; believes that a well- designed system of schools will surpass a single one; harnesses the horses of our new digital age; appreciates that education can no longer be bound by local or national jurisdictions; and works to make social responsibility much more than its scholarship program.

Favoring our work is the emergence of a new educational canon thanks, in large part, to the di cult, pioneering e orts of so many change agents who have gone before us. We stand on their shoulders. They taught us that a modern school is one that thinks as much about learning as teaching; knows that how one learns will outlast what one learns; hopes to bring about the end of lock-step, one-size- ts-all education; understands that the emotional development of its students must also be given time; intuits that the physical design of a facility is a lesson unto itself; believes that a well- designed system of schools will surpass a single one; harnesses the horses of our new digital age; appreciates that education can no longer be bound by local or national jurisdictions; and works to make social responsibility much more than its scholarship program.

Favoring our work is the emergence of a new educational canon thanks, in large part, to the di cult, pioneering e orts of so many change agents who have gone before us. We stand on their shoulders. They taught us that a modern school is one that thinks as much about learning as teaching; knows that how one learns will outlast what one learns; hopes to bring about the end of lock-step, one-size- ts-all education; understands that the emotional development of its students must also be given time; intuits that the physical design of a facility is a lesson unto itself; believes that a well- designed system of schools will surpass a single one; harnesses the horses of our new digital age; appreciates that education can no longer be bound by local or national jurisdictions; and works to make social responsibility much more than its scholarship program.
          `,
        }}
      />
    </div>
    <div className={styles.component}>
      <PageHead
        headline="Someone with his head in the clouds & feet on the ground."
        subhead="If it is essential for a school to understand well what it wants to help its students achieve, it is equally important for a school to know how it can deliver those results."
        type={PAGE_TYPE.ARTICLE}
      />
    </div>
    <div className={styles.component}>
      <PageHead
        headline="Someone with his head in the clouds & feet on the ground."
        imageAlt="Picture preview"
        imageSources={{
          [IMAGE_BP.SMALL]: {
            src: smallImage,
          },
          [IMAGE_BP.MEDIUM]: {
            src: mediumImage,
          },
          [IMAGE_BP.LARGE]: {
            src: largeImage,
          },
        }}
        subhead="If it is essential for a school to understand well what it wants to help its students achieve, it is equally important for a school to know how it can deliver those results."
        type={PAGE_TYPE.ARTICLE}
      />
    </div>
    <div className={styles.component}>
      <PageHead
        headline="Promoting Economic & Cultural Diversity Across Our Campuses"
        imageAlt="Picture preview"
        imageSources={{
          [IMAGE_BP.SMALL]: {
            src: smallImage,
          },
          [IMAGE_BP.MEDIUM]: {
            src: mediumImage,
          },
          [IMAGE_BP.LARGE]: {
            src: largeImage,
          },
        }}
        type={PAGE_TYPE.ARTICLE}
      />
    </div>
  </div>
);

export default Article;
