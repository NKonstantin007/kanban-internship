import axios from 'axios';
import {
  SignUpUserData,
  SignUnUserResponse,
  SignInUserData,
  SignInUserResponse,
  RefreshTokenData,
  RefreshTokenResponse,
  LogoutUserResponse,
} from '../../types/auth/auth';
import api from '../http/index';
import { signInUserMock } from './__mocks/authServicesMocks';

export const signInUser = signInUserMock;

const API_URL = 'http://173.212.214.70:3001/auth/';

export const signUpUser = (
  signUpUserData: SignUpUserData,
): Promise<SignUnUserResponse> => {
  return api
    .post<SignUnUserResponse>(`${API_URL}signup`, signUpUserData)
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};

export const loginUser = (
  signInUserData: SignInUserData,
): Promise<SignInUserResponse> => {
  return api
    .post<SignInUserResponse>(`${API_URL}login`, signInUserData)
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};

export const refreshToken = (
  refreshTokenData: RefreshTokenData,
): Promise<RefreshTokenResponse> => {
  return api
    .post<RefreshTokenResponse>(`${API_URL}refresh`, refreshTokenData)
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};

export const logoutUser = (): Promise<LogoutUserResponse> => {
  return api.post<LogoutUserResponse>(`${API_URL}logout`).then((res) => {
    console.log(res.data);
    return res.data;
  });
};
