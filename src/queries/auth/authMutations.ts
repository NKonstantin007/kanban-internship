import { UseMutationOptions, useMutation } from 'react-query';
import { signInUser } from '@/data/auth';
import { SignInUserData, SignInUserResponse } from '@/types/auth';

export function useSignInUserMutation(
  options?: UseMutationOptions<SignInUserResponse, Error, SignInUserData>,
) {
  return useMutation('sign-in-user-mutation', signInUser, options);
}
