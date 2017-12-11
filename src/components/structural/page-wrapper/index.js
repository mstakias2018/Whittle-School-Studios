import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header';
import Footer from '../footer';
import Fab from '../fab';
import SiteInfo from '../../site-info';

import { PROP_TYPES } from '../../../constants/custom-property-types';
import { CLASSES } from '../../../constants/classes';
import { ENV } from '../../../constants/env';

const PageWrapper = ({
  children,
  localizedSlugList,
  subNavProps,
}, { translations }) => ([
  <Header
    key="header"
    localizedSlugList={localizedSlugList}
    subNavProps={subNavProps}
  />,
  <Fab key="fab" />,
  <main
    aria-label={translations.general.mainAriaLabel}
    className={CLASSES.PAGE_CONTENT}
    key="main"
  >
    {children}
  </main>,
  ...(process.env.GATSBY_ENV === ENV.STAGING ? [<SiteInfo key="siteInfo" />] : []),
  <Footer key="footer" />,
]);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  localizedSlugList: PROP_TYPES.LOCALIZED_SLUG_LIST,
  subNavProps: PROP_TYPES.SUB_NAV_PROPS,
};
PageWrapper.contextTypes = { translations: PropTypes.object.isRequired };

export default PageWrapper;
