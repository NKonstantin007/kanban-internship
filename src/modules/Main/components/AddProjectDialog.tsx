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
import { convertToNewProject } from '../api-types';
import { ProjectFormData } from '../types';

const DEFAULT_FORM_VALUES: ProjectFormData = {
  name: '',
  description: '',
};

const ADD_PROJECT_FORM_SCHEME = yup.object({
  name: yup
    .string()
    .required('Use 1 to 128 characters for name of project')
    .max(128, 'Use 1 to 128 characters for name of project')
    .matches(/^[\w\dа-яё\-_ ]+$/gi, 'Invalid characters'),
  description: yup
    .string()
    .max(128, 'Use up to 128 characters for description of project'),
});

export function AddProjectDialog({
  open,
  handleClose,
  onClickAddButton,
  isCreating,
  isCreateError,
}: {
  open: boolean;
  handleClose: () => void;
  onClickAddButton: (formData: ProjectFormData) => void;
  isCreating: boolean;
  isCreateError: boolean;
}) {
  const {
    control,
    trigger,
    getValues,
    reset,
    formState: { isValidating },
  } = useForm({
    defaultValues: DEFAULT_FORM_VALUES,
    resolver: yupResolver(ADD_PROJECT_FORM_SCHEME),
  });

  useEffect(() => {
    reset(DEFAULT_FORM_VALUES);
  }, [open, reset]);

  return (
    <Dialog open={open} onClose={() => handleClose()}>
      <DialogTitle sx={{ textAlign: 'center', paddingTop: '20px' }}>
        Add a project
      </DialogTitle>
      <DialogContent>
        {(isCreating || isValidating) && <LinearProgress sx={{ mb: 2 }} />}
        {isCreateError && (
          <Typography color="error" sx={{ mb: 2 }}>
            Failed to create project
          </Typography>
        )}
        <form style={{ paddingTop: '5px' }}>
          <Stack spacing={4}>
            <Controller<ProjectFormData>
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <TextField
                  variant="outlined"
                  label="Name"
                  sx={{ width: 400 }}
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  disabled={isValidating || isCreating}
                  required
                  {...field}
                />
              )}
            />
            <Controller<ProjectFormData>
              name="description"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  variant="outlined"
                  label="Description"
                  sx={{ width: 400 }}
                  multiline
                  minRows={3}
                  maxRows={10}
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  disabled={isValidating || isCreating}
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
                onClickAddButton(convertToNewProject(formData));
              }
            }}
            autoFocus
            variant="contained"
            disabled={isValidating || isCreating}
          >
            Add
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
}
