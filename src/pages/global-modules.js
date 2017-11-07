import React from 'react';

import BodyText from '../content-modules/global/body-text';
import Title from '../components/global/title';

import { alignment as TitleAlign, types as TitleTypes } from '../components/global/title/types';

import styles from './global-modules.module.css';

const GlobalModules = () => (
  <div className={styles.globalModule}>
    <h1>Global modules</h1>

    <Title
      align={TitleAlign.alignLeft}
      text="Title text *Some text*"
      type={TitleTypes.typeCategory}
    />

    <BodyText
      content={{
        childMarkdownRemark: {
          html: `
            <p>Deep v slow-carb next level bespoke shaman. Intelligentsia helvetica enamel pin flexitarian irony, banjo chillwave dreamcatcher cloud bread franzen ugh drinking vinegar raw denim williamsburg tote bag.</p>

            <p>Photo booth tumeric activated charcoal actually. Roof party PBR&B scenester cold-pressed, brunch chicharrones cloud bread kale chips green juice gluten-free glossier. Biodiesel listicle master cleanse copper mug godard, jianbing shoreditch four dollar toast PBR&B.</p>

            <p>Activated charcoal readymade hammock beard 8-bit art party bitters butcher YOLO pop-up umami gluten-free kombucha retro fashion axe. 90's mixtape art party, pop-up meh vexillologist venmo man braid knausgaard kale chips.</p>
          `
        }
      }}
    />
  </div>
);

export default GlobalModules;
