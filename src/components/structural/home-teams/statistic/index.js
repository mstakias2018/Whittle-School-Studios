import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import {
  HOME_TEAMS_STATISTIC_TYPE,
} from '../../../../constants/settings';

import styles from './statistic.module.css';

const statisticPropTypes = {
  hasRightMargin: PropTypes.bool,
  number1: PropTypes.number,
  number2: PropTypes.number,
  textLineBottom: PropTypes.string,
  textLineTop: PropTypes.string,
  type: PropTypes.string,
};

const digitsThatBreakBottom = ['3', '4', '5', '7', '9'];

const isNumberBreakingBottom = (num) => {
  if (num) {
    return num.toString().split('').some(x => digitsThatBreakBottom.includes(x));
  }
  return false;
};

const renderNumber = (type, number1, number2, ratioDividerText) => {
  const testNumber = type === HOME_TEAMS_STATISTIC_TYPE.PERCENTAGE ?
    isNumberBreakingBottom(number1) :
    isNumberBreakingBottom(number2);
  if (type === HOME_TEAMS_STATISTIC_TYPE.PERCENTAGE) {
    return (
      <div className={cx(
          styles.numberBlock,
          {
            [styles.extraBottomPadding]: testNumber,
          }
        )}
      >
        <span className={styles.percentageNumber}>{number1}</span>
        <span className={styles.percentageSign}>%</span>
      </div>
    );
  }
  return (
    <div className={cx(
        styles.ratioBlock,
        {
          [styles.extraBottomPadding]: testNumber,
        }
      )}
    >
      <div className={cx(styles.ratioNumber, styles.ratioNumberLeft)}>{number1}</div>
      <div className={styles.ratioText}>{ratioDividerText}</div>
      <div className={cx(styles.ratioNumber, styles.ratioNumberRight)}>{number2}</div>
    </div>
  );
};

const Statistic = (props, context) => {
  const {
    hasRightMargin,
    number1,
    number2,
    textLineTop,
    textLineBottom,
    type,
  } = props;
  return (
    <li className={cx(
        styles.wrapper,
        {
          [styles.rightMargin]: hasRightMargin,
        }
      )}
    >
      <div className={styles.content}>
        {textLineTop && (
          <div className={styles.topText}>
            {textLineTop}
          </div>
        )}
        {renderNumber(type, number1, number2, context.translation('teams.ratioDividerText'))}
        {textLineBottom && (
          <div className={styles.bottomText}>
            {textLineBottom}
          </div>
        )}
      </div>
    </li>
  );
};

Statistic.contextTypes = { translation: PropTypes.func.isRequired };
Statistic.propTypes = statisticPropTypes;

export default Statistic;
