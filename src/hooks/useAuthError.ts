import React, { useState } from 'react';

export function useAuthError(): [
  React.Dispatch<React.SetStateAction<string>>,
  string,
] {
  const [registrationError, setRegistrationError]: [
    string,
    React.Dispatch<React.SetStateAction<string>>,
  ] = useState('noError');
  let registrationErrorText = '';
  if (registrationError === 'noError') {
    registrationErrorText = '';
  }
  if (registrationError === 'Network Error') {
    registrationErrorText = 'The form was not submitted. Check connection';
  }
  if (registrationError === 'Request failed with status code 409') {
    registrationErrorText = 'This e-mail already registered';
  }
  if (registrationError === 'Request failed with status code 403') {
    registrationErrorText = 'Invalid e-mail or password';
  }
  return [setRegistrationError, registrationErrorText];
}
