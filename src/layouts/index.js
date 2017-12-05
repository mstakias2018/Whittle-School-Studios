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
  socialIcons: PropTypes.object.isRequired,
  translations: PropTypes.object.isRequired,
};

export default TemplateWrapper;

export const pageQuery = graphql`
  query globalQuery {
    HEADER_ENGLISH: contentfulHeader(node_locale: {eq: "en-US"}) {
      contentPages {
        title: navTitle
        link: slug
      }
    }

    HEADER_CHINESE: contentfulHeader(node_locale: {eq: "zh-CN"}) {
      contentPages {
        title: navTitle
        link: slug
      }
    }

    FOOTER_ENGLISH: contentfulFooter(node_locale: { eq: "en-US" }) {
      primaryLink1 {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
      utilityLink1 {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
      utilityLink2 {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
     utilityLink2Children {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
      primaryLink2 {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
      primaryLink2Children {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
      primaryLink3 {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
      primaryLink3Children {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
      primaryLink4 {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
      primaryLink4Children {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
      primaryLink5 {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
      primaryLink5Children {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
      primaryLink6 {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
      primaryLink6Children {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
    }

    FOOTER_CHINESE: contentfulFooter(node_locale: { eq: "zh-CN" }) {
      primaryLink1 {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
      utilityLink1 {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
      utilityLink2 {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
     utilityLink2Children {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
      primaryLink2 {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
      primaryLink2Children {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
      primaryLink3 {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
      primaryLink3Children {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
      primaryLink4 {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
      primaryLink4Children {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
      primaryLink5 {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
      primaryLink5Children {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
      primaryLink6 {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
      primaryLink6Children {
        linkTitle
        linkDestinationExternal
        linkDestinationInternal {
          slug
          parentCategory: contentpage {
            slug
          }
        }
      }
    }

    SETTINGS_ENGLISH: contentfulGlobalSettings(node_locale: {eq: "en-US"}) {
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

    SETTINGS_CHINESE: contentfulGlobalSettings(node_locale: {eq: "zh-CN"}) {
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
  }
`;
