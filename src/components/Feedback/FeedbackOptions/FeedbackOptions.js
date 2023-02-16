import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ul className={css.list}>
      {options.map((el, index) => {
        return (
          <li className={css.item} key={index}>
            <button
              className={css.btn}
              name={el}
              type="button"
              onClick={onLeaveFeedback}
            >
              {getFirstLetterUpperCase(el)}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

function getFirstLetterUpperCase(str) {
  const arr = str.split('');
  const firstLetter = arr[0].toUpperCase();
  arr[0] = firstLetter;
  return arr.join('');
}

FeedbackOptions.protoType = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
