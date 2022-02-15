import {
  Box,
  List,
  ListItem,
  Typography,
  CircularProgress,
} from '@mui/material';
import React from 'react';
import { useProjects } from '../hooks/useProjects';

export const Projects: React.FC = () => {
  const { projects, isLoading, isFetching } = useProjects();

  // TODO: remove sx
  const bgColor = isFetching ? '#81b29a' : 'white';

  return (
    <Box border={1} sx={{ bgcolor: bgColor }}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Box width={400}>
          {/* TODO: remove sx */}
          <List sx={{ maxHeight: '100%', overflow: 'auto' }}>
            {projects.map(({ name, description }) => {
              return (
                <ListItem>
                  <Typography noWrap>{`${name}, ${description}`}</Typography>
                </ListItem>
              );
            })}
          </List>
        </Box>
      )}
    </Box>
  );
};
