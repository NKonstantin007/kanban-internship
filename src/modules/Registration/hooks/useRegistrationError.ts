import { useState } from 'react';

/* Ошибки: null, sendError (ошибка отправки), alreadyHaveAccountError (уже есть аккаунт) */
export function useRegistrationError() {
  const [registrationError, setRegistrationError] = useState(null);
  let registrationErrorText = '';
  if (registrationError == null) {
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
