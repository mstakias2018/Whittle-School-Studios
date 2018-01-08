import {
  CONTENTFUL_SOCIAL_NETWORK_MAP,
  SOCIAL_NETWORK_CONFIG,
} from '../constants/social-networks';

exports.transformSocialNetworks = (networks, socialNetworkUrls, translation) => {
  let networksArray = [];

  if (networks) {
    networksArray = networks.map((n) => {
      const network = CONTENTFUL_SOCIAL_NETWORK_MAP[n];
      return {
        label: translation(`social.${network}`),
        network,
        url: socialNetworkUrls[network],
        ...SOCIAL_NETWORK_CONFIG[network],
      };
    });
  }

  return networksArray;
};
