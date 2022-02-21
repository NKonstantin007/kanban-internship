import AddIcon from '@mui/icons-material/Add';
import { Container, Stack, Typography, Button, Dialog } from '@mui/material';
import { getBoard } from '@/data/board';
import { getStatuses } from '@/data/statuses';
import { getTasks } from '@/data/tasks';
import { useDialogState } from '@/hooks/useDialogState';
import { List } from './List';

export function Board() {
  const statuses = getStatuses();
  const tasks = getTasks();
  const board = getBoard();
  const [editTaskData, setEditTaskData, editTaskDialog] =
    useDialogState<boolean>(false);
  return (
    <Container>
      <Stack direction="row" sx={{ ml: 2, my: 5 }} spacing={4}>
        <Typography variant="h5">{board.name}</Typography>
        <Button variant="contained" onClick={() => editTaskDialog.open()}>
          <AddIcon sx={{ mr: 2 }} />
          Create new task
        </Button>
      </Stack>
      <Stack direction="row" spacing={4}>
        {statuses.map((status) => {
          const tasksInList = tasks.filter(
            (task) => task.statusId === status.id && task.boardId === board.id,
          );
          return (
            <List key={status.id} status={status.name} tasks={tasksInList} />
          );
        })}
      </Stack>
      <Dialog
        open={editTaskDialog.isOpen}
        onClose={() => editTaskDialog.close()}
      >
        Какой-то текст
      </Dialog>
    </Container>
  );
}
