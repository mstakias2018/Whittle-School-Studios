import {
  LANGUAGE_CONTENTFUL_LOCALE,
  LANGUAGE_PATH,
  REGION_URLS,
} from '../constants/regions';
import { PAGE_TYPE } from '../constants/settings';

const createContentPageLink = ({ slug, parentCategory }) => {
  let link = '';

  if (parentCategory) {
    link += `/${parentCategory[0].slug}`;
  }

  return `${link}/${slug}`;
};

exports.createContentPageLink = createContentPageLink;

const parseLink = ({ external, internal }) => external ||
  (internal && createContentPageLink(internal));

exports.parseLink = parseLink;

exports.transformSubnavProps = ({
  categoryDescription,
  categorySlug,
  categoryTitle,
  currentPageId,
  currentPageType,
  overviewNavTitle,
  parentCategoryId,
  subcategories,
}) => {
  const formatSubCategory = sub => ({
    ...sub,
    isActive: sub.id === currentPageId,
    link: `${categorySlug}/${sub.slug}`,
  });

  return {
    categoryTitle,
    navItems: [
      {
        description: categoryDescription,
        id: parentCategoryId,
        isActive: currentPageType === PAGE_TYPE.CATEGORY,
        link: categorySlug,
        title: overviewNavTitle,
      },
      ...subcategories.map(formatSubCategory),
    ],
  };
};

const formatFooterLink = ({
  linkTitle,
  linkDestinationInternal,
  linkDestinationExternal,
}) => ({
  link: parseLink({
    external: linkDestinationExternal,
    internal: linkDestinationInternal,
  }),
  title: linkTitle,
});

exports.formatFooterLinks = footerData =>
  Object.keys(footerData).sort().reduce((acc, footerLinkName) => {
    const linkData = footerData[footerLinkName];
    const linkListName = /primaryLink/.test(footerLinkName) ?
      'primaryLinks' :
      'utilityLinks';
    const linkList = acc[linkListName];

    if (linkData) {
      if (Array.isArray(linkData)) {
        linkList[linkList.length - 1].subLinks = linkData.map(formatFooterLink);
      } else {
        linkList.push(formatFooterLink(linkData));
      }
    }

    return acc;
  }, {
    primaryLinks: [],
    utilityLinks: [],
  });

exports.transformLocalizedSlugData = ({ edges }) => edges.map(({ node }) => ({
  link: createContentPageLink(node),
  locale: node.locale,
}));

const getCurrentPageWithLocalizedSlugs = (localizedSlugList, language) => {
  let currentPageWithLocalizedSlugs = '';
  localizedSlugList.some(({ locale, link }) => {
    if (LANGUAGE_CONTENTFUL_LOCALE[language] === locale) {
      currentPageWithLocalizedSlugs = link;
      return true;
    }
    return false;
  });
  return currentPageWithLocalizedSlugs;
};

exports.getCurrentPageWithLocalizedSlugs = getCurrentPageWithLocalizedSlugs;

exports.getUrlData = (localizedSlugList, language) => {
  const currentPageWithLocalizedSlugs = getCurrentPageWithLocalizedSlugs(
    localizedSlugList,
    language
  );
  const rootUrl = REGION_URLS[process.env.GATSBY_ENV][process.env.GATSBY_REGION];
  const currentUrl = [
    rootUrl,
    LANGUAGE_PATH[language],
    currentPageWithLocalizedSlugs,
  ].join('');

  return {
    currentUrl,
    rootUrl,
  };
};
