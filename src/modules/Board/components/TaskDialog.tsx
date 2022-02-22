import {
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { Dialog as DialogType } from '@/types/dialog';
import { Status } from '@/types/status';
import { Task } from '@/types/task';
import { User } from '@/types/user';

type TaskDialogType = {
  dialog: DialogType;
  taskId: string;
  isCreate: boolean;
  tasks: Task[];
  users: User[];
  statuses: Status[];
};

type TaskForm = {
  name: string;
  description: string;
  userId: string;
  status: string;
};

export function TaskDialog({
  dialog,
  taskId,
  isCreate,
  tasks,
  users,
  statuses,
}: TaskDialogType) {
  const TASK_FORM_DEFAULT_VALUES: TaskForm = {
    name: '',
    description: '',
    userId: '',
    status: 'desk1',
  };
  const { control } = useForm({
    defaultValues: TASK_FORM_DEFAULT_VALUES,
  });
  return (
    <Dialog open={dialog.isOpen} onClose={() => dialog.close()}>
      <DialogTitle>
        {isCreate ? 'Создать новую задачу' : `Редактировать задачу ${taskId}`}
      </DialogTitle>
      <DialogContent>
        <form>
          <Stack spacing={2} sx={{ width: 400 }}>
            <Controller<TaskForm>
              name="name"
              control={control}
              render={(field) => (
                <TextField fullWidth label="name" required {...field} />
              )}
            />
            <Controller<TaskForm>
              name="description"
              control={control}
              render={(field) => (
                <TextField
                  fullWidth
                  label="description"
                  multiline
                  minRows={3}
                  maxRows={5}
                  {...field}
                />
              )}
            />
            <Controller<TaskForm>
              name="userId"
              control={control}
              render={(field) => (
                <FormControl fullWidth>
                  <InputLabel id="user-label">User</InputLabel>
                  <Select labelId="user-label" id="user-select" label="User">
                    <MenuItem value="">(Not assigned)</MenuItem>
                    <MenuItem value="user1">User 1</MenuItem>
                    <MenuItem value="user2">User 2</MenuItem>
                    <MenuItem value="user3">User 3</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
            {isCreate || (
              <FormControl fullWidth>
                <InputLabel id="desk-label">Desk</InputLabel>
                <Select labelId="desk-label" id="desk-select" label="Desk">
                  <MenuItem value="status1">Analysis</MenuItem>
                  <MenuItem value="status2">In progress</MenuItem>
                  <MenuItem value="status3">Testing</MenuItem>
                  <MenuItem value="status4">Done</MenuItem>
                </Select>
              </FormControl>
            )}
          </Stack>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dialog.close()}>Cancel</Button>
        <Button onClick={() => dialog.close()}>
          {isCreate ? 'Add' : 'Edit'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
