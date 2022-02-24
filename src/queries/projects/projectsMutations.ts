import { useMutation, UseMutationOptions } from 'react-query';
import { createNewProject, deleteProject } from '@/data/projects';
import {
  Project,
  NewProject,
  DeleteProject,
  DeleteProjectData,
} from '@/types/projects';

export const useCreateProjectMutations = (
  queryOptions?: UseMutationOptions<Project, Error, NewProject>,
) => {
  return useMutation('create-project-mutation', createNewProject, queryOptions);
};

export const useDeleteProjectMutations = (
  queryOptions?: UseMutationOptions<DeleteProject, Error, DeleteProjectData>,
) => {
  return useMutation('delete-project-mutation', deleteProject, queryOptions);
};
