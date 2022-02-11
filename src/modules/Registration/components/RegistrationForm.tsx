import { yupResolver } from '@hookform/resolvers/yup';
import { Typography, Box, Paper, TextField, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { AUTH_PAGE } from '@/constants/routes';
import {
  NAME_REQUIRED,
  EMAIL_REQUIRED,
  PASSWORD_REQUIRED,
  WRONG_EMAIL,
  PASSWORDS_DOESNT_MATCH,
  NAME_WRONG_LENGTH,
  PASSWORD_WRONG_LENGTH,
  INVALID_CHARACTERS,
} from '../constants';
import { SignUpCredentialsForm } from '../types';

const DEFAULT_FORM_VALUES: SignUpCredentialsForm = {
  name: '',
  email: '',
  password: '',
  confirmedPassword: '',
};

function submit() {
  // Для примера
  setTimeout(() => console.log('Сообщение отправлено'), 1000);
}

export function RegistrationForm() {
  const registrationFormScheme = yup.object({
    name: yup
      .string()
      .required(NAME_REQUIRED)
      .min(1, NAME_WRONG_LENGTH)
      .max(50, NAME_WRONG_LENGTH)
      .trim('Remove leading and trailing whitespaces')
      .matches(/^[\wа-яё-]+$/gim, INVALID_CHARACTERS)
      .strict(true),
    email: yup.string().required(EMAIL_REQUIRED).email(WRONG_EMAIL),
    confirmedPassword: yup
      .string()
      .required(PASSWORD_REQUIRED)
      .equals([yup.ref('password')], PASSWORDS_DOESNT_MATCH),
    password: yup
      .string()
      .required(PASSWORD_REQUIRED)
      .min(8, PASSWORD_WRONG_LENGTH)
      .max(50, PASSWORD_WRONG_LENGTH),
  });

  const { control, handleSubmit } = useForm({
    defaultValues: DEFAULT_FORM_VALUES,
    resolver: yupResolver(registrationFormScheme),
  });

  const history = useHistory();

  return (
    <Paper>
      <form onSubmit={handleSubmit(submit)}>
        <Box
          display="flex"
          flexDirection="column"
          px={6}
          py={8}
          gap={3}
          width="450px"
        >
          <Typography align="center" variant="h6">
            Registration
          </Typography>
          <Controller<SignUpCredentialsForm>
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                variant="outlined"
                label="Name"
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Controller<SignUpCredentialsForm>
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                variant="outlined"
                label="E-mail"
                type="email"
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Controller<SignUpCredentialsForm>
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                variant="outlined"
                label="Password"
                type="password"
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Controller<SignUpCredentialsForm>
            name="confirmedPassword"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                variant="outlined"
                label="Repeat password"
                type="password"
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Box display="flex" justifyContent="space-between">
            <Button
              variant="text"
              type="button"
              onClick={() => history.push(AUTH_PAGE)}
            >
              Already have an account? Log In
            </Button>
            <Button variant="contained" type="submit">
              Sign up
            </Button>
          </Box>
        </Box>
      </form>
    </Paper>
  );
}
