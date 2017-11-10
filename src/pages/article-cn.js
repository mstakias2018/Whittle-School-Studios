import React from 'react';
import cx from 'classnames';

import Title from '../components/global/title';
import PageHead from '../components/global/page-head';
import BodyText from '../content-modules/global/body-text';

import { PAGE_TYPE } from '../constants/settings';

import largeImage from '../test-content/images/article-large.jpg';
import mediumImage from '../test-content/images/article-medium.jpg';
import smallImage from '../test-content/images/article-small.jpg';

import styles from './modules.module.css';

const ArticleCn = () => (
  <div className={cx('language--chinese', styles.moduleWrapper)}>
    <div className={styles.component}>
      <Title
        text="促进我们校园的经济文化多样性宋体华文仿宋"
        type={PAGE_TYPE.ARTICLE}
      />
      <BodyText
        content={{
          markdown: `当第一所Whittle School＆Studios校园于2020年开放时，超过五年的报告将投入创造这些学习空间。 我们开始寻找一位世界知名的建筑师，他将为自己和他的团队致力于这个努力十年。 我们希望有人能够把他的头脑放在地上的云层和脚下，那位艺术家的人有全球经验，实践和规模来实现他的愿景。 在与建筑中许多伟人见面之后，我们选择了Renzo Piano及其130位热那亚和巴黎队。 在不到48小时的时间内，文字链接到最偏远的村庄。

如果一所学校必须了解如何帮助学生实现这一点，同样重要的一点是学校知道如何提供这些成果。 Whittle School＆Studios的运营模式将在2020年第一个校园开放之前的几年内建立，基于以下原则。 我们认为，仔细遵守这些主题将导致预期的结果。 如果一所学校必须了解如何帮助学生实现这一点，同样重要的一点是学校知道如何提供这些成果。 如果一所学校必须了解如何帮助学生实现这一点，同样重要的一点是学校知道如何提供这些成果。 Whittle School＆Studios的运营模式将在2020年第一个校园开放之前的几年内建立，基于以下原则。 我们认为，仔细遵守这些主题将导致预期的结果。
          `,
        }}
      />
      </div>
      <div className={styles.component}>
        <PageHead
          alt="Picture preview"
          image={{
            small: smallImage,
            medium: mediumImage,
            large: largeImage,
          }}
          headline="促进我们校园的经济文化多样性宋体华文仿宋"
          type={PAGE_TYPE.ARTICLE}
        />
      </div>
  </div>
);

export default ArticleCn;
