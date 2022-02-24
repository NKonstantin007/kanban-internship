import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  LinearProgress,
} from '@mui/material';
import Select from '@mui/material/Select';
import { useEffect, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Dialog as DialogType } from '@/types/dialog';
import { Status } from '@/types/status';
import { Task } from '@/types/task';
import { User } from '@/types/user';
import { useCreateTask, useUpdateTask } from '../hooks';

type TaskDialogType = {
  dialog: DialogType;
  isCreate: boolean;
  currentTask?: Task;
  users: User[];
  statuses: Status[];
  onCreate: () => void;
  onUpdate: () => void;
  boardId: string;
};

type TaskForm = {
  name: string;
  description: string;
  assignedTo: string;
  statusId: string;
};

const TASK_FORM_DEFAULT_VALUES: TaskForm = {
  name: '',
  description: '',
  assignedTo: 'void',
  statusId: 'status1',
};

const DIALOG_FORM_SCHEME = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .max(128, 'Use no more 128 characters for name'),
  description: yup
    .string()
    .max(1024, 'Use no more 1024 characters for description'),
});

export function TaskFormDialog({
  dialog,
  isCreate,
  currentTask,
  users,
  statuses,
  onCreate,
  onUpdate,
  boardId,
}: TaskDialogType) {
  const { control, reset, trigger, getValues, formState } = useForm({
    defaultValues: TASK_FORM_DEFAULT_VALUES,
    resolver: yupResolver(DIALOG_FORM_SCHEME),
  });
  useEffect(() => {
    const initialValues =
      !isCreate && currentTask ? currentTask : TASK_FORM_DEFAULT_VALUES;
    reset(initialValues);
  }, [isCreate, reset, currentTask]);

  const { createTask, isCreatingTask } = useCreateTask();
  const { updateTask, isUpdatingTask } = useUpdateTask();

  const renderUserSelect = useCallback(
    ({ field }) => (
      <FormControl fullWidth>
        <InputLabel id="user-label">User</InputLabel>
        <Select labelId="user-label" id="user-select" label="User" {...field}>
          <MenuItem value="void">(Not assigned)</MenuItem>
          {users.map((user) => (
            <MenuItem key={user.id} value={user.id}>
              {user.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    ),
    [users],
  );

  const renderStatusSelect = useCallback(
    ({ field }) => (
      <FormControl fullWidth>
        <InputLabel id="status-label">Status</InputLabel>
        <Select
          labelId="status-label"
          id="status-select"
          label="Status"
          {...field}
        >
          {statuses.map((status) => (
            <MenuItem key={status.id} value={status.id}>
              {status.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    ),
    [statuses],
  );

  async function saveForm() {
    await trigger();
    if (formState.isValid) {
      const taskData = getValues();
      if (isCreate) {
        createTask(
          { ...taskData, boardId, elapsedTime: 0 },
          {
            onSuccess: () => onCreate(),
          },
        );
      } else {
        updateTask(
          { ...taskData, id: currentTask!.id, boardId, elapsedTime: 0 },
          {
            onSuccess: () => onUpdate(),
          },
        );
      }
      dialog.close();
    }
  }

  return (
    <Dialog open={dialog.isOpen} onClose={() => dialog.close()}>
      <DialogTitle>
        {isCreate ? 'Create task' : `Edit task «${currentTask?.name}»`}
      </DialogTitle>
      <DialogContent>
        {(isCreatingTask || isUpdatingTask) && <LinearProgress />}
        <form>
          <Stack spacing={4} sx={{ width: 500, pt: '6px' }}>
            <Controller<TaskForm>
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  fullWidth
                  autoFocus={isCreate}
                  label="Name"
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  required
                  {...field}
                />
              )}
            />
            <Controller<TaskForm>
              name="description"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  fullWidth
                  label="Description"
                  multiline
                  minRows={3}
                  maxRows={10}
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  {...field}
                />
              )}
            />
            <Stack direction="row" spacing={3}>
              <Controller<TaskForm>
                name="assignedTo"
                control={control}
                render={renderUserSelect}
              />
              {isCreate || (
                <Controller<TaskForm>
                  name="statusId"
                  control={control}
                  render={renderStatusSelect}
                />
              )}
            </Stack>
          </Stack>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dialog.close()}>Cancel</Button>
        <Button onClick={() => saveForm()}>
          {isCreate ? 'Create' : 'Save'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
