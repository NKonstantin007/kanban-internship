import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { toSignUpCredentials } from '@/api-types/signUpCredentials';
import { AUTH_PAGE } from '@/constants/routes';
import { useSignUpUserMutation } from '@/queries/auth';
import { SignUpCredentialsForm } from '../types';

type UseCreateUserParams = {
  onError: () => void;
};

export const useCreateUser = ({ onError }: UseCreateUserParams) => {
  const { mutate, isLoading } = useSignUpUserMutation();
  const history = useHistory();

  return {
    createUser: useCallback(
      (credentials: SignUpCredentialsForm) => {
        // TODO: it should be moved to service's level
        const signUpCredentialsApiModel = toSignUpCredentials(credentials);

        return mutate(signUpCredentialsApiModel, {
          onSuccess: () => {
            history.push(AUTH_PAGE);
          },
          onError,
        });
      },
      [history, mutate, onError],
    ),
    isLoading,
  };
};
