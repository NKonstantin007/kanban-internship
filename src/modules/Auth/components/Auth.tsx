import { Box } from '@mui/material';
import { SignInForm } from './SignInForm';

export function Auth() {
  return (
    <Box
      display="flex"
      width="100%"
      height="100vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <SignInForm />
    </Box>
  );
}
