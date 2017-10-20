import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div>
    <h1>The Whittle School</h1>
    <ul>
      <li>
        <Link to="/style-guide">Style guide</Link>
      </li>
      <li>
        <Link to="/article-modules">Article modules</Link>
      </li>
      <li>
        <Link to="/home-modules">Home modules</Link>
      </li>
    </ul>
  </div>
);

export default IndexPage;
