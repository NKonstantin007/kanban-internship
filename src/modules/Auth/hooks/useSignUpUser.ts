import { useSignUnUserMutation } from '../../../queries/auth';

export function useSignUpUser() {
  return useSignUnUserMutation({
    onSuccess: (data) => {
      // Store a token to the local storage
      console.log(data);
    },
  });
}
