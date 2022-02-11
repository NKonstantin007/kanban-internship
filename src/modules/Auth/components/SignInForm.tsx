import { yupResolver } from '@hookform/resolvers/yup';
import {
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  Stack,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
// import { HOME_PAGE, SIGNUP_PAGE } from '@/constants/routes';
import { loginUser } from '@/data/auth';
import { SignInUserData } from '@/types/auth';
import { HOME_PAGE, SIGNUP_PAGE } from '../../../constants/routes';

const DEFAULT_FORM_VALUES: SignInUserData = {
  email: '',
  password: '',
};

export const SignInForm = () => {
  const loginFormScheme = yup.object({
    email: yup
      .string()
      .required('Enter a e-mail address')
      .email('E-mail address is wrong'),
    password: yup.string().required('Enter a password'),
  });

  const { handleSubmit, control } = useForm({
    defaultValues: DEFAULT_FORM_VALUES,
    resolver: yupResolver(loginFormScheme),
  });

  const history = useHistory();

  function signIn(data: SignInUserData): void {
    loginUser(data).then(() => history.push(HOME_PAGE));
  }

  return (
    <Paper variant="outlined">
      <Box
        display="flex"
        flexDirection="column"
        gap={3}
        px={8}
        py={6}
        width="450px"
      >
        <Box display="flex" gap={2} alignItems="center" justifyContent="center">
          <Typography variant="h6" align="center">
            Login
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(signIn)}>
          <Box display="flex" flexDirection="column" gap={4}>
            <Controller<SignInUserData>
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  error={fieldState.invalid}
                  helperText={fieldState?.error?.message}
                  label="E-mail"
                  fullWidth
                  type="email"
                  {...field}
                />
              )}
            />
            <Controller<SignInUserData>
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  error={fieldState.invalid}
                  helperText={fieldState?.error?.message}
                  label="Password"
                  type="password"
                  fullWidth
                  {...field}
                />
              )}
            />
            <Box
              display="flex"
              justifyContent="space-between"
              flexDirection="row"
            >
              <Button
                variant="text"
                type="button"
                onClick={() => history.push(SIGNUP_PAGE)}
              >
                Sign up for an account
              </Button>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" type="submit">
                  Log In
                </Button>
              </Stack>
            </Box>
          </Box>
        </form>
      </Box>
    </Paper>
  );
};
