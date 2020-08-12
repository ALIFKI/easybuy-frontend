import axios from 'axios';
import {API_URL} from '@env';

export const myOrderList = (token) => {
  return {
    type: 'MY_ORDER_LIST_CART',
    payload: axios({
      method: 'GET',
      url: API_URL + 'order/',
      headers: {
        Authorization: token,
      },
    }),
  };
};
