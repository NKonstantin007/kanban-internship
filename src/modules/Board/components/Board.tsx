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
import { getALLUsers } from '@/data/user';
import { useDialogState } from '@/hooks/useDialogState';
import { Board } from '@/types/board';
import { Task } from '@/types/task';
import { User } from '@/types/user';
import { useTasks, useUserData, useBoardId, useAllStatuses } from '../hooks';
import { List } from './List';
import { TaskFormDialog } from './TaskFormDialog';
import { TaskInfoDialog } from './TaskInfoDialog';

export function Board() {
  const { statuses } = useAllStatuses();
  const { tasks, refetchTasks, isLoadingTasks } = useTasks();
  const [currentTask, setCurrentTask, taskFormDialog] = useDialogState<Task>();
  const [, , taskInfoDialog] = useDialogState<string>();
  const [users, setUsers] = useUserData([]);
  const [isCreate, setCreate] = useState<boolean>(false);
  const { boardId } = useParams<{ boardId: string }>();
  const { data, isLoading, isError } = useBoardId(boardId);

  useEffect(() => {
    const usersPromise = getALLUsers();
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

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  if (isError) {
    return <h2>OOOoooops!</h2>;
  }

  return (
    <Container>
      <Stack direction="row" sx={{ ml: 2, my: 5, mt: 20 }} spacing={4}>
        <Typography variant="h5">{data?.name}</Typography>
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
          const tasksInList = tasks?.filter(
            (task) => task.boardId === boardId && status.id === task.statusId,
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
        onCreate={refetchTasks}
        onUpdate={refetchTasks}
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
