import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header';
import Footer from '../footer';
import Fab from '../fab';

import { PROP_TYPES } from '../../../constants/custom-property-types';
import { CLASSES } from '../../../constants/classes';

const PageWrapper = ({ children, localizedSlugList, subNavProps }) => ([
  <Header
    key="header"
    localizedSlugList={localizedSlugList}
    subNavProps={subNavProps}
  />,
  <Fab key="fab" />,
  <main
    className={CLASSES.PAGE_CONTENT}
    key="main"
  >
    {children}
  </main>,
  <Footer key="footer" />,
]);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  localizedSlugList: PROP_TYPES.LOCALIZED_SLUG_LIST,
  subNavProps: PROP_TYPES.SUB_NAV_PROPS,
};

export default PageWrapper;
