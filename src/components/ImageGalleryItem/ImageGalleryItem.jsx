import React from 'react';
// import PropTypes from 'prop-types';
import {
  ItemCardWrapper,
  ItemCard,
  ItemCardImg,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ src, alt, largeImageURL, toggleModal }) => {
  return (
    <ItemCardWrapper>
      <ItemCard href="#">
        <ItemCardImg src={src} alt={alt} onClick={()=>toggleModal(largeImageURL, alt)}/>
      </ItemCard>
    </ItemCardWrapper>
  );
};
export default ImageGalleryItem;
