import React from 'react';
import * as PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import ContentModules from '../../content-modules';
import Title from '../../components/global/title';

import styles from './content-page.module.css';

const propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

function ContentPageTemplate({ data: { contentfulContentPage: article } }) {
  const { headline, pageType, modules } = article;
  return (
    <div className={styles.wrapper}>
      <Helmet title={headline} />
      <Title
        text={headline}
        type={pageType}
      />
      {modules && <ContentModules modules={modules} />}
    </div>
  );
}

ContentPageTemplate.propTypes = propTypes;

export default ContentPageTemplate;

export const pageQuery = graphql`
  query contentPageQuery($id: String!) {
    contentfulContentPage(id: { eq: $id }) {
      headline
      pageType
    }
  }
`;
