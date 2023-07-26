import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { ModalOverlay, ModalWindow, ModalImg } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    console.log('componentDidMount:');
    window.addEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    console.log('componentWillUnmount:');
    window.removeEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'auto';
  }

  componentDidUpdate() {}

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Need to close windows');
      this.props.toggleModal();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal();
    }
  };

  render() {
    return (
      <ModalOverlay onClick={this.handleBackdropClick}>
        <ModalWindow>
          <ModalImg src={this.props.currentImg} alt={this.props.currentAlt} />
        </ModalWindow>
      </ModalOverlay>
    );
  }
}
export default Modal;
