import {combineReducers} from 'redux';
import auth from './auth';
import product from './product';
import cart from './cart';
import order from './order';
import address from './address';

export default combineReducers({
  auth,
  product,
  cart,
  order,
  address,
});
