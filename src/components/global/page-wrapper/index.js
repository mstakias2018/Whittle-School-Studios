import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header';
import Footer from '../footer';
import Fab from '../fab';

import { PROP_TYPES } from '../../../constants/custom-property-types';
import { CLASSES } from '../../../constants/classes';

const PageWrapper = ({ children, subNavProps }) => ([
  <Header
    key="header"
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
  subNavProps: PROP_TYPES.SUB_NAV_PROPS,
};

export default PageWrapper;
