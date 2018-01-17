import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../header';
import Footer from '../footer';
import Fab from '../fab';
import SiteInfo from '../../site-info';
import Recirculation from '../recirculation';
import Skip from '../skip-to-content';
import MetaTags from '../meta-tags';

import { PROP_SHAPES, PROP_TYPES } from '../../../constants/custom-property-types';
import { CLASSES } from '../../../constants/classes';
import { ENV } from '../../../constants/env';
import { getUrlData } from '../../../utils/nav';

class PageWrapper extends React.Component {
  state = { mainElementAttributes: {} };

  getChildContext() {
    const { localizedSlugList = [], language } = this.context;
    const { metaProps } = this.props;

    return {
      ...getUrlData(localizedSlugList, language),
      metaTitle: metaProps && metaProps.title,
    };
  }

  handleSkipToContent = () => {
    this.setState({ mainElementAttributes: { tabIndex: -1 } });
    setTimeout(() => {
      this.mainContent.focus();
    });
  };

  handleSkipBlur = () => {
    setTimeout(() => {
      this.setState({ mainElementAttributes: {} });
    });
  };

  render() {
    const {
      children,
      metaProps,
      shouldDisableFab,
      subNavProps,
      viewedPage,
    } = this.props;
    const { translation } = this.context;

    return (
      <Fragment>
        <MetaTags {...metaProps} />
        <Header
          skipComponent={
            <Skip handleSkipToContent={this.handleSkipToContent} />
          }
          subNavProps={subNavProps}
          viewedPage={viewedPage}
        />
        <main
          aria-label={translation && translation('general.mainAriaLabel')}
          className={CLASSES.PAGE_CONTENT}
          onBlur={this.handleSkipBlur}
          ref={(el) => { this.mainContent = el; }}
          {...this.state.mainElementAttributes}
        >
          {!shouldDisableFab &&
          <Fab />
          }
          {children}
        </main>
        {process.env.GATSBY_ENV === ENV.STAGING && <SiteInfo />}
        {subNavProps && (
          <Recirculation
            items={subNavProps.navItems}
          />
        )}
        <Footer />
      </Fragment>
    );
  }
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  metaProps: PropTypes.shape(PROP_TYPES.META_TAG_PROPS).isRequired,
  shouldDisableFab: PropTypes.bool,
  subNavProps: PROP_SHAPES.SUB_NAV_PROPS,
  viewedPage: PropTypes.bool,
};
PageWrapper.contextTypes = {
  language: PropTypes.string.isRequired,
  localizedSlugList: PROP_SHAPES.LOCALIZED_SLUG_LIST.isRequired,
  translation: PropTypes.func.isRequired,
};
PageWrapper.childContextTypes = {
  currentUrl: PropTypes.string.isRequired,
  metaTitle: PropTypes.string.isRequired,
  rootUrl: PropTypes.string.isRequired,
};

export default PageWrapper;
