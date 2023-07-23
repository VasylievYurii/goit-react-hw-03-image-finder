import React from 'react';
// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import {
  ItemCardWrapper,
  ItemCard,
  ItemCardImg,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ src, alt }) => {
  return (
    <ItemCardWrapper>
      <ItemCard href="#">
        <ItemCardImg src={src} alt={alt} />
      </ItemCard>
    </ItemCardWrapper>
  );
};
export default ImageGalleryItem;
