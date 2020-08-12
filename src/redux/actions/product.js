import axios from 'axios';
import {API_URL} from '@env';

export const getProduct = (
  token,
  page,
  search,
  category,
  size,
  color,
  sort,
) => {
  return {
    type: 'GET_PRODUCT',
    payload: axios({
      method: 'GET',
      url: API_URL + 'product/',
      params: {
        page: page || 1,
        limit: 10,
        search: search,
        category: category || '',
        sort: sort,
        size: size,
        color: color,
      },
      headers: {
        Authorization: token,
      },
    }),
  };
};

// export const getDetailBook = (id, token) => {
//   return {
//     type: 'GET_DETAIL_BOOK',
//     payload: axios({
//       method: 'GET',
//       url: API_URL + 'books/' + id,
//       headers: {
//         Authorization: token,
//       },
//     }),
//   };
// };

// export const patchBorrowBook = (id, token) => {
//   return {
//     type: 'PATCH_BORROW_BOOK',
//     payload: axios({
//       method: 'PATCH',
//       url: API_URL + 'books/' + id + '/borrow',
//       headers: {
//         Authorization: token,
//       },
//     }),
//   };
// };

// export const postAddBook = (formData, token) => {
//   console.log(API_URL);
//   return {
//     type: 'POST_ADD_BOOK',
//     payload: axios({
//       method: 'POST',
//       url: API_URL + 'books/',
//       data: formData,
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'multipart/form-data',
//         Authorization: token,
//       },
//     }),
//   };
// };

// export const putUpdateBook = (id, formData, token) => {
//   return {
//     type: 'PUT_UPDATE_BOOK',
//     payload: axios({
//       method: 'PUT',
//       url: API_URL + 'books/' + id,
//       data: formData,
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'multipart/form-data',
//         Authorization: token,
//       },
//     }),
//   };
// };

// export const deleteBook = (id, token) => {
//   return {
//     type: 'DELETE_BOOK',
//     payload: axios({
//       method: 'DELETE',
//       url: API_URL + 'books/' + id,
//       headers: {
//         Authorization: token,
//       },
//     }),
//   };
// };
