import React, { Component } from 'react';
import {
  ImageGalleryList,
  BsCardImageSvg,
  ImCryingSvg,
  ErrorMessage,
} from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import { Button } from '../Button/Button';
import { toast } from 'react-toastify';

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
    isButtonActive: true,
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
      this.setState({ status: 'pending', isButtonActive: true });
      searchingApiServices.query = this.props.itemTag;
      searchingApiServices.resetPage();

      searchingApiServices
        .fetchPhotoCards()
        .then(({ hits }) => {
          if (hits.length === 0) {
            throw new Error(`No pictures found for ${this.props.itemTag}`);
          }
          if (hits.length < 12) {
            this.setState({ isButtonActive: false });
          }
          this.setState({ galleryItems: hits, status: 'resolved' });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  getMorePictures = () => {
    this.setState({ loadMore: true });
    searchingApiServices
      .fetchPhotoCards()
      .then(({ hits }) => {
        if (hits.length === 0) {
          toast.warn(
            `Sorry! There are no more "${this.props.itemTag}" pictures!`,
            {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            }
          );
          this.setState({ loadMore: false, isButtonActive: false });
          return;
        }
        this.setState(prevState => ({
          galleryItems: [...prevState.galleryItems, ...hits],
          status: 'resolved',
          loadMore: false,
          isButtonActive: true,
        }));
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  render() {
    const {
      galleryItems,
      error,
      status,
      showModal,
      currentImg,
      currentAlt,
      loadMore,
      isButtonActive,
    } = this.state;

    if (status === 'idle') {
      return <BsCardImageSvg />;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return (
        <>
          <ErrorMessage>{error.message}</ErrorMessage>
          <ImCryingSvg />
        </>
      );
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
          {isButtonActive && (
            <Button
              type="button"
              onClick={this.getMorePictures}
              loader={loadMore}
              disabled={!isButtonActive}
            >
              Get more
            </Button>
          )}

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
