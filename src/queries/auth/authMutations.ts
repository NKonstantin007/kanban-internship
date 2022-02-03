import { UseMutationOptions, useMutation } from 'react-query';
import { signInUser, signUpUser } from '../../data/auth';
import { SignInUserData, SignInUserResponse, SignUnUserResponse, SignUpUserData } from '../../types/auth';

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
