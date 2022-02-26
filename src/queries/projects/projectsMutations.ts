import { useMutation, UseMutationOptions } from 'react-query';
import {
  createNewProject,
  deleteProject,
  updateProject,
} from '@/data/projects';
import { Project, NewProject } from '@/types/projects';
import { Success } from '@/types/success';

export const useCreateProjectMutation = (
  queryOptions?: UseMutationOptions<Project, Error, NewProject>,
) => {
  return useMutation('create-project-mutation', createNewProject, queryOptions);
};

export const useDeleteProjectMutation = (
  queryOptions?: UseMutationOptions<Success, Error, string>,
) => {
  return useMutation('delete-project-mutation', deleteProject, queryOptions);
};

export const useUpdateProjectMutation = (
  queryOptions?: UseMutationOptions<Project, Error, Project>,
) => {
  return useMutation('update-project-mutation', updateProject, queryOptions);
};
