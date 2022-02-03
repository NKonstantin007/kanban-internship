import { useSignInUserMutation } from '../../../queries/auth';

export function useSignInUser() {
  return useSignInUserMutation({
    onSuccess: (data) => {
      localStorage.setItem('access_token')
      // Store a token to the local storage
      console.log(data);
    },
  });
}
