import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@mui/material/Avatar';
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
