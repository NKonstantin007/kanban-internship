import axios from 'axios';
import { signInUserMock } from './__mocks/authServicesMocks';

export const signInUser = signInUserMock;

const API_URL = 'http://173.212.214.70:3001/auth/';

export const SignUpUser = (
  email: string,
  password: string,
  name: string,
) => {
  return axios
    .post(`${API_URL}signup`, {
      email,
      password,
      name,
    })
    .then((res) => {
      console.log(res.data);
    });
};

export const LoginUser = (email: string, password: string) => {
  return axios
    .post(`${API_URL}login`, {
      email,
      password,
    })
    .then((res) => {
      console.log(res.data);
    });
};

export const refreshToken = (refreshToken: string) => {
  return axios
    .post(`${API_URL}refresh`, {
      refreshToken,
    })
    .then((res) => {
      console.log(res.data);
    });
};

export const logoutUser = () => {
  return axios.post(`${API_URL}logout`).then((res) => {
    console.log(res.data);
  });
};
