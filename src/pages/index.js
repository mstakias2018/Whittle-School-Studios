import React from 'react';
import Link from 'gatsby-link';

import PageWrapper from '../components/structural/page-wrapper';

const IndexPage = () => (
  <PageWrapper>
    <h1>The Whittle School</h1>
    <ul>
      <li>
        <Link to="/category">Category</Link>
      </li>
      <li>
        <Link to="/category-cn">Category (China)</Link>
      </li>
      <li>
        <Link to="/article">Article</Link>
      </li>
      <li>
        <Link to="/article-cn">Article (China)</Link>
      </li>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/grid-guide">Grid guide</Link>
      </li>
      <li>
        <Link to="/home-cn">Home (China)</Link>
      </li>
      <li>
        <Link to="/style-guide">Style guide</Link>
      </li>
    </ul>
  </PageWrapper>
);

export default IndexPage;
