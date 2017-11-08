import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div>
    <h1>The Whittle School</h1>
    <ul>
      <li>
        <Link to="/category">Category</Link>
      </li>
      <li>
        <Link to="/category-cn">Category (China)</Link>
      </li>
      <li>
        <Link to="/subcategory">Subcategory</Link>
      </li>
      <li>
        <Link to="/subcategory-cn">Subcategory (China)</Link>
      </li>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/home-cn">Home (China)</Link>
      </li>
      <li>
        <Link to="/style-guide">Style guide</Link>
      </li>
    </ul>
  </div>
);

export default IndexPage;
