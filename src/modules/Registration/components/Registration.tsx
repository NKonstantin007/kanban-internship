import { Box } from '@mui/material';
import { RegistrationForm } from './RegistrationForm';

export function Registration() {
  return (
    <Box
      display="flex"
      width="100%"
      height="100vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <RegistrationForm />
    </Box>
  );
}
