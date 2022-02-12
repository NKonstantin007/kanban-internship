/* SignUpCredentialsForm -> SignUpCredentials */

import { SignUpCredentialsForm } from '@/modules/Registration/types';
import { SignUpCredentials } from '@/types/registration';

export function toSignUpCredentials(
  SignUpCredentialsData: SignUpCredentialsForm,
): SignUpCredentials {
  return {
    name: SignUpCredentialsData.name,
    email: SignUpCredentialsData.email,
    password: SignUpCredentialsData.password,
  };
}
