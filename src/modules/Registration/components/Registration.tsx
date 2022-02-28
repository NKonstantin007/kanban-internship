import { Box } from '@mui/material';
import { RegistrationForm } from './RegistrationForm';

export function Registration() {
  return (
    <Box
      display="flex"
      width="100%"
      height="calc(100vh - 100px)"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <RegistrationForm />
    </Box>
  );
}
