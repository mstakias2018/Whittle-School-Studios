import React from 'react';

import styles from './share-icons.module.css';

import iconFacebook from '../../../../assets/images/icon-facebook.svg';
import iconTwitter from '../../../../assets/images/icon-twitter.svg';
import iconWeibo from '../../../../assets/images/icon-weibo.svg';
import iconWeChat from '../../../../assets/images/icon-we-chat.svg';

// todo + icons
const shareText = 'Stay connected with us:';

const FooterShareIcons = () => (
  <div className={styles.wrapper}>
    <div className={styles.text}>
      {shareText}
    </div>
    <div className={styles.icons}>
      <div
        className={styles.icon}
      >
        <a
          href="https://www.facebook.com/"
        >
          <img
            alt="Facebook"
            src={iconFacebook}
          />
        </a>
      </div>
      <div
        className={styles.icon}
      >
        <a
          href="https://twitter.com/"
        >
          <img
            alt="Twitter"
            src={iconTwitter}
          />
        </a>
      </div>
      <div
        className={styles.icon}
      >
        <a
          href="https://weibo.com/"
        >
          <img
            alt="Weibo"
            src={iconWeibo}
          />
        </a>
      </div>
      <div
        className={styles.icon}
      >
        <a
          href="https://www.wechat.com"
        >
          <img
            alt="We Chat"
            src={iconWeChat}
          />
        </a>
      </div>
    </div>
  </div>
);

export default FooterShareIcons;
