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
import { Task } from '@/types/task';

type TaskCardDescription = {
  task: Task;
  assignedTo: string;
  onTaskClick: (task: Task) => void;
};

export function TaskCard({
  task,
  assignedTo,
  onTaskClick,
}: TaskCardDescription) {
  const { name, description } = task;
  return (
    <Card>
      <CardActionArea onClick={() => onTaskClick(task)}>
        <CardContent>
          <Box sx={{ marginBottom: 2 }}>
            <Typography>
              {name.length < 30 ? name : `${name.slice(0, 30)}…`}
            </Typography>
            <Typography variant="caption" color={grey[600]}>
              {description.length < 70
                ? description
                : `${description.slice(0, 70)}…`}
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
