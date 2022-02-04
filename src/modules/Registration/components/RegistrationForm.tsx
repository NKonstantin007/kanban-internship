import { Typography, Box, Paper, TextField, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { RegisterUserFormData } from '@/types/registration';

const DEFAULT_FORM_VALUES: RegisterUserFormData = {
  name: '',
  login: '',
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
        <Controller<RegisterUserFormData>
          name="name"
          control={control}
          render={({ field }) => (
            <TextField variant="outlined" label="Name" {...field} />
          )}
        />
        <Controller<RegisterUserFormData>
          name="login"
          control={control}
          render={({ field }) => (
            <TextField
              variant="outlined"
              label="Login"
              helperText="Enter your e-mail address"
              {...field}
            />
          )}
        />
        <Controller<RegisterUserFormData>
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
        <Controller<RegisterUserFormData>
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
