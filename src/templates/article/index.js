import React from 'react';
import * as PropTypes from 'prop-types';

import ContentModules from '../../content-modules';

const propTypes = {
  data: PropTypes.object.isRequired
};

class ArticleTemplate extends React.Component {
  render() {
    const article = this.props.data.contentfulArticlePage;
    const {headline, modules} = article;
    return (
      <div>
        <h1>{headline}</h1>
        {modules && <ContentModules modules={modules} />}
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
        __typename
        ... on ContentfulInlineVideo {
          description
          video {
            id
            file {
              url
              fileName
              contentType
            }
          }
        }
        ... on ContentfulBodyText {
          content {
            childMarkdownRemark {
              html
            }
          }
          hasDropCap
        }
      }
    }
  }
`;
