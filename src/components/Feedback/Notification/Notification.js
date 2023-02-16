import React from 'react';
import PropTypes from 'prop-types';

export const Notification = ({ message, cls }) => {
  return <p className={cls}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  cls: PropTypes.string.isRequired,
};
