import React, { useState } from 'react';

export function useAuthError(): [string, React.Dispatch<string>, string] {
  const [registrationError, setRegistrationError]: [
    string,
    React.Dispatch<string>,
  ] = useState('noError');
  let registrationErrorText = '';
  if (registrationError === 'noError') {
    registrationErrorText = '';
  }
  if (registrationError === 'sendError') {
    registrationErrorText = 'The form was not submitted. Check connection';
  }
  if (registrationError === 'alreadyHaveAccountError') {
    registrationErrorText = 'You already have an account';
  }
  return [registrationError, setRegistrationError, registrationErrorText];
}
