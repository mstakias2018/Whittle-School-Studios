import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import styles from './share.module.css';

import iconFacebook from '../../../assets/images/icon-facebook.svg';
import iconTwitter from '../../../assets/images/icon-twitter.svg';
import iconWeChat from '../../../assets/images/icon-we-chat.svg';
import iconCopy from '../../../assets/images/icon-copy.svg';

import { SOCIAL_NETWORK } from './../../../constants/social-networks';
import { TIMINGS } from './../../../constants/timings';

const propTypes = {
  networksToShow: PropTypes.arrayOf(PropTypes.string),
};

const Links = {
  Facebook: {
    link: 'https://www.facebook.com/sharer/sharer.php?u=',
    icon: iconFacebook,
  },
  Twitter: {
    link: 'https://twitter.com/home?status=',
    icon: iconTwitter,
  },
  WeChat: {
    link: 'https://web.wechat.com/',
    icon: iconWeChat,
  },
};


class Share extends Component {
  state = {
    currentUrl: '',
    copying: false,
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

  renderIcon = (network, index, translations) => {
    const ariaLabel = translations ? translations.socialIconAriaLabel : '';
    const selected = Links[network];
    const link = network !== 'WeChat' ? `${selected.link}${this.state.currentUrl}` : `${selected.link}`;
    return (
      <div
        className={styles.shareIcon}
        key={index.toString()}
      >
        <a
          aria-label={`${ariaLabel} ${network}`}
          href={link}
          target="_blank"
        >
          <img
            alt={network}
            aria-hidden
            src={selected.icon}
          />
        </a>
      </div>
    );
  }

  render() {
    const { translations } = this.context;
    return (
      <div className={styles.wrapper}>
        <div
          area-label="Share content"
          className={styles.content}
        >
          <div className={styles.share}>
            <div className={styles.shareText}>{translations.share && translations.share.shareLabel}:</div>
            <CopyToClipboard
              onCopy={this.copyLink}
              text={this.state.currentUrl}
            >
              <button
                aria-label={this.state.copying ?
                  translations.share && translations.share.linkCopied :
                  translations.share && translations.share.copyLinkLabel}
                className={styles.copyButton}
                disabled={this.state.copying}
              >
                <img
                  alt=""
                  src={iconCopy}
                />
              </button>
            </CopyToClipboard>
            { this.props.networksToShow ?
                this.props.networksToShow.map((network, index) => (
                  this.renderIcon(network, index, translations.share)
                )) :
                [SOCIAL_NETWORK.FACEBOOK, SOCIAL_NETWORK.TWITTER].map((network, index) => (
                  this.renderIcon(network, index, translations.share)
                ))
            }
          </div>
          <div
            aria-hidden
            className={cx(
                styles.copyConformation,
                { [styles.copyConformation_isVisible]: this.state.copying },
              )}
          >
            <span>{translations.share ? translations.share.linkCopied : 'Link copied to clipboard'}</span>
          </div>
        </div>
      </div>
    );
  }
}

Share.propTypes = propTypes;

Share.contextTypes = { translations: PropTypes.object };

export default Share;
