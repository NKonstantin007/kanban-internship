import { Box, List, Typography, CircularProgress } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React from 'react';
import { useBoards } from '../Home/hooks/useBoards';

export function AllBoards() {
  const { boards, isLoading } = useBoards();
  return (
    <Box sx={{ bgcolor: '#FFFFFF', ml: 10 }}>
      <h1>ALL BOARDS</h1>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Box width={500}>
          <List sx={{ maxHeight: '100%', overflow: 'auto' }}>
            {boards.map(({ name }) => {
              return (
                <Card sx={{ minWidth: 275, bgcolor: '#E5E5E5', mb: 10 }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 20 }}>{`${name}`}</Typography>
                  </CardContent>
                </Card>
              );
            })}
          </List>
        </Box>
      )}
    </Box>
  );
}
