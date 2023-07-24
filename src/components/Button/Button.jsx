import React from 'react';
// import PropTypes from 'prop-types';
import { ButtonStyle } from './Button.styled';

export const Button = ({ children, ...props }) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};
