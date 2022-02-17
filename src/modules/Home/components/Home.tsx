import { Box, Paper } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { ALLBOARDS_PAGE } from '../../../constants';
import { Avatar } from './Avatar';
import { ResetText } from './ResetText';
import { TextInfo } from './TextInfo';
import { TextInput } from './TextInput';

export function Home() {
  const history = useHistory();
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
      <Paper variant="outlined">
        <Box px={8} py={6}>
          <Box display="flex" gap={2}>
            <TextInput />
            <ResetText />
          </Box>
          <TextInfo />
        </Box>
      </Paper>
      <button onClick={() => history.push(ALLBOARDS_PAGE)} type="submit">
        to all boards
      </button>
    </Box>
  );
}
