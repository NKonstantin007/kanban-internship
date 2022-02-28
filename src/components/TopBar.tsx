import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar, Stack, Toolbar, Typography, Button } from '@mui/material';
import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { getUserById } from '@/data/user';
import { useLogoutUser } from '@/hooks/useLogoutUser';

export const TopBar = () => {
  const [userName, setUserName] = useState('');

  const location = useLocation();

  const visible = useMemo(
    () =>
      location.pathname !== '/auth' &&
      location.pathname !== '/signup' &&
      location.pathname !== '/newuser',
    [location],
  );

  useEffect(() => {
    if (visible) {
      getUserById(localStorage.userId).then((user) => {
        setUserName(user.name);
      });
    }
  }, [visible]);

  const { logout } = useLogoutUser({});
  if (visible) {
    return (
      <AppBar
        position="fixed"
        sx={{
          top: '0',
          backgroundColor: '#F2F2F2',
          color: '#000000',
          maxHeight: '60px',
        }}
        elevation={0}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <img src="https://i.ibb.co/KFP7H8w/logo.png" alt="logo" />
          <Stack spacing={4} direction="row" onClick={() => logout()}>
            <Typography sx={{ mt: '6px' }}>Hello, {userName}!</Typography>
            <Button color="error" variant="outlined">
              <LogoutIcon />
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    );
  }
  return null;
};
