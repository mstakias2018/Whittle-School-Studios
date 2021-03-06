import 'babel-polyfill';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import FontFaceObserver from 'fontfaceobserver';

import detectTouchEvents from 'detect-touch-events';
import cx from 'classnames';

import VirtualGrid from './virtual-grid/virtual-grid';

import '../assets/styles/main.css';
/* Gatsby was having issues loading fonts from files into the styles folder,
   so fonts will live in layouts/ */
import './fonts.module.css';

import { PROP_SHAPES } from '../constants/custom-property-types';
import { GLOBAL_IMAGE_TYPE } from '../constants/images';
import {
  LANGUAGE_CLASS,
  LANGUAGE_CONTENTFUL_LOCALE,
  LANGUAGE_PATH,
  REGION_DEFAULT_LANGUAGE,
  REGION_SHORT,
} from '../constants/regions';
import { getLanguageFromPathname } from '../utils/regions';
import { transformSocialNetworks } from '../utils/social-networks';
import { formatFooterLinks, parseLink } from '../utils/nav';
import { ENV } from '../constants/env';

const LAYOUT_MODEL = {
  FOOTER: 'allContentfulFooter',
  HEADER: 'allContentfulHeader',
  IMAGE_DATA: 'allWhittleImageData',
  SETTINGS: 'allContentfulGlobalSettings',
  TRANSLATIONS: 'allContentfulGlobalTranslations',
};

class TemplateWrapper extends Component {
  state = {
    isTouchDevice: false,
  };

  getChildContext() {
    const { history, location: { pathname } } = this.props;
    const language = getLanguageFromPathname(pathname) || REGION_DEFAULT_LANGUAGE[process.env.GATSBY_REGION];

    const {
      contentPageShareIcons,
      fabLinkExternal,
      fabLinkInternal,
      footerShareIcons,
      liveSites,
      ...socialNetworkUrls
    } = this.getLanguageDataFor(LAYOUT_MODEL.SETTINGS);

    const liveSitesUppercase = (liveSites && liveSites.map(country => country.toUpperCase())) || [];
    const globalImages = Object.keys(GLOBAL_IMAGE_TYPE).reduce((acc, imageType) => ({
      ...acc,
      [imageType]: this.getLanguageDataFor(
        LAYOUT_MODEL.IMAGE_DATA,
        n => n.imageType === imageType
      ).src,
    }), {});

    return {
      fabLink: parseLink({ external: fabLinkExternal, internal: fabLinkInternal }),
      fabLinkInternal,
      footerData: formatFooterLinks(this.getLanguageDataFor(LAYOUT_MODEL.FOOTER)),
      globalImages,
      headerData: this.getLanguageDataFor(LAYOUT_MODEL.HEADER).contentPages,
      history,
      language,
      liveSites: liveSitesUppercase,
      pathname,
      socialIcons: {
        contentPage: transformSocialNetworks(
          contentPageShareIcons,
          socialNetworkUrls,
          this.getTranslation
        ),
        footer: transformSocialNetworks(
          footerShareIcons,
          socialNetworkUrls,
          this.getTranslation
        ),
      },
      translation: this.getTranslation,
    };
  }

  componentDidMount() {
    const sansSerifLight = new FontFaceObserver('gt_walsheim_prolight');
    const sansSerifRegular = new FontFaceObserver('gt_walsheim_proregular');
    const serifLight = new FontFaceObserver('freightbiglightregular');
    const serifLightItalic = new FontFaceObserver('freightbiglightitalicregular');
    const serifBook = new FontFaceObserver('freightbigbookregular');
    const serifBookItalic = new FontFaceObserver('freightbigbookitalicregular');
    const sansSerifLightCn = new FontFaceObserver('pingfang_sclight');
    const sansSerifRegularCn = new FontFaceObserver('pingfang_scregular');

    Promise.all([
      sansSerifLight.load(),
      sansSerifRegular.load(),
      serifLight.load(),
      serifLightItalic.load(),
      serifBook.load(),
      serifBookItalic.load(),
      sansSerifLightCn.load(),
      sansSerifRegularCn.load(),
    ]).then(() => {
      window.document.documentElement.className += ' fontsLoaded';
    });

    this.setState({
      isTouchDevice: detectTouchEvents.hasSupport,
    });
  }

  getLanguageDataFor = (key, testFunc) => {
    const { data, location: { pathname } } = this.props;
    const language = getLanguageFromPathname(pathname) || REGION_DEFAULT_LANGUAGE[process.env.GATSBY_REGION];
    let out = {};

    data[key].edges.some(({ node: { locale, dummycontentindex, ...props } }) => {
      if (
        locale === LANGUAGE_CONTENTFUL_LOCALE[language] &&
        !dummycontentindex &&
        (!testFunc || testFunc(props))
      ) {
        out = props;
        return true;
      }
      return false;
    });

    return out;
  };

  getTranslation = (translation) => {
    const translationArray = translation.split('.');
    const { translations } = this.getLanguageDataFor(LAYOUT_MODEL.TRANSLATIONS);
    let item = null;

    if (translations) {
      const { internal: { content: stringifiedTranslations } } = translations;
      const translationsObj = JSON.parse(stringifiedTranslations);

      for (let i = 0; i < translationArray.length; i += 1) {
        if (translationsObj[translationArray[i]] && !item) {
          item = translationsObj[translationArray[i]];
        } else {
          item = item && item[translationArray[i]];
        }
      }
    }

    return item || null;
  }

  render() {
    const { language, translation } = this.getChildContext();

    return (
      <div
        className={cx({
          _notTouchDevice: !this.state.isTouchDevice,
          _touchDevice: this.state.isTouchDevice,
          wrapper: true,
          [`wrapper_is${LANGUAGE_CLASS[language]}`]: true,
        })}
      >
        <Helmet
          htmlAttributes={{ lang: `${LANGUAGE_PATH[language]}-${REGION_SHORT[process.env.GATSBY_REGION]}` }}
          titleTemplate={`%s | ${translation('general.schoolName')}`}
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
  fabLinkInternal: PropTypes.object,
  footerData: PROP_SHAPES.FOOTER_DATA.isRequired,
  globalImages: PROP_SHAPES.GLOBAL_IMAGES.isRequired,
  headerData: PROP_SHAPES.HEADER_DATA.isRequired,
  history: PROP_SHAPES.HISTORY.isRequired,
  language: PROP_SHAPES.LANGUAGE.isRequired,
  liveSites: PropTypes.array,
  pathname: PropTypes.string.isRequired,
  socialIcons: PropTypes.object.isRequired,
  translation: PropTypes.func.isRequired,
};

export default TemplateWrapper;

export const pageQuery = graphql`
  fragment footerLink on ContentfulLink {
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
          dummycontentindex {
            id
          }
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
          dummycontentindex {
            id
          }
          locale: node_locale
          liveSites
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

    allWhittleImageData {
      edges {
        node {
          id
          imageType
          locale: node_locale
          src
        }
      }
    }
  }
`;
