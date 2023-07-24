import React from 'react';
// import PropTypes from 'prop-types';
import { Section, Container } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Searchbar from 'components/Searchbar/Searchbar';

export class App extends Component {
  state = {
    itemTag: [],
  };

  handleSearchSubmit = itemTag => {
    this.setState({ itemTag });
  };

  render() {
    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <Section>
          <Container>
            {this.state.loading && <h1>Downloading</h1>}
            {this.state.itemTag && (
              <ImageGallery itemTag={this.state.itemTag} />
            )}
          </Container>
        </Section>
      </>
    );
  }
}
