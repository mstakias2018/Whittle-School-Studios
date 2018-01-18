import React from 'react';

import PageWrapper from '../components/structural/page-wrapper';
import NotFound from '../components/structural/not-found';

const NotFoundPage = () => (
  <PageWrapper shouldDisableFab>
    <NotFound />
  </PageWrapper>
);

export default NotFoundPage;
