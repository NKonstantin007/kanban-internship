import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ButtonMenu } from './ButtonMenu';

export const TopBar = () => {
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
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          LOGO
        </Typography>
        <Avatar
          alt="Cindy Baker"
          src="/static/images/avatar/3.jpg"
          sx={{ marginRight: '20px' }}
        />
        <Typography variant="h6">Cindy Baker</Typography>
        <ButtonMenu />
      </Toolbar>
    </AppBar>
  );
};
