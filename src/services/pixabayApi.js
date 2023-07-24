// import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
// const searchParams = new URLSearchParams({
//   key: '14851354-5f3abbeacded0434ca4aa137e',
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: 'true',
//   per_page: '12',
// });

export default class SearchingApiServices {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchPhotoCards() {

   const data = await fetch(
      `${BASE_URL}?q=${this.searchQuery}&page=${this.page}&key=14851354-5f3abbeacded0434ca4aa137e&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(
          new Error(`There are no ${this.searchQuery} pictures`)
        );
      })

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


// export default class SearchingApiServices {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }

//   async fetchPhotoCards() {
//     const data = await axios({
//       method: 'get',
//       url: `${BASE_URL}?${searchParams}&q=${this.searchQuery}&page=${this.page}`,
//     }).catch(function (error) {
//       if (error.response) {
//         console.log(error.response.status);
//       } else if (error.request) {
//         console.log(error.request);
//       } else {
//         console.log('Error', error.message);
//       }
//       console.log(error.config);
//     });
//     this.incrementPage();
//     return data;
//   }

//   incrementPage() {
//     this.page += 1;
//   }
//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
