import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Stack,
  LinearProgress,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { Board, NewBoard } from '@/types/board';
import { BoardFormData } from '../types';

const DEFAULT_FORM_VALUES: BoardFormData = {
  name: '',
};

const BOARD_FORM_SCHEME = yup.object({
  name: yup
    .string()
    .required('Use 1 to 128 characters for name of board')
    .max(128, 'Use 1 to 128 characters for name of board')
    .matches(/^[\w\dа-яё\-_ ]+$/gi, 'Invalid characters'),
});

export function BoardFormDialog({
  open,
  handleClose,
  onClickAddButton,
  onClickEditButton,
  currentBoard,
  projectId,
  isCreate,
  isCreating,
  isCreateError,
  isUpdating,
  isUpdateError,
}: {
  open: boolean;
  handleClose: () => void;
  onClickAddButton: (formData: NewBoard) => void;
  onClickEditButton: (board: Board) => void;
  currentBoard?: Board;
  projectId?: string;
  isCreate: boolean;
  isCreating: boolean;
  isCreateError: boolean;
  isUpdating: boolean;
  isUpdateError: boolean;
}) {
  const {
    control,
    trigger,
    getValues,
    reset,
    formState: { isValidating },
  } = useForm({
    defaultValues: DEFAULT_FORM_VALUES,
    resolver: yupResolver(BOARD_FORM_SCHEME),
  });

  useEffect(() => {
    if (currentBoard) {
      reset({ name: currentBoard.name });
    }
  }, [reset, currentBoard]);

  return (
    <Dialog open={open} onClose={() => handleClose()}>
      <DialogTitle sx={{ textAlign: 'center', paddingTop: '20px' }}>
        {isCreate ? 'Add a board' : 'Edit a board'}
      </DialogTitle>
      <DialogContent>
        {(isCreating || isUpdating || isValidating) && (
          <LinearProgress sx={{ mb: 2 }} />
        )}
        {isCreateError && (
          <Typography color="error" sx={{ mb: 2 }}>
            Failed to create board
          </Typography>
        )}
        {isUpdateError && (
          <Typography color="error" sx={{ mb: 2 }}>
            Failed to edit board
          </Typography>
        )}
        <form style={{ paddingTop: '5px' }}>
          <Stack spacing={4}>
            <Controller<BoardFormData>
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  variant="outlined"
                  label="Name"
                  sx={{ width: 400 }}
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  disabled={isValidating}
                  required
                  {...field}
                />
              )}
            />
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ paddingRight: 6, paddingBottom: 6 }}>
        <Stack direction="row" spacing={3}>
          <Button onClick={() => handleClose()}>Cancel</Button>
          <Button
            onClick={async () => {
              const isValid = await trigger();
              if (isValid) {
                const formData = getValues();
                if (isCreate) {
                  onClickAddButton({ ...formData, projectId: projectId! });
                } else {
                  onClickEditButton({
                    ...formData,
                    id: currentBoard!.id,
                    projectId: projectId!,
                  });
                }
                if (!isUpdateError && !isCreateError) {
                  handleClose();
                  reset();
                }
              }
            }}
            autoFocus
            variant="contained"
            disabled={isValidating}
          >
            {isCreate ? 'Add' : 'Edit'}
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
}
