import AddIcon from '@mui/icons-material/Add';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsIcon from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import * as React from 'react';
import { useHistory } from 'react-router';
import { ALLBOARDS_PAGE } from '../../../constants';

export const SideBar = () => {
  const history = useHistory();
  return (
    <Box
      width={300}
      height={1000}
      position="fixed"
      sx={{ border: 3, borderColor: '#E5E5E5', borderTop: 0 }}
    >
      <List sx={{ marginTop: 10, fontSize: 20 }}>
        <ListItem button onClick={() => history.push(ALLBOARDS_PAGE)}>
          <ListItemIcon>
            <GridViewIcon />
          </ListItemIcon>
          All boards
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          New board
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          Settings
        </ListItem>
      </List>
    </Box>
  );
};
