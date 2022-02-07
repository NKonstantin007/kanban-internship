import { SignUpCredentials } from '@/types/registration';

export type SignUpCredentialsForm = SignUpCredentials & {
  confirmedPassword: string;
};
