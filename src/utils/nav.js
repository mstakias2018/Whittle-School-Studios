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

const formatFooterLink = ({
  linkTitle,
  linkDestinationInternal,
  linkDestinationExternal,
}) => {
  let link = linkDestinationExternal || '';
  if (!link) {
    const { slug, parentCategory } = linkDestinationInternal;

    if (parentCategory) {
      link += `/${parentCategory[0].slug}`;
    }

    link += `/${slug}`;
  }

  return {
    title: linkTitle,
    link,
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
