import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { toSignUpCredentials } from '@/api-types/signUpCredentials';
import { NEW_USER_PAGE } from '@/constants/routes';
import { useSignUpUserMutation } from '@/queries/auth';
import { SignUpCredentialsForm } from '../types';

type UseCreateUserParams = {
  onError: (error: Error) => void;
};

export const useCreateUser = ({ onError }: UseCreateUserParams) => {
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
