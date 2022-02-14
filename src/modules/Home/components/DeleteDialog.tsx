import { Dialog, Button, DialogContent, DialogActions } from '@mui/material';
import { red } from '@mui/material/colors';

export function DeleteDialog({
  open,
  handleClose,
  onClickDeleteButton,
}: {
  open: boolean;
  handleClose: Function;
  onClickDeleteButton: Function;
}) {
  return (
    <Dialog open={open} onClose={() => handleClose()}>
      <DialogContent>Are you sure want to delete the project?</DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()}>Cancel</Button>
        <Button
          onClick={() => onClickDeleteButton()}
          autoFocus
          sx={{ color: red[500] }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
