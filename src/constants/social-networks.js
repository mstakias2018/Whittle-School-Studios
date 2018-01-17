import iconFacebook from '../assets/images/icon-facebook.svg';
import iconTwitter from '../assets/images/icon-twitter.svg';
import iconWeChat from '../assets/images/icon-we-chat.svg';
import iconWeibo from '../assets/images/icon-weibo.svg';

const SOCIAL_NETWORK = {
  FACEBOOK: 'FACEBOOK',
  TWITTER: 'TWITTER',
  WECHAT: 'WECHAT',
  WEIBO: 'WEIBO',
};

exports.SOCIAL_NETWORK = SOCIAL_NETWORK;

exports.CONTENTFUL_SOCIAL_NETWORK_MAP = {
  Facebook: SOCIAL_NETWORK.FACEBOOK,
  Twitter: SOCIAL_NETWORK.TWITTER,
  WeChat: SOCIAL_NETWORK.WECHAT,
  Weibo: SOCIAL_NETWORK.WEIBO,
};

exports.SOCIAL_NETWORK_CONFIG = {
  [SOCIAL_NETWORK.FACEBOOK]: {
    getShareLink: ({ url }) => `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    icon: iconFacebook,
  },
  [SOCIAL_NETWORK.TWITTER]: {
    getShareLink: ({ encodedUrl, pageTitle, profileUrl }) => {
      const twitterHandleMatch = profileUrl && profileUrl.match(/twitter\.com\/(\w*)/);
      const twitterHandle = twitterHandleMatch && twitterHandleMatch[1];

      return [
        `https://twitter.com/intent/tweet?url=${encodedUrl}`,
        ...(pageTitle ? [`text=${pageTitle}`] : []),
        ...(twitterHandle ? [`via=${twitterHandle}`] : []),
      ].join('&');
    },
    icon: iconTwitter,
  },
  [SOCIAL_NETWORK.WECHAT]: {
    getShareLink: () => 'https://web.wechat.com/',
    icon: iconWeChat,
  },
  [SOCIAL_NETWORK.WEIBO]: {
    getShareLink: ({ url }) => `http://v.t.sina.com.cn/share/share.php?url=${url}`,
    icon: iconWeibo,
  },
};
