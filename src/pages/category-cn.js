/* eslint-disable max-len */
import React from 'react';
import cx from 'classnames';

import styles from './modules.module.css';

import ThreeUpBreaker from '../content-modules/global/three-up-breaker';
import PullQuote from '../content-modules/global/pull-quote';

const CategoryCn = () => (
  <div className={cx('wrapper_isChinese', styles.moduleWrapper)}>
    <div className={styles.component}>
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
      <div className={styles.componentInfo}>Pull quote with author</div>
      <PullQuote
        author="Chris Whittle"
        quote="意义状你布者达包查如但看，方之时物力所元老几色五，标花术弦口济克说用我. 斗全取圆公算，理拉石片马口，该J江做. 气中土常劳接理高，持作片表变议京按，权R候建豆周."
      />
      <div className={styles.componentInfo}>Pull quote without author</div>
      <PullQuote
        quote="意义状你布者达包查如但看，方之时物力所元老几色五，标花术弦口济克说用我. 斗全取圆公算，理拉石片马口，该J江做. 气中土常劳接理高，持作片表变议京按，权R候建豆周."
      />
    </div>
  </div>
);

export default CategoryCn;
