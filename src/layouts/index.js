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

class TemplateWrapper extends Component {
  state = {
    isTouchDevice: false,
  };

  getChildContext() {
    const { data, history, location: { pathname } } = this.props;
    const language = getLanguageFromPathname(pathname) || LANGUAGE.ENGLISH;
    const {
      contentPageShareIcons,
      fabText: { file: { url } },
      fabLinkExternal,
      fabLinkInternal,
      footerShareIcons,
      ...socialNetworkUrls
    } = data[`SETTINGS_${language}`];
    const {
      translations: { internal: { content: stringifiedTranslations } },
    } = data[`TRANSLATIONS_${language}`];
    const translations = JSON.parse(stringifiedTranslations);

    return {
      fabLink: parseLink({ external: fabLinkExternal, internal: fabLinkInternal }),
      fabTextImage: url,
      footerData: formatFooterLinks(data[`FOOTER_${language}`]),
      headerData: data[`HEADER_${language}`].contentPages,
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
  fragment header on ContentfulHeader {
    contentPages {
      title: navTitle
      link: slug
    }
  }

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

  fragment footer on ContentfulFooter {
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

  fragment settings on ContentfulGlobalSettings {
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

  fragment translations on ContentfulGlobalTranslations {
    translations {
      internal {
        content
      }
    }
  }

  query globalQuery {
    HEADER_ENGLISH: contentfulHeader(node_locale: {eq: "en-US"}) {
      ...header
    }

    HEADER_CHINESE: contentfulHeader(node_locale: {eq: "zh-CN"}) {
      ...header
    }

    FOOTER_ENGLISH: contentfulFooter(node_locale: { eq: "en-US" }) {
      ...footer
    }

    FOOTER_CHINESE: contentfulFooter(node_locale: { eq: "zh-CN" }) {
      ...footer
    }

    SETTINGS_ENGLISH: contentfulGlobalSettings(node_locale: {eq: "en-US"}) {
      ...settings
    }

    SETTINGS_CHINESE: contentfulGlobalSettings(node_locale: {eq: "zh-CN"}) {
      ...settings
    }

    TRANSLATIONS_ENGLISH: contentfulGlobalTranslations(node_locale: {eq: "en-US"}) {
      ...translations
    }

    TRANSLATIONS_CHINESE: contentfulGlobalTranslations(node_locale: {eq: "zh-CN"}) {
      ...translations
    }
  }
`;
