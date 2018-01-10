import React from 'react';

import PageWrapper from '../components/structural/page-wrapper';
import NotFound from '../components/structural/not-found';

const PAGE_NOT_FOUND = {
  text: {
    markdown: '不幸的是，这个链接不存在，请检查您的网址或返回主页。',
  },
  title: '对不起，页面未找到。',
};

const NotFoundPage = () => (
  <PageWrapper>
    <NotFound {...PAGE_NOT_FOUND} />
  </PageWrapper>
);

export default NotFoundPage;
