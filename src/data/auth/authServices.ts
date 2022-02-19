import {
  SignUpUserData,
  SignUpUserResponse,
  SignInUserData,
  SignInUserResponse,
  RefreshTokenData,
  RefreshTokenResponse,
  LogoutUserResponse,
} from '@/types/auth';
import { http } from '../http';

export const signUpUser = async (
  signUpUserData: SignUpUserData,
): Promise<SignUpUserResponse> => {
  const { data } = await http.post<SignUpUserResponse>(
    `/auth/signup`,
    signUpUserData,
  );
  return data;
};

export const loginUser = async (
  signInUserData: SignInUserData,
): Promise<SignInUserResponse> => {
  const { data } = await http.post<SignInUserResponse>(
    `/auth/login`,
    signInUserData,
  );
  localStorage.setItem('token', data.token);
  localStorage.setItem('refreshToken', data.refreshToken);
  return data;
};

export const refreshToken = async (
  refreshTokenData: RefreshTokenData,
): Promise<RefreshTokenResponse> => {
  const { data } = await http.post<RefreshTokenResponse>(
    `/auth/refresh`,
    refreshTokenData,
  );
  return data;
};

export const logoutUser = async (): Promise<LogoutUserResponse> => {
  const { data } = await http.post<LogoutUserResponse>(`/auth/logout`);
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
  return data;
};
