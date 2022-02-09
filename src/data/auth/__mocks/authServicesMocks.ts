import { SignInUserData, SignInUserResponse } from '@/types/auth';
import { withDelay } from '@/utils/time';

export const signInUserMock = withDelay(
  (data: SignInUserData): SignInUserResponse => {
    return {
      token: btoa(data.email),
      refreshToken: btoa(data.email),
    };
  },
  1000,
);
