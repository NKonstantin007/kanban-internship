import { Paper, Typography, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Task } from '@/types/task';
import { TaskCard } from './TaskCard';

type ListType = {
  status: string;
  tasks: Task[];
  onTaskClick: () => (id: string) => void;
  users: { [id: string]: string };
};

export function List({ status, tasks, onTaskClick, users }: ListType) {
  return (
    <Paper
      sx={{
        width: 350,
        px: 2,
        py: 2,
        backgroundColor: grey[100],
        border: 'none',
        height: 'calc(100vh - 130px)',
      }}
      variant="outlined"
    >
      <Stack direction="column" spacing={3}>
        <Typography
          variant="overline"
          sx={{ fontWeight: 500, color: grey[600], marginLeft: 1 }}
        >
          {status}
        </Typography>
        {tasks.map(({ id, name, description, assignedTo }) => (
          <TaskCard
            key={id}
            id={id}
            name={name}
            description={description}
            assignedTo={users[assignedTo]}
            onTaskClick={() => onTaskClick()(id)}
          />
        ))}
      </Stack>
    </Paper>
  );
}
