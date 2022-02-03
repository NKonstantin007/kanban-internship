import { Box } from '@mui/material';
import { RegisterForm } from './RegisterForm';

export function Register() {
  return (
    <Box
      display="flex"
      width="100%"
      height="100vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <RegisterForm />
    </Box>
  );
}
