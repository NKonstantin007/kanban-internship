import { useCallback } from 'react';
import { MutateOptions } from 'react-query';
import { useCreateProjectMutation } from '@/queries/projects';
import { Project, NewProject } from '@/types/projects';

export const useCreateProject = (
  options?: MutateOptions<Project, Error, NewProject>,
) => {
  const { mutate, isLoading, isError } = useCreateProjectMutation();

  return {
    createProject: useCallback(
      (data: NewProject) => {
        mutate(data, options);
      },
      [mutate, options],
    ),
    isCreating: isLoading,
    isCreateError: isError,
  };
};
