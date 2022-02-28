import { Box } from '@mui/material';
import { SignInForm } from './SignInForm';

export function Auth() {
  return (
    <Box
      display="flex"
      width="100%"
      height="calc(100vh - 100px)"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <SignInForm />
    </Box>
  );
}
