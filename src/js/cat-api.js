import axios from 'axios';
import axiosHeader from './axios';

//////////////////////////////////////////////////////////
// ******* Axios *******
const BASE_URL = 'https://api.thecatapi.com/v1';
const END_POINT_BR = '/breeds';
const END_POINT_IMG = '/images/search';

export function fetchBreeds() {
  return axios.get(`${BASE_URL}${END_POINT_BR}`).then(resp => resp.data);
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${BASE_URL}${END_POINT_IMG}?breed_ids=${breedId}`)
    .then(resp => resp.data);
}

//////////////////////////////////////////////////////////
// ******* Axios + CatAPI class *******

// export class CatAPI {
//   #BASE_URL = 'https://api.thecatapi.com/v1';
//   #END_POINT_BR = '/breeds';
//   #END_POINT_IMG = '/images/search';

//   fetchBreeds() {
//     return axios
//       .get(`${this.#BASE_URL}${this.#END_POINT_BR}`)
//       .then(resp => resp.data);
//   }

//   fetchCatByBreed(breedId) {
//     return axios
//       .get(`${this.#BASE_URL}${this.#END_POINT_IMG}?breed_ids=${breedId}`)
//       .then(resp => resp.data);
//   }
// }

//////////////////////////////////////////////////////////
// ******* Fetch + class CatAPI *******

// export class CatAPI {
//   #BASE_URL = 'https://api.thecatapi.com/v1';
//   #END_POINT_BR = '/breeds';
//   #END_POINT_IMG = '/images/search';
//   #API_KEY =
//     'live_qkrSdVipaPo3pg3GYduaAyjrppHeNQEqZBIeCCLyMel4Xb0qqazU6NU645h6MGWK';

//   // constructor(breedId) {
//   //   this.breed_ids = breedId;
//   // }

//   fetchBreeds() {
//     return fetch(`${this.#BASE_URL}${this.#END_POINT_BR}`).then(resp => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }
//       return resp.json();
//     });
//   }

//   fetchCatByBreed(breedId) {
//     const searchParams = new URLSearchParams({
//       breed_ids: breedId,
//       api_key: this.#API_KEY,
//     });

//     return fetch(
//       `${this.#BASE_URL}${this.#END_POINT_IMG}?${searchParams}`
//     ).then(resp => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }
//       return resp.json();
//     });
//   }
// }
//////////////////////////////////////////////////////////
