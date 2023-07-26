import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalWindow, ModalImg } from './Modal.styled';

const modalRoot = document.getElementById('modal');

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
    return createPortal(
      <ModalOverlay onClick={this.handleBackdropClick}>
        <ModalWindow>
          <ModalImg src={this.props.currentImg} alt={this.props.currentAlt} />
        </ModalWindow>
      </ModalOverlay>,
      modalRoot
    );
  }
}

export default Modal;
