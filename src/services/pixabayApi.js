// import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

export default class SearchingApiServices {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchPhotoCards() {
    const data = await fetch(
      `${BASE_URL}?q=${this.searchQuery}&page=${this.page}&key=14851354-5f3abbeacded0434ca4aa137e&image_type=photo&orientation=horizontal&per_page=12`
    ).then(response => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(
        new Error(`There are no ${this.searchQuery} pictures`)
      );
    });

    this.incrementPage();
    return data;
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
