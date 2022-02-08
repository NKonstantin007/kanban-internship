import {
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  Stack,
  CircularProgress,
} from '@mui/material';
import { useCallback } from 'react';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { SignInUserData } from '@/types/auth';
import { MAIN_PAGE, SIGNUP_PAGE } from '../../../constants';
import { useSignInUser } from '../hooks/useSignInUser';

const DEFAULT_FORM_VALUES: SignInUserData = {
  name: '',
  password: '',
};

export const SignInForm = () => {
  const { handleSubmit, control, reset, trigger, ...rest } = useForm({
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const history = useHistory();

  const { mutate: signInUser, isLoading: isSubmitting } = useSignInUser();

  const onSubmit = useCallback(
    (data: SignInUserData) => {
      signInUser(data, {
        onSuccess: () => {
          history.push(MAIN_PAGE);
        },
      });
    },
    [history, signInUser],
  );

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
          {isSubmitting && <CircularProgress size={20} />}
        </Box>
        <FormProvider<SignInUserData>
          trigger={trigger}
          reset={reset}
          handleSubmit={handleSubmit}
          control={control}
          {...rest}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box display="flex" flexDirection="column" gap={4}>
              <Controller<SignInUserData>
                name="name"
                render={({ field, fieldState }) => (
                  <TextField
                    error={fieldState.invalid}
                    helperText={fieldState?.error?.message}
                    label="E-mail"
                    fullWidth
                    disabled={isSubmitting}
                    type="email"
                    {...field}
                  />
                )}
              />
              <Controller<SignInUserData>
                name="password"
                render={({ field, fieldState }) => (
                  <TextField
                    error={fieldState.invalid}
                    helperText={fieldState?.error?.message}
                    label="Password"
                    type="password"
                    fullWidth
                    disabled={isSubmitting}
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
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Log In
                  </Button>
                </Stack>
              </Box>
            </Box>
          </form>
        </FormProvider>
      </Box>
    </Paper>
  );
};
