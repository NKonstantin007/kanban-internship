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

type TaskCardDescription = {
  id: string;
  name: string;
  description: string;
  assignedTo: string;
  onTaskClick: (id: string) => void;
};

export function TaskCard({
  id,
  name,
  description,
  onTaskClick,
  assignedTo,
}: TaskCardDescription) {
  return (
    <Card>
      {/* <CardActionArea onClick={() => onTaskClick(id)}> */}
      <CardActionArea onClick={() => onTaskClick(id)}>
        <CardContent>
          <Box sx={{ marginBottom: 2 }}>
            <Typography>{name}</Typography>
            <Typography variant="caption" color={grey[600]}>
              {description.length < 75
                ? description
                : `${description.slice(0, 75)}…`}
            </Typography>
          </Box>
          <Stack direction="row" spacing={1}>
            <PersonIcon sx={{ fontSize: 18 }} />
            <Typography variant="body2">{assignedTo}</Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
