import 'babel-polyfill';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import detectTouchEvents from 'detect-touch-events';
import cx from 'classnames';

import VirtualGrid from './virtual-grid/virtual-grid';

import '../assets/styles/main.css';
/* Gatsby was having issues loading fonts from files into the styles folder,
   so fonts will live in layouts/ */
import './fonts.module.css';

import { PROP_SHAPES } from '../constants/custom-property-types';
import {
  LANGUAGE,
  LANGUAGE_CLASS,
  LANGUAGE_CONTENTFUL_LOCALE,
} from '../constants/regions';
import { parseLink } from '../utils/global';
import { getLanguageFromPathname } from '../utils/regions';
import { transformSocialNetworks } from '../utils/social-networks';
import { formatFooterLinks } from '../utils/nav';

const { ENV } = require('../constants/env');

const LAYOUT_MODEL = {
  FOOTER: 'allContentfulFooter',
  HEADER: 'allContentfulHeader',
  SETTINGS: 'allContentfulGlobalSettings',
  TRANSLATIONS: 'allContentfulGlobalTranslations',
};

class TemplateWrapper extends Component {
  state = {
    isTouchDevice: false,
  };

  getChildContext() {
    const { data, history, location: { pathname } } = this.props;
    const language = getLanguageFromPathname(pathname) || LANGUAGE.ENGLISH;
    const getLanguageDataFor = (key) => {
      let out;

      data[key].edges.some(({ node: { locale, ...props } }) => {
        if (locale === LANGUAGE_CONTENTFUL_LOCALE[language]) {
          out = props;
          return true;
        }
        return false;
      });

      return out;
    };

    const {
      contentPageShareIcons,
      fabText: { file: { url } },
      fabLinkExternal,
      fabLinkInternal,
      footerShareIcons,
      ...socialNetworkUrls
    } = getLanguageDataFor(LAYOUT_MODEL.SETTINGS);
    const {
      translations: { internal: { content: stringifiedTranslations } },
    } = getLanguageDataFor(LAYOUT_MODEL.TRANSLATIONS);
    const translations = JSON.parse(stringifiedTranslations);

    return {
      fabLink: parseLink({ external: fabLinkExternal, internal: fabLinkInternal }),
      fabTextImage: url,
      footerData: formatFooterLinks(getLanguageDataFor(LAYOUT_MODEL.FOOTER)),
      headerData: getLanguageDataFor(LAYOUT_MODEL.HEADER).contentPages,
      history,
      language,
      pathname,
      socialIcons: {
        contentPage: transformSocialNetworks(
          contentPageShareIcons,
          socialNetworkUrls,
          translations,
        ),
        footer: transformSocialNetworks(
          footerShareIcons,
          socialNetworkUrls,
          translations,
        ),
      },
      translations,
    };
  }

  componentDidMount() {
    this.setState({
      isTouchDevice: detectTouchEvents.hasSupport,
    });
  }

  render() {
    const { language, translations } = this.getChildContext();

    return (
      <div
        className={cx({
          _touchDevice: this.state.isTouchDevice,
          wrapper: true,
          [`wrapper_is${LANGUAGE_CLASS[language]}`]: true,
        })}
      >
        <Helmet
          htmlAttributes={{ lang: LANGUAGE_CONTENTFUL_LOCALE[language] }}
          titleTemplate={`%s | ${translations.general.schoolName}`}
        />
        {this.props.children()}
        {process.env.GATSBY_ENV !== ENV.PRODUCTION &&
          <VirtualGrid />
        }
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PROP_SHAPES.GLOBAL_SETTINGS.isRequired,
  history: PROP_SHAPES.HISTORY.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
};

TemplateWrapper.childContextTypes = {
  fabLink: PropTypes.string.isRequired,
  fabTextImage: PropTypes.string.isRequired,
  footerData: PROP_SHAPES.FOOTER_DATA.isRequired,
  headerData: PROP_SHAPES.HEADER_DATA.isRequired,
  history: PROP_SHAPES.HISTORY.isRequired,
  language: PROP_SHAPES.LANGUAGE.isRequired,
  pathname: PropTypes.string.isRequired,
  socialIcons: PropTypes.object.isRequired,
  translations: PropTypes.object.isRequired,
};

export default TemplateWrapper;

export const pageQuery = graphql`
  fragment footerLink on ContentfulFooterLink {
    linkTitle
    linkDestinationExternal
    linkDestinationInternal {
      slug
      parentCategory: contentpage {
        slug
      }
    }
  }

  query globalQuery {
    allContentfulHeader {
      edges {
        node {
          locale: node_locale
          contentPages {
            title: navTitle
            link: slug
          }
        }
      }
    }

    allContentfulFooter {
      edges {
        node {
          locale: node_locale
          primaryLink1 {
            ...footerLink
          }
          utilityLink1 {
            ...footerLink
          }
          utilityLink2 {
            ...footerLink
          }
          utilityLink2Children {
            ...footerLink
          }
          primaryLink2 {
            ...footerLink
          }
          primaryLink2Children {
            ...footerLink
          }
          primaryLink3 {
            ...footerLink
          }
          primaryLink3Children {
            ...footerLink
          }
          primaryLink4 {
            ...footerLink
          }
          primaryLink4Children {
            ...footerLink
          }
          primaryLink5 {
            ...footerLink
          }
          primaryLink5Children {
            ...footerLink
          }
          primaryLink6 {
            ...footerLink
          }
          primaryLink6Children {
            ...footerLink
          }
        }
      }
    }

    allContentfulGlobalSettings {
      edges {
        node {
          locale: node_locale
          fabText {
            file {
              url
            }
          }
          fabLinkInternal {
            slug
            parentCategory: contentpage {
              slug
            }
          }
          fabLinkExternal
          contentPageShareIcons
          footerShareIcons

          # These should match our SOCIAL_NETWORK constant
          FACEBOOK: facebookUrl
          TWITTER: twitterUrl
          WECHAT: weChatUrl
          WEIBO: weiboUrl
        }
      }
    }

    allContentfulGlobalTranslations {
      edges {
        node {
          locale: node_locale
          translations {
            internal {
              content
            }
          }
        }
      }
    }
  }
`;
