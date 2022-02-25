import { Box, Paper, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AUTH_PAGE } from '@/constants/routes';

export function NewUser() {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => history.push(AUTH_PAGE), 5000);
    return () => clearTimeout(timer);
  }, [history]);

  return (
    <Box
      display="flex"
      width="100%"
      height="100vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Paper sx={{ p: 4 }}>
        <Typography variant="h6" sx={{ pb: 3 }}>
          Your account have been created
        </Typography>
        <Typography>
          <Link to="/auth">Click</Link> to login page or you will be moved in 5
          seconds.
        </Typography>
      </Paper>
    </Box>
  );
}
