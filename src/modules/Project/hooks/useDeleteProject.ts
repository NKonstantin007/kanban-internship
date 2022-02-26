import { useCallback } from 'react';
import { MutateOptions } from 'react-query';
import { useDeleteProjectMutation } from '@/queries/projects';
import { Success } from '@/types/success';

export const useDeleteProject = (
  options?: MutateOptions<Success, Error, string>,
) => {
  const { mutate, isLoading, isError } = useDeleteProjectMutation();

  return {
    deleteProject: useCallback(
      (data: string) => {
        mutate(data, options);
      },
      [mutate, options],
    ),
    isDeleting: isLoading,
    isDeleteError: isError,
  };
};
