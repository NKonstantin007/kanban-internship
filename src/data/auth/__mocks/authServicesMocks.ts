import { SignInUserData, SignInUserResponse } from '@/types/auth';
import { withDelay } from '@/utils/time';

export const signInUserMock = withDelay(
  (data: SignInUserData): SignInUserResponse => {
    return {
      accessToken: btoa(data.email),
    };
  },
  1000,
);
