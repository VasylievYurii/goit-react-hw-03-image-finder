import React from 'react';
// import PropTypes from 'prop-types';
import { FakeGalleryList, FakeItemCardWrapper } from './Loader.styled';

export const Loader = () => {
  const fakeItemCards = [];

  for (let i = 0; i < 12; i++) {
    fakeItemCards.push(<FakeItemCardWrapper key={i} />);
  }

  return <FakeGalleryList>{fakeItemCards}</FakeGalleryList>;
};
