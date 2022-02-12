import {
  // Box,
  Paper,
  Typography,
  /* Container,
  Avatar,
  Stack, */
} from '@mui/material';

export function ProjectInfo({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <Paper variant="outlined">
      <Typography variant="caption">{name}</Typography>
      <Typography>{description}</Typography>
    </Paper>
  );
}
