import { yupResolver } from '@hookform/resolvers/yup';
import {
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  Stack,
  LinearProgress,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { SIGNUP_PAGE } from '@/constants/routes';
import { useAuthError } from '@/hooks/useAuthError';
import { SignInUserData } from '@/types/auth';
import { useSignInUser } from '../hooks/useSignInUser';

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

  const [setLoginError, loginErrorText] = useAuthError();

  const { signInUser, isAuthLoading, isAuthError } = useSignInUser({
    onError: (error: Error) => setLoginError(error.message),
  });

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
        <Typography variant="h6" align="center">
          Login
        </Typography>
        <Box>{isAuthLoading && <LinearProgress />}</Box>
        {isAuthError && (
          <Typography
            color="#ff5252"
            sx={{
              fontWeight: 500,
            }}
          >
            {loginErrorText}
          </Typography>
        )}
        <form onSubmit={handleSubmit(signInUser)}>
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
