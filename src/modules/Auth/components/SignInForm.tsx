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
import { useHistory } from 'react-router';
import { SignInUserData } from '@/types/auth';
import { useSignInUser } from '../hooks/useSignInUser';

const DEFAULT_FORM_VALUES: SignInUserData = {
  email: '',
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
          history.push('/');
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
            Sing in
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
                    label="Username"
                    fullWidth
                    disabled={isSubmitting}
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
              <Box alignSelf="flex-end">
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="outlined"
                    type="button"
                    onClick={() => reset()}
                    disabled={isSubmitting}
                  >
                    Reset
                  </Button>
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Sign in
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
