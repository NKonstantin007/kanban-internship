import { yupResolver } from '@hookform/resolvers/yup';
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
import {
  useForm,
  Controller,
  SubmitHandler,
  FormProvider,
} from 'react-hook-form';
import * as yup from 'yup';
import { useCreateProject } from '../hooks/useCreateProject';
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
  onSubmit,
  additionalAction,
}: {
  open: boolean;
  handleClose: () => void;
  onSubmit: SubmitHandler<ProjectFormData>;
  additionalAction: () => void;
}) {
  const { control, handleSubmit, formState, trigger, getValues, ...rest } =
    useForm({
      defaultValues: DEFAULT_FORM_VALUES,
      resolver: yupResolver(ADD_PROJECT_FORM_SCHEME),
      mode: 'onChange',
    });
  const { createProject } = useCreateProject();

  const addProjectForm = useRef<HTMLFormElement>(null);

  return (
    <Dialog open={open} onClose={() => handleClose()}>
      <DialogTitle sx={{ textAlign: 'center', paddingTop: '20px' }}>
        Add a project
      </DialogTitle>
      <DialogContent>
        <FormProvider<ProjectFormData>
          control={control}
          handleSubmit={handleSubmit}
          formState={formState}
          trigger={trigger}
          getValues={getValues}
          {...rest}
        >
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
                render={({ field, fieldState }) => (
                  <TextField
                    variant="outlined"
                    label="Name"
                    sx={{ width: 400 }}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
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
                    {...field}
                  />
                )}
              />
            </Stack>
          </form>
        </FormProvider>
      </DialogContent>
      <DialogActions sx={{ paddingRight: 6, paddingBottom: 6 }}>
        <Stack direction="row" spacing={3}>
          <Button onClick={() => handleClose()}>Cancel</Button>
          <Button
            onClick={() => {
              trigger();
              if (formState.isValid) {
                addProjectForm.current!.submit();
                additionalAction();
              } else {
                const values = getValues();
                createProject(values);
              }
            }}
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
