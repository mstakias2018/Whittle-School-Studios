import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../../global/link';
import styles from './share-icons.module.css';
import { PROP_SHAPES } from '../../../../constants/custom-property-types';

const FooterShareIcons = (props, context) => {
  const {
    socialIcons: { footer: footerSocialIcons },
    translation,
  } = context;
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        {translation('footer.shareText')}
      </div>
      <div className={styles.icons}>
        {footerSocialIcons.map(({ label, url, icon }, index) => {
          if (url) {
            return (
              <div
                className={styles.icon}
                key={index}
              >
                <Link to={url}>
                  <img
                    alt={label}
                    src={icon}
                  />
                </Link>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

FooterShareIcons.contextTypes = {
  socialIcons: PROP_SHAPES.SOCIAL_ICONS.isRequired,
  translation: PropTypes.func.isRequired,
};

export default FooterShareIcons;
