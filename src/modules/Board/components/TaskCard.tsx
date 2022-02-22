import PersonIcon from '@mui/icons-material/Person';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  CardActionArea,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { useEffect } from 'react';

type TaskCardDescription = {
  id: string;
  name: string;
  description: string;
  assignedTo: string;
  onTaskClick: (id: string) => void;
  users: { [id: string]: string };
};

export function TaskCard({
  id,
  name,
  description,
  assignedTo,
  onTaskClick,
  users,
}: TaskCardDescription) {
  return (
    <Card>
      <CardActionArea onClick={() => onTaskClick(id)}>
        <CardContent>
          <Box sx={{ marginBottom: 2 }}>
            <Typography>{name}</Typography>
            <Typography variant="caption" color={grey[600]}>
              {description}
            </Typography>
          </Box>
          <Stack direction="row" spacing={1}>
            <PersonIcon sx={{ fontSize: 18 }} />
            <Typography variant="body2">{users[assignedTo]}</Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
