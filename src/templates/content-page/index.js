import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import ContentModules from '../../content-modules';
import PageHead from '../../components/global/page-head';

import { PROP_TYPES } from '../../constants/custom-property-types';

import adapter from './adapter';
import styles from './content-page.module.css';

/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  data: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  pathContext: PropTypes.shape({
    imageDataByType: PROP_TYPES.IMAGE_DATA_BY_TYPE.isRequired,
  }).isRequired,
};
/* eslint-enable react/no-unused-prop-types */

class ContentPageTemplate extends Component {
  componentWillMount() {
    this.adaptedProps = adapter(this.props);
  }

  render() {
    const {
      headline, imageProps, modules, pageType,
    } = this.adaptedProps;

    return (
      <div className={styles.wrapper}>
        <Helmet title={headline} />
        <PageHead
          headline={headline}
          imageProps={imageProps}
          type={pageType}
        />
        {modules && <ContentModules modules={modules} />}
      </div>
    );
  }
}

ContentPageTemplate.propTypes = propTypes;

export default ContentPageTemplate;

export const pageQuery = graphql`
  query contentPageQuery($id: String!) {
    contentfulContentPage(id: { eq: $id }) {
      headline
      mainImage {
        title
      }
      pageType
      modules {
        __typename
        ... on ContentfulBodyText {
          content {
            markdown: content
          }
        }
      }
    }
  }
`;
