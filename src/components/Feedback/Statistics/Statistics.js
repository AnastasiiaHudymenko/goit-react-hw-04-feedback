import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { Notification } from '../Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statistics}>
      <h2 className={css.title}>Statistics</h2>
      {!good && !neutral && !bad ? (
        <Notification cls={css.notification} message="There is no feedback" />
      ) : (
        <ul className={css.list}>
          <li>
            <p className={css.desc}>Good: {good}</p>
          </li>
          <li>
            <p className={css.desc}>Neutral: {neutral}</p>
          </li>
          <li>
            <p className={css.desc}>Bad: {bad}</p>
          </li>
          <li>
            <p className={css.desc}>Total: {total()}</p>
          </li>
          <li>
            <p className={css.desc}>
              Positive feedback:{positivePercentage()}%
            </p>
          </li>
        </ul>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
