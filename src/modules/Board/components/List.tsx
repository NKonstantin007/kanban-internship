import { Paper, Typography, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Task } from '@/types/task';
import { TaskCard } from './TaskCard';

type ListType = {
  status: string;
  tasks?: Task[];
  onTaskClick: () => (task: Task) => void;
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
        height: 'calc(100vh - 100px)',
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
        {tasks?.map((task: Task) => (
          <TaskCard
            key={task.id}
            task={task}
            assignedTo={users[task.assignedTo]}
            onTaskClick={() => onTaskClick()(task)}
          />
        ))}
      </Stack>
    </Paper>
  );
}
