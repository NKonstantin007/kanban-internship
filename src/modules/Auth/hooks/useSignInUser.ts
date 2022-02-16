import { useHistory } from 'react-router-dom';
import { HOME_PAGE } from '@/constants/routes';
import { useSignInUserMutation } from '@/queries/auth';
import { SignInUserData } from '@/types/auth';

type UseCreateUserParams = {
  onError: (error: Error) => void;
};

export function useSignInUser({ onError }: UseCreateUserParams) {
  const {
    mutate,
    isLoading: isAuthLoading,
    isError: isAuthError,
  } = useSignInUserMutation();
  const history = useHistory();

  return {
    signInUser: (signUpCredentials: SignInUserData) => {
      return mutate(signUpCredentials, {
        onSuccess: () => {
          history.push(HOME_PAGE);
        },
        onError,
      });
    },
    isAuthLoading,
    isAuthError,
  };
}
