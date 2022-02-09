import { UseMutationOptions, useMutation } from 'react-query';
import { loginUser, signUpUser, logoutUser } from '../../data/auth';
import {
  SignInUserData,
  SignInUserResponse,
  SignUpUserResponse,
  SignUpUserData,
  LogoutUserResponse,
} from '../../types/auth';

export function useSignInUserMutation(
  options?: UseMutationOptions<SignInUserResponse, Error, SignInUserData>,
) {
  return useMutation('sign-in-user-mutation', loginUser, options);
}

export function useSignUnUserMutation(
  options?: UseMutationOptions<SignUpUserResponse, Error, SignUpUserData>,
) {
  return useMutation('sign-in-user-mutation', signUpUser, options);
}

export function useLogoutUserMutation(
  options?: UseMutationOptions<LogoutUserResponse, Error>,
) {
  return useMutation('sign-in-user-mutation', logoutUser, options);
}
