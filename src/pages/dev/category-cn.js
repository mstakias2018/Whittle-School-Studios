/* eslint-disable max-len */
import React from 'react';

import BodyText from '../../content-modules/global/body-text';
import InlineImage from '../../content-modules/global/inline-image';
import InlineVideo from '../../content-modules/global/inline-video';
import PageWrapper from '../../components/structural/page-wrapper';
import SectionTitle from '../../components/global/section-title';
import List from '../../content-modules/global/list';

import { IMAGE_BP, IMAGE_SHAPE } from '../../constants/images';

import largeImage from '../../test-content/images/article-large.jpg';
import smallImage from '../../test-content/images/article-small.jpg';

import styles from './modules.module.css';

import ThreeUpBreaker from '../../content-modules/global/three-up-breaker';

const CategoryCn = () => (
  <PageWrapper>
    <div className="wrapper_isChinese">
      <div className={styles.componentInfo}>3 up breaker component</div>
      <ThreeUpBreaker
        bodyText1="意义状你布者达包查如但看，方之时物力所元老几色五，标花术弦口济克说用我. 斗全取圆公算，理拉石片马口，该J江做. 气中土常劳接理高，持作片表变议京按，权R候建豆周"
        bodyText2="意义状你布者达包查如但看，方之时物力所元老几色五，标花术弦口济克说用我. 斗全取圆公算，理拉石片马口，该J江做. 气中土常劳接理高，持作片表变议京按，权R候建豆周."
        bodyText3="意义状你布者达包查如但看，方之时物力所元老几色五，标花术弦口济克说用我. 斗全取圆公算，理拉石片马口，该J江做. 气中土常劳接理高，持作片表变议京按，权R候建豆周."
        title1="一所学校"
        title2="师资力量雄厚"
        title3="进步的教育学"
      />

      <div className={styles.componentInfo}>3 up breaker component with markdown</div>
      <ThreeUpBreaker
        bodyText1="意义状你布者达包查如但看，<em>**方之时物力所元老几色五**</em>，标花术弦口济克说用我. 斗全取圆公算，理拉石片马口，该J江做. 气中土常劳接理高，持作片表变议京按，权R候建豆周"
        bodyText2="意义状你布者达包查如但看，<em>_方之时物力所元老几色五_</em>，标花术弦口济克说用我. 斗全取圆公算，理拉石片马口，该J江做. 气中土常劳接理高，持作片表变议京按，权R候建豆周."
        bodyText3="意义状你布者达包查如但看，方之时物力所元老几色五，标花术弦口济克说用我. 斗全取圆公算，理拉石片马口，该J江做. 气中土常劳接理高，持作片表变议京按，权R候建豆周."
        title1="一所学校"
        title2="师资力量雄厚"
        title3="进步的教育学"
      />

      <div className={styles.componentInfo}>Video</div>
      <InlineVideo
        alt="适区没接后"
        coverImageSources={{
          [IMAGE_BP.SMALL]: {
            src: smallImage,
          },
          [IMAGE_BP.LARGE]: {
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
          [IMAGE_BP.SMALL]: {
            src: smallImage,
          },
          [IMAGE_BP.LARGE]: {
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
          [IMAGE_BP.SMALL]: {
            src: smallImage,
          },
          [IMAGE_BP.LARGE]: {
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
