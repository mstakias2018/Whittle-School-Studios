import React, { Component } from 'react';
import cx from 'classnames';
import Link from 'gatsby-link';

import styles from './site-info.module.css';

const POLLING_INTERVAL = 30;

class SiteInfo extends Component {
  state = {
    isPolling: true,
    isVisible: true,
    timeToRefresh: POLLING_INTERVAL,
  };

  componentDidMount() {
    setInterval(this.poll, 1000);
  }

  poll = () => {
    const { isPolling, timeToRefresh } = this.state;
    if (isPolling) {
      const newValue = timeToRefresh - 1;
      this.setState({ timeToRefresh: newValue });
      if (newValue < 1) {
        window.location.reload();
      }
    }
  }

  togglePolling = () => {
    const { isPolling } = this.state;
    if (isPolling) {
      this.setState({ isPolling: false });
    } else {
      this.setState({
        isPolling: true,
        timeToRefresh: POLLING_INTERVAL,
      });
    }
  }

  toggleVisibility = () => {
    const { isVisible } = this.state;
    if (isVisible) {
      this.setState({
        isPolling: false,
        isVisible: false,
      });
    } else {
      this.setState({ isVisible: true });
    }
  }

  render() {
    const { isPolling, isVisible, timeToRefresh } = this.state;
    const visibilityButton = (
      <button
        className={styles.button}
        onClick={this.toggleVisibility}
      >
        {isVisible ? 'Hide' : 'Show build info'}
      </button>
    );

    return isVisible ? (
      <div className={styles.wrapper}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.lastBuildWrapper}>
              <span>Last build:</span>
              <span className={styles.lastBuild}>
                {' '}{process.env.GATSBY_BUILD_TIME}
              </span>
            </div>
            <div className={styles.buttonWrapper}>
              <ul className={styles.buttonList}>
                <li>
                  <button
                    className={styles.button}
                    onClick={this.togglePolling}
                  >
                    {isPolling ? 'Stop' : 'Start'} polling
                  </button>
                </li>
                <li>
                  <Link
                    className={styles.link}
                    to="/dev/validator"
                  >
                    Validate content
                  </Link>
                </li>
                <li>
                  {visibilityButton}
                </li>
              </ul>
            </div>
            {isPolling && (
              <div className={styles.pollingWrapper}>
                Time to refresh {timeToRefresh}
              </div>
            )}
          </div>
        </div>
      </div>
    ) : (
      <div className={cx(styles.wrapper, styles.wrapper_isHidden)}>
        {visibilityButton}
      </div>
    );
  }
}

export default SiteInfo;
