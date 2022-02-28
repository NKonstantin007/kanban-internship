import { Stack, Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useLogoutUser } from '../hooks/useLogoutUser';

export const TopBar = () => {
  const { logout } = useLogoutUser({});
  return (
    <AppBar
      position="absolute"
      sx={{
        top: '0',
        backgroundColor: '#F2F2F2',
        color: '#000000',
        maxHeight: '60px',
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, ml: '15px' }}>
          <img
            src="https://i.ibb.co/KFP7H8w/logo.png"
            alt="LOGO"
            background-color="#FF0000"
          />
        </Typography>
        <Typography variant="h6">Hello, Cindy Baker!</Typography>
        <Stack
          spacing={2}
          direction="row"
          sx={{ marginLeft: '15px', color: '#FF0000' }}
          onClick={logout}
        >
          <Button variant="contained" color="error">
            Log Out
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
