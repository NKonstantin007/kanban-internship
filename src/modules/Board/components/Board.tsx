import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container, Stack, Typography, Button } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import { useState, useEffect } from 'react';
import { getBoardInfo } from '@/data/board';
import { getStatuses } from '@/data/statuses';
import { getTasks } from '@/data/tasks';
import { getUsers } from '@/data/user';
import { useDialogState } from '@/hooks/useDialogState';
import { useTasks, useUserData, useUserNames } from '../hooks';
import { List } from './List';
import { TaskDialog } from './TaskDialog';

export function Board() {
  const statuses = getStatuses();
  const [tasks, setTasks] = useTasks(getTasks());
  const board = getBoardInfo();
  const [taskId, setTaskId, editTaskDialog] = useDialogState<string>('');
  const [users, setUsers] = useUserData([]);
  const [userNames, setUserNames] = useUserNames({});
  const [isCreate, setCreate] = useState<boolean>(false);

  useEffect(() => {
    const usersPromise = getUsers();
    usersPromise.then((result) => {
      const usersIdToName: { [id: string]: string } = {};
      setUsers(result);
      result.forEach((user) => {
        usersIdToName[user.id] = user.name;
      });
      setUserNames(usersIdToName);
    });
  });

  function openCreateDialog() {
    setCreate(true);
    editTaskDialog.open();
  }

  function onTaskClick(id: string) {
    setCreate(false);
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
        <Button variant="contained" onClick={() => openCreateDialog()}>
          <AddIcon sx={{ mr: 1 }} />
          Create task
        </Button>
      </Stack>
      <Stack direction="row" spacing={4} sx={{ mb: 2 }}>
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
              users={userNames}
            />
          );
        })}
      </Stack>
      <Button sx={{ color: lightBlue[500] }}>
        <DeleteIcon /> Removed tasks
      </Button>
      <TaskDialog
        dialog={editTaskDialog}
        taskId={tasks.find((task) => task.id === taskId)!.name}
        isCreate={isCreate}
        tasks={tasks}
        users={users}
        statuses={statuses}
      />
    </Container>
  );
}
