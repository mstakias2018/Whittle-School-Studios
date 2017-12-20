import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header';
import Footer from '../footer';
import Fab from '../fab';
import SiteInfo from '../../site-info';
import Recirculation from '../recirculation';

import { PROP_SHAPES } from '../../../constants/custom-property-types';
import { CLASSES } from '../../../constants/classes';
import { ENV } from '../../../constants/env';

const PageWrapper = ({
  children,
  localizedSlugList,
  shouldDisableFab,
  subNavProps,
  viewedPage,
}, { translations }) => ([
  <Header
    key="header"
    localizedSlugList={localizedSlugList}
    subNavProps={subNavProps}
    viewedPage={viewedPage}
  />,
  ...(shouldDisableFab ? [] : [<Fab key="fab" />]),
  <main
    aria-label={translations.general.mainAriaLabel}
    className={CLASSES.PAGE_CONTENT}
    key="main"
  >
    {children}
  </main>,
  ...(process.env.GATSBY_ENV === ENV.STAGING ? [<SiteInfo key="siteInfo" />] : []),
  ...(subNavProps ? [<Recirculation
    items={subNavProps.navItems}
    key="recirculation"
  />] : []),
  <Footer key="footer" />,
]);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  localizedSlugList: PROP_SHAPES.LOCALIZED_SLUG_LIST,
  shouldDisableFab: PropTypes.bool,
  subNavProps: PROP_SHAPES.SUB_NAV_PROPS,
  viewedPage: PropTypes.bool,
};
PageWrapper.contextTypes = { translations: PropTypes.object.isRequired };

export default PageWrapper;
