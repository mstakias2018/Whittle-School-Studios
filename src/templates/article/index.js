import React from 'react';
import * as PropTypes from 'prop-types';

// import ContentModules from 'content-modules';

const propTypes = {
  data: PropTypes.object.isRequired
};

class ArticleTemplate extends React.Component {
  render() {
    const article = this.props.data.contentfulArticlePage;
    console.log(article);
    const {headline} = article;
    // <ContentModules modules={article.modules} />
    return (
      <div>
        <h1>{headline}</h1>
      </div>
    );
  }
}

ArticleTemplate.propTypes = propTypes;

export default ArticleTemplate;

export const pageQuery = graphql`
  query articlePageQuery($id: String!) {
    contentfulArticlePage(id: {eq: $id}) {
      headline
      modules {
        id
        internal {
          type
        }
      }
    }
  }
`;
