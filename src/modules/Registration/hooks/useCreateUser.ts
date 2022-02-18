import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { NEW_USER_PAGE } from '@/constants/routes';
import { useSignUpUserMutation } from '@/queries/auth';
import { toSignUpCredentials } from '../api-types/signUpCredentials';
import { SignUpCredentialsForm } from '../types';

type UseSignInUserParams = {
  onError: (error: Error) => void;
};

export const useCreateUser = ({ onError }: UseSignInUserParams) => {
  const {
    mutate,
    isLoading: isLoadingCreateUser,
    isError: isCreateUserError,
  } = useSignUpUserMutation();
  const history = useHistory();

  return {
    createUser: useCallback(
      (credentials: SignUpCredentialsForm) => {
        const signUpCredentials = toSignUpCredentials(credentials);

        return mutate(signUpCredentials, {
          onSuccess: () => {
            history.push(NEW_USER_PAGE);
          },
          onError,
        });
      },
      [history, mutate, onError],
    ),
    isLoadingCreateUser,
    isCreateUserError,
  };
};
