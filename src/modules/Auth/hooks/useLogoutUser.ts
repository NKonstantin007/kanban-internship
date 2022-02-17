import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useLogoutUserMutation } from '@/queries/auth/authMutations';
import { SIGNUP_PAGE } from '../../../constants';

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
          history.push(SIGNUP_PAGE);
        },
        onError,
      });
    }, [history, mutate, onError]),
    isLoading,
  };
};
