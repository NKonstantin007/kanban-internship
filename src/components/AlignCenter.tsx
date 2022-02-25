import { Box } from '@mui/material';
import React from 'react';

export function AlignCenter({ children }: { children: React.ReactChild }) {
  return (
    <Box
      display="flex"
      width="100%"
      height="100vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  );
}
