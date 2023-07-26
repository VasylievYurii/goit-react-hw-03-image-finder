import React from 'react';
// import PropTypes from 'prop-types';
import { Section, Container } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Searchbar from 'components/Searchbar/Searchbar';
import { Preview } from 'components/Preview/Preview';
import { CSSTransition } from 'react-transition-group';

export class App extends Component {
  state = {
    itemTag: null,
    preview: true,
  };

  handleSearchSubmit = itemTag => {
    this.setState({ itemTag });
  };

  startDiscover = () => {
    this.setState({ preview: false });
  };

  render() {
    const { itemTag, preview } = this.state;

    // if (preview) {
    //   return <Preview startDiscover={this.startDiscover} />;
    // }

    if (preview) {
      return (
        <CSSTransition
          in={preview}
          classNames="fade"
          timeout={3000} // Тривалість анімації у мілісекундах
          unmountOnExit
          mountOnEnter
        >
          <Preview startDiscover={this.startDiscover} />
        </CSSTransition>
      );
    }

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
          {/* <Container>{itemTag && <ImageGallery itemTag={itemTag} />}</Container> */}
          <Container>
            <ImageGallery itemTag={itemTag} />
          </Container>
        </Section>
      </>
    );
  }
}
