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

import { PROP_TYPES } from '../constants/custom-property-types';
import {
  LANGUAGE,
  LANGUAGE_CLASS,
  LANGUAGE_CONTENTFUL_LOCALE,
} from '../constants/regions';
import { getLanguageFromPathname } from '../utils/regions';
import { transformSocialNetworks } from '../utils/social-networks';
import { formatFooterLinks } from '../utils/nav';

class TemplateWrapper extends Component {
  getChildContext() {
    const { data, history, location: { pathname } } = this.props;
    const language = getLanguageFromPathname(pathname) || LANGUAGE.ENGLISH;
    const {
      contentPageShareIcons,
      fabText: { file: { url } },
      footerShareIcons,
      translations: { internal: { content: stringifiedTranslations } },
      ...socialNetworkUrls
    } = data[`SETTINGS_${language}`];
    const translations = JSON.parse(stringifiedTranslations);

    return {
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

  render() {
    const { language, translations } = this.getChildContext();

    return (
      <div
        className={cx({
          _touchDevice: detectTouchEvents.hasSupport,
          wrapper: true,
          [`wrapper_is${LANGUAGE_CLASS[language]}`]: true,
        })}
      >
        <Helmet
          htmlAttributes={{ lang: LANGUAGE_CONTENTFUL_LOCALE[language] }}
          titleTemplate={`%s | ${translations.general.schoolName}`}
        />
        {this.props.children()}
        <VirtualGrid />
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PROP_TYPES.GLOBAL_SETTINGS.isRequired,
  history: PROP_TYPES.HISTORY.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
};

TemplateWrapper.childContextTypes = {
  fabTextImage: PropTypes.string.isRequired,
  footerData: PROP_TYPES.FOOTER_DATA.isRequired,
  headerData: PROP_TYPES.HEADER_DATA.isRequired,
  history: PROP_TYPES.HISTORY.isRequired,
  language: PROP_TYPES.LANGUAGE.isRequired,
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
    translations {
      internal {
        content
      }
    }
    fabText {
      file {
        url
      }
    }
    contentPageShareIcons
    footerShareIcons

    # These should match our SOCIAL_NETWORK constant
    FACEBOOK: facebookUrl
    TWITTER: twitterUrl
    WECHAT: weChatUrl
    WEIBO: weiboUrl
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
  }
`;
