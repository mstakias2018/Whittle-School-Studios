import { PAGE_TYPE } from '../constants/settings';

exports.transformSubnavProps = ({
  categoryTitle,
  categoryDescription,
  currentPageId,
  currentPageType,
  overviewNavTitle,
  categorySlug,
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
        isActive: currentPageType === PAGE_TYPE.CATEGORY,
        link: categorySlug,
        title: overviewNavTitle,
      },
      ...subcategories.map(formatSubCategory),
    ],
  };
};

const createContentPageLink = ({ slug, parentCategory }) => {
  let link = '';

  if (parentCategory) {
    link += `/${parentCategory[0].slug}`;
  }

  return `${link}/${slug}`;
};

const formatFooterLink = ({
  linkTitle,
  linkDestinationInternal,
  linkDestinationExternal,
}) => {
  const link = linkDestinationExternal ||
    createContentPageLink(linkDestinationInternal);

  return {
    link,
    title: linkTitle,
  };
};

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
