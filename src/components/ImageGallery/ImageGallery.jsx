import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

import SearchingApiServices from 'services/pixabayApi';

const searchingApiServices = new SearchingApiServices();

class ImageGallery extends Component {
  state = {
    galleryItems: null,
    error: null,
    status: 'idle',
    showModal: false,
    currentImg: null,
    currentAlt: null,
  };

  toggleModal = (img, alt) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      currentImg: img,
      currentAlt: alt,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.itemTag !== this.props.itemTag) {
      this.setState({ status: 'pending' });
      searchingApiServices.query = this.props.itemTag;
      searchingApiServices.resetPage();

      searchingApiServices
        .fetchPhotoCards()
        .then(({ hits }) => {
          console.log('hits', hits);
          if (hits.length === 0) {
            throw new Error(`No pictures found for ${this.props.itemTag}`);
          }
          this.setState({ galleryItems: hits, status: 'resolved' });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  getMorePictures = () => {
    searchingApiServices
      .fetchPhotoCards()
      .then(({ hits }) => {
        if (hits.length === 0) {
          throw new Error(`No pictures found for ${this.props.itemTag}`);
        }
        this.setState(prevState => ({
          galleryItems: [...prevState.galleryItems, ...hits],
          status: 'resolved',
        }));
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  render() {
    const { galleryItems, error, status, showModal, currentImg, currentAlt } =
      this.state;

    if (status === 'idle') {
      return <p>Enter name</p>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <p>{error.message}</p>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGalleryList>
            {galleryItems.map(item => {
              const { id, webformatURL, tags, largeImageURL } = item;
              return (
                <ImageGalleryItem
                  key={id}
                  src={webformatURL}
                  alt={tags}
                  largeImageURL={largeImageURL}
                  toggleModal={this.toggleModal}
                />
              );
            })}
          </ImageGalleryList>
          <button type="button" onClick={this.getMorePictures}>
            Get more
          </button>
          {showModal && (
            <Modal
              currentImg={currentImg}
              currentAlt={currentAlt}
              toggleModal={this.toggleModal}
            />
          )}
        </>
      );
    }
  }
}

export default ImageGallery;
