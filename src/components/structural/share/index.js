import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import styles from './share.module.css';
import iconCopy from '../../../assets/images/icon-copy.svg';

import Link from '../../../components/global/link';
import { SOCIAL_NETWORK } from '../../../constants/social-networks';
import { TIMINGS } from '../../../constants/timings';
import { PROP_SHAPES } from '../../../constants/custom-property-types';
import { CLASSES } from '../../../constants/classes';

class Share extends Component {
  state = {
    copying: false,
    currentUrl: '',
  }

  componentDidMount = () => {
    this.setState({ currentUrl: window.location.href });
  }

  copyLink = () => {
    this.setState({
      copying: true,
    });
    setTimeout(() => {
      this.setState({
        copying: false,
      });
    }, TIMINGS.COPY_LINK_CONFORMATION);
  }

  renderIcon = ({
    shareLink,
    icon,
    label,
    network,
  }, index) => {
    const { translation } = this.context;
    const linkDestination = network !== SOCIAL_NETWORK.WECHAT ?
      `${shareLink}${this.state.currentUrl}` : shareLink;

    return (
      <div
        className={styles.shareIcon}
        key={index}
      >
        <Link to={linkDestination}>
          <img
            alt={`${translation('share.socialIconAriaLabel')} ${label}`}
            src={icon}
          />
        </Link>
      </div>
    );
  }

  render() {
    const {
      socialIcons: { contentPage: contentPageSocialIcons },
      translation,
    } = this.context;

    return (
      <div className={cx(styles.wrapper, CLASSES.SHARE_COMPONENT)}>
        <div className={styles.content}>
          <div className={styles.share}>
            <div className={styles.shareText}>{translation('share.shareLabel')}:</div>
            <CopyToClipboard
              onCopy={this.copyLink}
              text={this.state.currentUrl}
            >
              <button
                aria-label={this.state.copying ?
                  translation('share.linkCopied') :
                  translation('share.copyLinkLabel')}
                className={styles.copyButton}
                disabled={this.state.copying}
              >
                <img
                  alt=""
                  src={iconCopy}
                />
              </button>
            </CopyToClipboard>
            {contentPageSocialIcons.map(this.renderIcon)}
          </div>
          <div
            aria-hidden
            className={cx(
                styles.copyConformation,
                { [styles.copyConformation_isVisible]: this.state.copying }
              )}
          >
            <span>{translation('share.linkCopied')}</span>
          </div>
        </div>
      </div>
    );
  }
}

Share.contextTypes = {
  socialIcons: PROP_SHAPES.SOCIAL_ICONS.isRequired,
  translation: PropTypes.func.isRequired,
};

export default Share;
