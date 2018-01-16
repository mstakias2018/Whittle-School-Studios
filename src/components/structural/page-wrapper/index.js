import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../header';
import Footer from '../footer';
import Fab from '../fab';
import SiteInfo from '../../site-info';
import Recirculation from '../recirculation';
import Skip from '../skip-to-content';

import { PROP_SHAPES } from '../../../constants/custom-property-types';
import { CLASSES } from '../../../constants/classes';
import { ENV } from '../../../constants/env';

class PageWrapper extends React.Component {
  state = { mainElementAttributes: {} };

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
      localizedSlugList,
      shouldDisableFab,
      subNavProps,
      viewedPage,
    } = this.props;
    const { translation } = this.context;

    return (
      <Fragment>
        <Header
          localizedSlugList={localizedSlugList}
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
        {(process.env.GATSBY_ENV === ENV.STAGING) &&
        <SiteInfo />
        }
        {subNavProps &&
        <Recirculation
          items={subNavProps.navItems}
        />
        }
        <Footer />
      </Fragment>
    );
  }
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  localizedSlugList: PROP_SHAPES.LOCALIZED_SLUG_LIST,
  shouldDisableFab: PropTypes.bool,
  subNavProps: PROP_SHAPES.SUB_NAV_PROPS,
  viewedPage: PropTypes.bool,
};
PageWrapper.contextTypes = { translation: PropTypes.func.isRequired };

export default PageWrapper;
