import React from 'react';
// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import {Section, Container} from './App.styled';
import SearchingApiServices from '../../services/pixabayApi';
import { Component } from 'react';
const searchingApiServices = new SearchingApiServices();
// console.log("SearchingApiServices:", searchingApiServices.fetchPhotoCards());

export class App extends Component {
  state = {
galleryItems: null,
  };

componentDidMount() {
    searchingApiServices.fetchPhotoCards().then(({data:{hits}}) => this.setState({galleryItems:hits}))

  }

  // componentDidUpdate(prevProps, prevState) {
   
  // }


  render() {
   
    return (
      <>
        <Section>
          <Container>
            {this.state.galleryItems && <p>There are photos</p>}
          </Container>
        </Section>
      </>
    );
  }
}
