import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { adaptSourcesBySize } from '../../../utils/images';
import { PROP_SHAPES } from '../../../constants/custom-property-types';

const propTypes = {
  description: PropTypes.string.isRequired,
  imageSources: PROP_SHAPES.IMAGE_SOURCES,
  keywords: PropTypes.string,
  pageType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

class MetaTags extends React.Component {
  state = {
    pageUrl: '',
  };

  componentDidMount() {
    this.setState({
      pageUrl: window.location.href,
    });
  }

  render() {
    const {
      description,
      imageSources,
      keywords,
      pageType,
      title,
    } = this.props;

    let pageImage = '';

    if (imageSources) {
      const { largestSrc } = adaptSourcesBySize(imageSources);
      pageImage = largestSrc;
    }

    return (
      <Helmet>
        <meta
          content={pageType}
          property="og:type"
        />
        {this.state.pageUrl &&
        <meta
          content={this.state.pageUrl}
          property="og:url"
        />
        }
        <meta
          content={title}
          property="og:title"
        />
        {pageImage &&
        <meta
          content={pageImage}
          property="og:image"
        />
        }
        <meta
          content={description}
          property="og:description"
        />
        <meta
          content={description}
          name="description"
        />
        {keywords &&
        <meta
          content={keywords}
          name="keywords"
        />
        }
      </Helmet>
    );
  }
}

MetaTags.propTypes = propTypes;

export default MetaTags;
