/* SignUpCredentialsForm -> SignUpCredentials */

import { SignUpCredentialsForm } from '@/modules/Registration/types';
import { SignUpCredentials } from '@/types/registration';

export function toSignUpCredentials(
  signUpCredentialsData: SignUpCredentialsForm,
): SignUpCredentials {
  return {
    name: signUpCredentialsData.name,
    email: signUpCredentialsData.email,
    password: signUpCredentialsData.password,
  };
}
