import { useCallback } from 'react';
import { useCreateProjectMutations } from '../../../queries/projects';
import { NewProject } from '../../../types/projects';

export const useCreateProject = () => {
  const { mutate, isLoading } = useCreateProjectMutations();

  return {
    createProject: useCallback(
      (data: NewProject) => {
        mutate(data, {
          onSuccess: () => {
            console.log('yeah!');
          },
        });
      },
      [mutate],
    ),
    isLoading,
  };
};
