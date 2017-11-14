/* eslint-disable max-len */
import React from 'react';

import Title from '../components/global/title';
import BodyText from '../content-modules/global/body-text';

import { IMAGE_BP } from '../constants/images';
import { PAGE_TYPE } from '../constants/settings';
import PageHead from '../components/global/page-head';

import largeImage from '../test-content/images/category-large.jpg';
import mediumImage from '../test-content/images/category-medium.jpg';
import smallImage from '../test-content/images/category-small.jpg';

import styles from './modules.module.css';

const Category = () => (
  <div className={styles.moduleWrapper}>
    <div className={styles.component}>
      <Title
        text="Commitment
  to Excellence in Education"
        type={PAGE_TYPE.CATEGORY}
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
    </div>
    <div className={styles.component}>
      <PageHead
        headline="Commitment
  to Excellence in Education"
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
        subhead="Imagine the first global school, created by an international consortium of educators, architects, artists, technologists and experts in law, real estate, recruitment and more."
        type={PAGE_TYPE.CATEGORY}
      />
    </div>
    <div className={styles.component}>
      <PageHead
        headline="Commitment
  to Excellence in Education"
        subhead="Imagine the first global school, created by an international consortium of educators, architects, artists, technologists and experts in law, real estate, recruitment and more."
        type={PAGE_TYPE.CATEGORY}
      />
    </div>
  </div>
);

export default Category;
