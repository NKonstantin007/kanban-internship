import { Box } from '@mui/material';
import { Avatar } from './Avatar';
import { Projects } from './Projects';

export function Home() {
  return (
    <Box
      display="flex"
      width="100%"
      height="100vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box position="absolute" top="10px" right="10px">
        <Avatar />
      </Box>
      <Projects />
    </Box>
  );
}
