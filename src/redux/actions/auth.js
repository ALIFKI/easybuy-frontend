import axios from 'axios';
import {API_URL} from '@env';
export const login = (data) => {
  return {
    type: 'LOGIN',
    payload: axios({
      method: 'POST',
      url: `${API_URL}auth/login`,
      data: {
        email: data.email,
        password: data.password,
      },
    }),
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export const register = (data) => {
  return {
    type: 'REGISTER',
    payload: axios({
      method: 'POST',
      url: `${API_URL}auth/register`,
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        birthday: '2001-05-02',
      },
    }),
  };
};

export const updateUser = (data, token) => {
  return {
    type: 'UPDATE',
    payload: axios({
      method: 'PUT',
      url: `${API_URL}api/users`,
      data: data,
      headers: {
        Authorization: token,
      },
    }),
  };
};

export const ForgotPassword = (data) => {
  return {
    type: 'SEND_OTP',
    payload: axios({
      method: 'POST',
      url: `${API_URL}auth/forgotpassword`,
      data: {
        email: data.email,
      },
    }),
  };
};

export const Reset = (data) => {
  return {
    type: 'RESET_PASSWORD',
    payload: axios({
      method: 'POST',
      url: `${API_URL}auth/resetpassword`,
      data: {
        email: data.email,
        password: data.password,
      },
    }),
  };
};
