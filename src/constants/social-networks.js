import iconFacebook from '../assets/images/icon-facebook.svg';
import iconTwitter from '../assets/images/icon-twitter.svg';
import iconWeChat from '../assets/images/icon-we-chat.svg';
import iconWeibo from '../assets/images/icon-weibo.svg';

const SOCIAL_NETWORK = {
  FACEBOOK: 'Facebook',
  TWITTER: 'Twitter',
  WECHAT: 'WeChat',
  WEIBO: 'Weibo',
};

exports.SOCIAL_NETWORK = SOCIAL_NETWORK;

exports.CONTENTFUL_SOCIAL_NETWORK_MAP = {
  Facebook: SOCIAL_NETWORK.FACEBOOK,
  Twitter: SOCIAL_NETWORK.TWITTER,
  Weibo: SOCIAL_NETWORK.WEIBO,
  WeChat: SOCIAL_NETWORK.WECHAT,
};

exports.SOCIAL_NETWORK_CONFIG = {
  [SOCIAL_NETWORK.FACEBOOK]: {
    icon: iconFacebook,
    shareLink: 'https://www.facebook.com/sharer/sharer.php?u=',
  },
  [SOCIAL_NETWORK.TWITTER]: {
    icon: iconTwitter,
    shareLink: 'https://twitter.com/home?status=',
  },
  [SOCIAL_NETWORK.WECHAT]: {
    icon: iconWeChat,
    shareLink: 'https://web.wechat.com/',
  },
  [SOCIAL_NETWORK.WEIBO]: {
    icon: iconWeibo,
    shareLink: 'http://v.t.sina.com.cn/share/share.php?url=',
  },
};
