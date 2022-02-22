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
import { Task } from '@/types/task';
import { useTasks, useUserData, useUserNames } from '../hooks';
import { List } from './List';
import { TaskFormDialog } from './TaskFormDialog';
import { TaskInfoDialog } from './TaskInfoDialog';

export function Board() {
  const statuses = getStatuses();
  const board = getBoardInfo();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tasks, setTasks] = useTasks(getTasks());
  const [taskId, setTaskId, taskFormDialog] = useDialogState<string>('');
  const [, , taskInfoDialog] = useDialogState<string>('');
  const [users, setUsers] = useUserData([]);
  const [userNames, setUserNames] = useUserNames({});
  const [isCreate, setCreate] = useState<boolean>(false);
  const [currentTask, setCurrentTask] = useState<Task>();

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
  }, [setUserNames, setUsers]);

  useEffect(() => {
    setCurrentTask(tasks.find((task) => task.id === taskId));
  }, [taskId, tasks]);

  function openCreateDialog() {
    setCreate(true);
    taskFormDialog.open();
  }

  function onTaskClick(id: string) {
    setCreate(false);
    setTaskId(id);
    taskInfoDialog.open();
  }

  function onTaskClickInList() {
    return onTaskClick;
  }

  function openEditDialog() {
    taskInfoDialog.close();
    taskFormDialog.open();
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
      <TaskFormDialog
        dialog={taskFormDialog}
        isCreate={isCreate}
        currentTask={currentTask}
        users={users}
        statuses={statuses}
      />
      <TaskInfoDialog
        dialog={taskInfoDialog}
        currentTask={currentTask}
        userName={currentTask ? userNames[currentTask.assignedTo] : ''}
        status={
          currentTask
            ? statuses.find((status) => status.id === currentTask.statusId)
                ?.name
            : ''
        }
        onClickEditButton={() => openEditDialog()}
      />
    </Container>
  );
}
