import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import SearchingApiServices from '../../services/pixabayApi';
const searchingApiServices = new SearchingApiServices();
// console.log('SearchingApiServices:', searchingApiServices.fetchPhotoCards());

class ImageGallery extends Component {
  state = {
    galleryItems: null,
    loading: false,
    error: null
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.itemTag !== this.props.itemTag) {
      this.setState({ loading: true });
      searchingApiServices
        .fetchPhotoCards(this.props.itemTag)
        .then(({ data: { hits } }) => this.setState({ galleryItems: hits }))
        .catch(error => this.setState({error}))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { galleryItems, loading, error } = this.state;
    const { itemTag } = this.props;
console.log('error', error)
    return (
      <ImageGalleryList>
        {error && <p>No pictures</p>}
        {loading && <p>Downloading</p>}
        {itemTag.length === 0 && <p>Enter name</p>}
        {galleryItems &&
          galleryItems.map(item => {
            const { id, webformatURL, tags } = item;
            return <ImageGalleryItem key={id} src={webformatURL} alt={tags} />;
          })}
      </ImageGalleryList>
    );
  }
}
export default ImageGallery;
