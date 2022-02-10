import { useSignUpUserMutation } from '../../../queries/auth';

export function useSignUpUser() {
  return useSignUpUserMutation({
    onSuccess: (data) => {
      // Store a token to the local storage
      console.log(data);
    },
  });
}
