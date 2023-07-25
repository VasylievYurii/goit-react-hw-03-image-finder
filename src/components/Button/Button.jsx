import React from 'react';
// import PropTypes from 'prop-types';
import { ButtonStyle } from './Button.styled';
import { Grid } from 'react-loader-spinner';

export const Button = ({ loader, children, ...props }) => {
  if (loader) {
    return (
      <ButtonStyle type="button">
        <Grid
          height="20"
          width="20"
          color="#f5f5f5"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{ justifyContent: 'center' }}
          wrapperClass=""
          visible={true}
        />
      </ButtonStyle>
    );
  } else {
    return <ButtonStyle {...props}>{children}</ButtonStyle>;
  }
};
