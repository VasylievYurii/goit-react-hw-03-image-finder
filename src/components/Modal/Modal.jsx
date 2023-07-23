import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { ModalOverlay, ModalWindow, ModalImg } from './Modal.styled';

class Modal extends Component {

componentDidMount(){}

componentDidUpdate(){}

  render(){
    return (
      <ModalOverlay onClick={()=>this.props.toggleModal()}>
        <ModalWindow>
          <ModalImg src={this.props.currentImg} alt={this.props.currentAlt}/>
        </ModalWindow>
      </ModalOverlay>
    );
  }
  
};
export default Modal;
