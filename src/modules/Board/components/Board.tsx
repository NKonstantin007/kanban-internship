import AddIcon from '@mui/icons-material/Add';
import {
  Container,
  Stack,
  Typography,
  Button,
  CircularProgress,
} from '@mui/material';
import { useState, useEffect, useMemo, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import { getBoardInfo } from '@/data/board';
import { getStatuses } from '@/data/statuses';
import { getUsers } from '@/data/user';
import { useDialogState } from '@/hooks/useDialogState';
import { Task } from '@/types/task';
import { User } from '@/types/user';
import { useTasks, useUserData } from '../hooks';
import { List } from './List';
import { TaskFormDialog } from './TaskFormDialog';
import { TaskInfoDialog } from './TaskInfoDialog';

export function Board() {
  const statuses = getStatuses();
  const board = getBoardInfo();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { tasks, refetchTasks, isLoadingTasks } = useTasks();
  // eslint-disable-next-line prettier/prettier
  const [currentTask, setCurrentTask, taskFormDialog] = useDialogState<Task | undefined>(undefined);
  const [, , taskInfoDialog] = useDialogState<string>('');
  const [users, setUsers] = useUserData([]);
  const [isCreate, setCreate] = useState<boolean>(false);

  const { boardId } = useParams<{ boardId: string }>();

  useEffect(() => {
    const usersPromise = getUsers();
    usersPromise.then((result: SetStateAction<User[]>) => setUsers(result));
  }, [setUsers]);

  const userNames = useMemo(() => {
    const usersIdToName: { [id: string]: string } = {};
    users.forEach((user) => {
      usersIdToName[user.id] = user.name;
    });
    return usersIdToName;
  }, [users]);

  function openCreateDialog() {
    setCreate(true);
    taskFormDialog.open();
  }

  function onTaskClick(task: Task) {
    setCreate(false);
    setCurrentTask(task);
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
      {isLoadingTasks && (
        <Stack direction="row" spacing={2}>
          <CircularProgress size={18} /> <Typography>Загрузка...</Typography>
        </Stack>
      )}
      <Stack direction="row" spacing={4} sx={{ mb: 2 }}>
        {statuses.map((status) => {
          // console.log(tasks);
          const tasksInList = tasks?.filter(
            (task) => task.boardId === boardId,
            // task.statusId === status.id && task.boardId === board.id,
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
      <TaskFormDialog
        dialog={taskFormDialog}
        isCreate={isCreate}
        currentTask={currentTask}
        users={users}
        statuses={statuses}
        onCreate={() => refetchTasks()}
        onUpdate={() => refetchTasks()}
        boardId={boardId}
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
