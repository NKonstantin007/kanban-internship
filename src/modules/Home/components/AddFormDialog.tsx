import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Stack,
} from '@mui/material';
import { useRef } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { ProjectFormData } from '../types';

export function AddFormDialog({
  open,
  handleClose,
  onSubmit,
  onClickSubmitButton,
}: {
  open: boolean;
  handleClose: Function;
  onSubmit: SubmitHandler<ProjectFormData>;
  onClickSubmitButton: Function;
}) {
  const DEFAULT_FORM_VALUES: ProjectFormData = {
    name: '',
    description: '',
  };

  const { control, handleSubmit } = useForm({
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const addProjectForm = useRef<HTMLFormElement>(null);

  return (
    <Dialog open={open} onClose={() => handleClose()}>
      <DialogTitle sx={{ textAlign: 'center', paddingTop: '20px' }}>
        Add a project
      </DialogTitle>
      <DialogContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          ref={addProjectForm}
          style={{ paddingTop: '5px' }}
        >
          <Stack spacing={4}>
            <Controller<ProjectFormData>
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  label="Name"
                  sx={{ width: 400 }}
                  required
                  {...field}
                />
              )}
            />
            <Controller<ProjectFormData>
              name="description"
              control={control}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  label="Description"
                  sx={{ width: 400 }}
                  multiline
                  minRows={3}
                  maxRows={10}
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
            onClick={() => onClickSubmitButton(addProjectForm)}
            autoFocus
            variant="contained"
          >
            Add
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
}
