import axios from 'axios';
import {API_URL} from '@env';

export const myAddressList = (token, user_id) => {
  return {
    type: 'MY_ADDRESS_LIST_CART',
    payload: axios({
      method: 'GET',
      url: API_URL + 'address/' + user_id,
      headers: {
        Authorization: token,
      },
    }),
  };
};
