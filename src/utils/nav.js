import { PAGE_TYPE } from '../constants/settings';
import { createContentPageLink, parseLink } from './global';

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

    if (Array.isArray(linkData)) {
      linkList[linkList.length - 1].subLinks = linkData.map(formatFooterLink);
    } else {
      linkList.push(formatFooterLink(linkData));
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
