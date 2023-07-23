import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';

class ImageGallery extends Component {
  state = {
    galleryItems: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.itemTag !== this.props.itemTag) {
      this.setState({ status: 'pending' });

      fetch(
        `https://pixabay.com/api/?q=${this.props.itemTag}&page=1&key=14851354-5f3abbeacded0434ca4aa137e&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(
            new Error(`There are no ${this.props.itemTag} pictures`)
          );
        })
        .then(({ hits }) => {
          console.log("then hits:", hits)
          
          if (hits.length === 0) {
            console.log("then if hits:", hits)
            throw new Error(`No pictures found for ${this.props.itemTag}`);
          }
          this.setState({ galleryItems: hits, status: 'resolved' });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { galleryItems, error, status } = this.state;

    if (status === 'idle') {
      return <p>Enter name</p>;
    }

    if (status === 'pending') {
      return <Loader/>;
    }

    if (status === 'rejected') {
      return <p>{error.message}</p>;
    }

    if (status === 'resolved') {
      return (
        <ImageGalleryList>
          {galleryItems.map(item => {
            const { id, webformatURL, tags } = item;
            return <ImageGalleryItem key={id} src={webformatURL} alt={tags} />;
          })}
        </ImageGalleryList>
      );
    }
  }
}

export default ImageGallery;
