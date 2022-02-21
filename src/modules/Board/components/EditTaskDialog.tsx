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
import { Dialog as DialogType } from '@/types/dialog';

type EditTaskDialogType = {
  dialog: DialogType;
  taskId: string;
};

export function EditTaskDialog({ dialog, taskId }: EditTaskDialogType) {
  return (
    <Dialog open={dialog.isOpen} onClose={() => dialog.close()}>
      <DialogTitle>Редактировать задачу {taskId}</DialogTitle>
      <DialogContent>
        <form>
          <Stack spacing={2} sx={{ width: 400 }}>
            <TextField fullWidth label="name" required />
            <TextField
              fullWidth
              label="description"
              multiline
              minRows={3}
              maxRows={5}
            />
            <FormControl fullWidth>
              <InputLabel id="user-label">User</InputLabel>
              <Select labelId="user-label" id="user-select" label="User">
                <MenuItem value="">(Not assigned)</MenuItem>
                <MenuItem value="user1">User 1</MenuItem>
                <MenuItem value="user2">User 2</MenuItem>
                <MenuItem value="user3">User 3</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="desk-label">Desk</InputLabel>
              <Select labelId="desk-label" id="desk-select" label="Desk">
                <MenuItem value="status1">Analysis</MenuItem>
                <MenuItem value="status2">In progress</MenuItem>
                <MenuItem value="status3">Testing</MenuItem>
                <MenuItem value="status4">Done</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dialog.close()}>Cancel</Button>
        <Button onClick={() => dialog.close()}>Edit</Button>
      </DialogActions>
    </Dialog>
  );
}
