import { Typography, Box, Paper, TextField, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { SignUpCredentialsForm } from '../types';

const DEFAULT_FORM_VALUES: SignUpCredentialsForm = {
  name: '',
  email: '',
  password: '',
  confirmedPassword: '',
};

export function RegistrationForm() {
  const { control } = useForm({
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const history = useHistory();

  return (
    <Paper>
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
          render={({ field }) => (
            <TextField variant="outlined" label="Name" {...field} />
          )}
        />
        <Controller<SignUpCredentialsForm>
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              variant="outlined"
              label="E-mail"
              helperText="Enter your e-mail address"
              {...field}
            />
          )}
        />
        <Controller<SignUpCredentialsForm>
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              {...field}
            />
          )}
        />
        <Controller<SignUpCredentialsForm>
          name="confirmedPassword"
          control={control}
          render={({ field }) => (
            <TextField
              variant="outlined"
              label="Repeat password"
              type="password"
              {...field}
            />
          )}
        />
        <Box display="flex" justifyContent="space-between">
          <Button
            variant="text"
            type="button"
            onClick={() => history.push('/auth')}
          >
            Already have an account? Log In
          </Button>
          <Button variant="contained" type="button">
            Sign up
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
