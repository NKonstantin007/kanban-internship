import { useSignInUserMutation } from '../../../queries/auth';

export function useSignInUser() {
  return useSignInUserMutation({
    onSuccess: () => {
      // Store a token to the local storage
    },
  });
}
