import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header, Form, Input } from './Searchbar.styled';
import { Button } from '../Button/Button';

class Searchbar extends Component {
  state = {
    itemTag: '',
  };

  handleItemTag = e => {
    this.setState({ itemTag: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.itemTag.trim() === '') {
      toast.error('Searching is empty!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }
    this.props.onSubmit(this.state.itemTag);
    this.setState({ itemTag: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <span>Search</span>
          </Button>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.itemTag}
            onChange={this.handleItemTag}
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;
