import {
  Dialog,
  Button,
  DialogContent,
  DialogActions,
  Typography,
  LinearProgress,
} from '@mui/material';

export function DeleteProjectDialog({
  open,
  handleClose,
  onClickDeleteButton,
  isDeleting,
  isDeleteError,
}: {
  open: boolean;
  handleClose: () => void;
  onClickDeleteButton: () => void;
  isDeleting: boolean;
  isDeleteError: boolean;
}) {
  return (
    <Dialog open={open} onClose={() => handleClose()}>
      {isDeleting && <LinearProgress sx={{ mb: 2 }} />}
      {isDeleteError && (
        <Typography color="error" sx={{ mb: 2 }}>
          Failed to delete project
        </Typography>
      )}
      <DialogContent>Are you sure want to delete the project?</DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()}>Cancel</Button>
        <Button
          onClick={() => onClickDeleteButton()}
          autoFocus
          color="error"
          disabled={isDeleting}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
