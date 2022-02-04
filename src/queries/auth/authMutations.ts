import { UseMutationOptions, useMutation } from 'react-query';
import {
  signInUser,
  signUpUser,
  refreshToken,
  logoutUser,
} from '../../data/auth';
import {
  SignInUserData,
  SignInUserResponse,
  SignUnUserResponse,
  SignUpUserData,
  RefreshTokenData,
  RefreshTokenResponse,
  LogoutUserResponse,
} from '../../types/auth';

export function useSignInUserMutation(
  options?: UseMutationOptions<SignInUserResponse, Error, SignInUserData>,
) {
  return useMutation('sign-in-user-mutation', signInUser, options);
}

export function useSignUnUserMutation(
  options?: UseMutationOptions<SignUnUserResponse, Error, SignUpUserData>,
) {
  return useMutation('sign-in-user-mutation', signUpUser, options);
}

export function useRefreshTokenMutation(
  options?: UseMutationOptions<RefreshTokenResponse, Error, RefreshTokenData>,
) {
  return useMutation('sign-in-user-mutation', refreshToken, options);
}

export function useLogoutUserMutation(
  options?: UseMutationOptions<LogoutUserResponse, Error>,
) {
  return useMutation('sign-in-user-mutation', logoutUser, options);
}
