import PersonIcon from '@mui/icons-material/Person';
import {
  Button,
  Stack,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Dialog as DialogType } from '@/types/dialog';
import { Task } from '@/types/task';

type TaskFormDialogType = {
  dialog: DialogType;
  currentTask?: Task;
  userName: string;
  status?: string;
  onClickEditButton: () => void;
};

export function TaskInfoDialog({
  dialog,
  currentTask,
  userName,
  status,
  onClickEditButton,
}: TaskFormDialogType) {
  return (
    <Dialog open={dialog.isOpen} onClose={() => dialog.close()}>
      <DialogTitle>{currentTask?.name}</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Typography>{currentTask?.description}</Typography>
          <Stack direction="row" spacing={1}>
            <PersonIcon />
            <Typography>{userName}</Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Typography>Доска:</Typography>{' '}
            <Typography color="green">{status}</Typography>
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClickEditButton()}>Edit</Button>
        <Button onClick={() => dialog.close()}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
