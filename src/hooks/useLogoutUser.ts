import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { AUTH_PAGE } from '@/constants/routes';
import { useLogoutUserMutation } from '@/queries/auth/authMutations';

type UseCreateUserParams = {
  onError?: () => void;
};

export const useLogoutUser = ({ onError }: UseCreateUserParams) => {
  const { mutate, isLoading } = useLogoutUserMutation();
  const history = useHistory();

  return {
    logout: useCallback(() => {
      return mutate(undefined, {
        onSuccess: () => {
          history.push(AUTH_PAGE);
        },
        onError,
      });
    }, [history, mutate, onError]),
    isLoading,
  };
};