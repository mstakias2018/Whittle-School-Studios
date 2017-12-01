import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../../global/link';
import styles from './share-icons.module.css';
import { PROP_TYPES } from '../../../../constants/custom-property-types';

const FooterShareIcons = (props, context) => {
  const {
    socialIcons: { footer: footerSocialIcons },
    translations,
  } = context;
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        {translations.footer.shareText}
      </div>
      <div className={styles.icons}>
        {footerSocialIcons.map(({ label, url, icon }, index) => (
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
        ))}
      </div>
    </div>
  );
};

FooterShareIcons.contextTypes = {
  socialIcons: PROP_TYPES.SOCIAL_ICONS.isRequired,
  translations: PropTypes.object.isRequired,
};

export default FooterShareIcons;
