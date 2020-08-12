import axios from 'axios';
import {API_URL} from '@env';

export const addToCart = (token, product_id, data) => {
  return {
    type: 'ADD_TO_CART',
    payload: axios({
      method: 'POST',
      url: API_URL + 'cart/' + product_id,
      data: data,
      headers: {
        Authorization: token,
      },
    }),
  };
};
