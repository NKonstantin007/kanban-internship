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
} from '@mui/material';
import Select from '@mui/material/Select';
import { useEffect, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Dialog as DialogType } from '@/types/dialog';
import { Status } from '@/types/status';
import { Task } from '@/types/task';
import { User } from '@/types/user';

type TaskDialogType = {
  dialog: DialogType;
  isCreate: boolean;
  currentTask?: Task;
  users: User[];
  statuses: Status[];
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
  assignedTo: '',
  statusId: 'status1',
};

export function TaskFormDialog({
  dialog,
  isCreate,
  currentTask,
  users,
  statuses,
}: TaskDialogType) {
  const { control, reset } = useForm({
    defaultValues: TASK_FORM_DEFAULT_VALUES,
  });
  useEffect(() => {
    const initialValues =
      !isCreate && currentTask ? currentTask : TASK_FORM_DEFAULT_VALUES;
    reset(initialValues);
  }, [isCreate, reset, currentTask]);

  const renderUserSelect = useCallback(
    ({ field }) => (
      <FormControl fullWidth>
        <InputLabel id="user-label">User</InputLabel>
        <Select labelId="user-label" id="user-select" label="User" {...field}>
          <MenuItem value="">(Not assigned)</MenuItem>
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

  return (
    <Dialog open={dialog.isOpen} onClose={() => dialog.close()}>
      <DialogTitle>
        {isCreate ? 'Create task' : `Edit task «${currentTask?.name}»`}
      </DialogTitle>
      <DialogContent>
        <form>
          <Stack spacing={4} sx={{ width: 500, pt: '6px' }}>
            <Controller<TaskForm>
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  autoFocus={isCreate}
                  label="Name"
                  required
                  {...field}
                />
              )}
            />
            <Controller<TaskForm>
              name="description"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Description"
                  multiline
                  minRows={3}
                  maxRows={10}
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
        <Button onClick={() => dialog.close()}>
          {isCreate ? 'Create' : 'Save'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
