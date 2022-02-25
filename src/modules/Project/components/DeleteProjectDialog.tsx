import { Dialog, Button, DialogContent, DialogActions } from '@mui/material';

export function DeleteProjectDialog({
  open,
  handleClose,
  onClickDeleteButton,
}: {
  open: boolean;
  handleClose: () => void;
  onClickDeleteButton: () => void;
}) {
  return (
    <Dialog open={open} onClose={() => handleClose()}>
      <DialogContent>Are you sure want to delete the project?</DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()}>Cancel</Button>
        <Button onClick={() => onClickDeleteButton()} autoFocus color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
