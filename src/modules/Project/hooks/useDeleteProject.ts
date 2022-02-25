import { useCallback } from 'react';
import { DeleteProjectData } from '@/types/projects';
import { useDeleteProjectMutations } from '../../../queries/projects';

export const useDeleteProject = () => {
  const { mutate } = useDeleteProjectMutations();

  return {
    deleteProject: useCallback(
      (data: DeleteProjectData) => {
        mutate(data, {
          onSuccess: () => {
            console.log('project delete');
          },
        });
      },
      [mutate],
    ),
  };
};
