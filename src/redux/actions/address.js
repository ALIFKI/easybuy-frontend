import axios from 'axios';
import {API_URL} from '@env';

export const myAddressList = (token) => {
  return {
    type: 'MY_ADDRESS_LIST_CART',
    payload: axios({
      method: 'GET',
      url: API_URL + 'address/',
      headers: {
        Authorization: token,
      },
    }),
  };
};
