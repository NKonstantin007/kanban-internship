import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { ButtonMenu } from './ButtonMenu';

const useStyles = makeStyles(() => ({
  appBar: {
    top: '0',
    backgroundColor: '#F2F2F2',
    color: '#000000',
    maxHeight: '60px',
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    marginRight: '20px',
  },
}));

export const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          LOGO
        </Typography>
        <Avatar
          alt="Cindy Baker"
          src="/static/images/avatar/3.jpg"
          className={classes.avatar}
        />
        <Typography variant="h6">Cindy Baker</Typography>
        <ButtonMenu />
      </Toolbar>
    </AppBar>
  );
};
