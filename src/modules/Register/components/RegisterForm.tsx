import { Typography, Box, Paper, TextField, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { RegisterUserData } from '@/types/register';

const DEFAULT_FORM_VALUES: RegisterUserData = {
  name: '',
  login: '',
  password: '',
};

export function RegisterForm() {
  const { control } = useForm({
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const history = useHistory();

  /* const schema = yup.object({
    name: yup.string().required('name is required'),
    login: yup.string().email().required('e-mail must be a valid email'),
    password: yup.string().min(8, 'password must be at least 8 characters long')}) */

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
        <Controller<RegisterUserData>
          name="name"
          control={control}
          render={({ field }) => (
            <TextField variant="outlined" label="Name" {...field} />
          )}
        />
        <Controller<RegisterUserData>
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
        <Controller<RegisterUserData>
          name="password"
          control={control}
          render={({ field }) => (
            <TextField variant="outlined" label="Password" {...field} />
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
