import {
  SignUpUserData,
  SignUnUserResponse,
  SignInUserData,
  SignInUserResponse,
  RefreshTokenData,
  RefreshTokenResponse,
  LogoutUserResponse,
} from '../../types/auth/auth';
import axiosInstance from '../http/http';
import { signInUserMock } from './__mocks/authServicesMocks';

export const signInUser = signInUserMock;

export const signUpUser = (
  signUpUserData: SignUpUserData,
): Promise<SignUnUserResponse> => {
  return axiosInstance
    .post<SignUnUserResponse>(`signup`, signUpUserData)
    .then((res) => {
      return res.data;
    });
};

export const loginUser = (
  signInUserData: SignInUserData,
): Promise<SignInUserResponse> => {
  return axiosInstance
    .post<SignInUserResponse>(`login`, signInUserData)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      return res.data;
    });
};

export const refreshToken = (
  refreshTokenData: RefreshTokenData,
): Promise<RefreshTokenResponse> => {
  return axiosInstance
    .post<RefreshTokenResponse>(`refresh`, refreshTokenData)
    .then((res) => {
      return res.data;
    });
};

export const logoutUser = (): Promise<LogoutUserResponse> => {
  return axiosInstance.post<LogoutUserResponse>(`logout`).then((res) => {
    localStorage.removeItem('user');
    return res.data;
  });
};
