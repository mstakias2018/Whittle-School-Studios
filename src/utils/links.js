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
