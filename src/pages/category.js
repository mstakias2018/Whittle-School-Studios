import React from 'react';

import Title from '../components/global/title';
import BodyText from '../content-modules/global/body-text';

import { PAGE_TYPE } from '../constants/settings';

import styles from './modules.module.css';

const Category = () => (
  <div className={styles.moduleWrapper}>
    <Title
      text="Commitment
to Excellence in Education"
      type={PAGE_TYPE.CATEGORY}
    />
    <BodyText
      content={{
        hasDropCap: true,
        childMarkdownRemark: {
          html: `
            <p>Favoring our work is the emergence of a new educational canon thanks, in large part, to the di cult, pioneering e orts of so many change agents who have gone before us. We stand on their shoulders. They taught us that a modern school is one that thinks as much about learning as teaching; knows that how one learns will outlast what one learns; hopes to bring about the end of lock-step, one-size- ts-all education; understands that the emotional development of its students must also be given time; intuits that the physical design of a facility is a lesson unto itself; believes that a well- designed system of schools will surpass a single one; harnesses the horses of our new digital age; appreciates that education can no longer be bound by local or national jurisdictions; and works to make social responsibility much more than its scholarship program.</p>
            <p>Favoring our work is the emergence of a new educational canon thanks, in large part, to the di cult, pioneering e orts of so many change agents who have gone before us. We stand on their shoulders. They taught us that a modern school is one that thinks as much about learning as teaching; knows that how one learns will outlast what one learns; hopes to bring about the end of lock-step, one-size- ts-all education; understands that the emotional development of its students must also be given time; intuits that the physical design of a facility is a lesson unto itself; believes that a well- designed system of schools will surpass a single one; harnesses the horses of our new digital age; appreciates that education can no longer be bound by local or national jurisdictions; and works to make social responsibility much more than its scholarship program.</p>
            <p>Favoring our work is the emergence of a new educational canon thanks, in large part, to the di cult, pioneering e orts of so many change agents who have gone before us. We stand on their shoulders. They taught us that a modern school is one that thinks as much about learning as teaching; knows that how one learns will outlast what one learns; hopes to bring about the end of lock-step, one-size- ts-all education; understands that the emotional development of its students must also be given time; intuits that the physical design of a facility is a lesson unto itself; believes that a well- designed system of schools will surpass a single one; harnesses the horses of our new digital age; appreciates that education can no longer be bound by local or national jurisdictions; and works to make social responsibility much more than its scholarship program.</p>
          `
        }
      }}
    />
  </div>
);

export default Category;
