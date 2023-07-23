import React, { Component } from 'react';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
// import {} from './Searchbar.styled';

class Searchbar extends Component {

state = {
  itemTag:''
}

handleItemTag = e => {
  this.setState({itemTag: e.currentTarget.value.toLowerCase()})
}

handleSubmit = e => {
  e.preventDefault();

  if(this.state.itemTag.trim() === '') {
    toast.error('Searching is empty!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    return;
  }
  this.props.onSubmit(this.state.itemTag);
  this.setState({itemTag:''})
}

  render(){
    return (
      <header>
      <form onSubmit={this.handleSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>
    
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={this.state.itemTag}
          onChange={this.handleItemTag}
        />
      </form>
    </header>
    );
  }
};

export default Searchbar;