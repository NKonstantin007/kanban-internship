import { useHistory } from 'react-router-dom';
import { HOME_PAGE } from '@/constants/routes';
import { useSignInUserMutation } from '@/queries/auth';
import { SignInUserData } from '@/types/auth';

type UseSignInUserParams = {
  onError: (error: Error) => void;
};

export function useSignInUser({ onError }: UseSignInUserParams) {
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
