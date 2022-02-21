import { Paper, Typography, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Task } from '@/types/task';
import { TaskCard } from './TaskCard';

export function List({ status, tasks }: { status: string; tasks: Task[] }) {
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
        {tasks.map(({ id, name, description, assignedTo }) => (
          <TaskCard
            key={id}
            name={name}
            description={description}
            assignedTo={assignedTo}
          />
        ))}
      </Stack>
    </Paper>
  );
}
