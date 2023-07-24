import React from 'react';
// import PropTypes from 'prop-types';
import {
  ItemCardWrapper,
  ItemCard,
  ItemCardImg,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ src, alt, largeImageURL, toggleModal }) => {
  const handleClick = e => {
    e.preventDefault();
    toggleModal(largeImageURL, alt);
  };

  return (
    <ItemCardWrapper>
      <ItemCard
        href="#"
        rel="noopener noreferrer nofollow"
        onClick={handleClick}
      >
        <ItemCardImg src={src} alt={alt} />
      </ItemCard>
    </ItemCardWrapper>
  );
};

export default ImageGalleryItem;
