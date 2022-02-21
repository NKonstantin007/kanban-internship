import AddIcon from '@mui/icons-material/Add';
import { Container, Stack, Typography, Button } from '@mui/material';
import { useEffect } from 'react';
import { getBoard } from '@/data/board';
import { getStatuses } from '@/data/statuses';
import { getTasks } from '@/data/tasks';
import { getUsers } from '@/data/user';
import { useDialogState } from '@/hooks/useDialogState';
import { EditTaskDialog } from './EditTaskDialog';
import { List } from './List';

export function Board() {
  const statuses = getStatuses();
  const tasks = getTasks();
  const board = getBoard();
  const [taskId, setTaskId, editTaskDialog] = useDialogState<string>('');
  useEffect(() => {
    const users = getUsers();
    const usersIdToName = {};
    // eslint-disable-next-line func-names
    users.then(() => users.forEach(function (user) {
      usersIdToName[user.id] = user.name;
    }));
  });

  function onTaskClick(id: string) {
    editTaskDialog.open();
    setTaskId(id);
  }

  function onTaskClickInList() {
    return onTaskClick;
  }

  return (
    <Container>
      <Stack direction="row" sx={{ ml: 2, my: 5 }} spacing={4}>
        <Typography variant="h5">{board.name}</Typography>
        <Button variant="contained" onClick={() => editTaskDialog.open()}>
          <AddIcon sx={{ mr: 1 }} />
          Create task
        </Button>
      </Stack>
      <Stack direction="row" spacing={4}>
        {statuses.map((status) => {
          const tasksInList = tasks.filter(
            (task) => task.statusId === status.id && task.boardId === board.id,
          );
          return (
            <List
              key={status.id}
              status={status.name}
              tasks={tasksInList}
              onTaskClick={() => onTaskClickInList()}
            />
          );
        })}
      </Stack>
      <EditTaskDialog dialog={editTaskDialog} taskId={taskId} />
    </Container>
  );
}
