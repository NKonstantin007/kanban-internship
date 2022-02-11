/* SignUpCredentialsForm -> SignUpCredentials */

import { SignUpCredentialsForm } from '@/modules/Registration/types';
import { SignUpCredentials } from '@/types/registration';

export function toSignUpCredentials(
  SignUpCredentialsData: SignUpCredentialsForm,
): SignUpCredentials {
  return <SignUpCredentials>SignUpCredentialsData;
}
