import React from 'react';

import PageWrapper from '../components/structural/page-wrapper';
import NotFound from '../components/structural/not-found';

const PAGE_NOT_FOUND = {
  text: {
    markdown: 'Unfortunately this link doesnt exsist, please check your url or return to the homepage.',
  },
  title: 'Sorry, page not found.',
};

const NotFoundPage = () => (
  <PageWrapper>
    <NotFound {...PAGE_NOT_FOUND} />
  </PageWrapper>
);

export default NotFoundPage;
