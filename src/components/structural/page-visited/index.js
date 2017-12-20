import React from 'react';
import PropTypes from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

const propTypes = {
  children: PropTypes.node.isRequired,
  cookies: PropTypes.instanceOf(Cookies).isRequired,
  pageId: PropTypes.string,
  viewedPage: PropTypes.func.isRequired,
};

class PageVisited extends React.Component {
  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  isBottom = el => el.getBoundingClientRect().bottom <= window.innerHeight;

  trackScrolling = () => {
    const { cookies, pageId, viewedPage } = this.props;
    const wrappedElement = this.pageWrapper;

    if (this.isBottom(wrappedElement)) {
      const visitedPages = cookies.get('visitedPages') || [];

      if (!visitedPages.includes(pageId)) {
        visitedPages.push(pageId);
        viewedPage(true);
        cookies.set('visitedPages', JSON.stringify(visitedPages), { path: '/' });
      }
      document.removeEventListener('scroll', this.trackScrolling);
    }
  };

  render() {
    const { children } = this.props;

    return (
      <div ref={(el) => { this.pageWrapper = el; }}>
        {children}
      </div>
    );
  }
}

PageVisited.propTypes = propTypes;

export default withCookies(PageVisited);
