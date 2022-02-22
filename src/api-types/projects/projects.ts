import { Project } from '@/types/projects';

export type ProjectApiModel = {
  _id: string;
  name: string;
  description: string;
};

export const convertToProject = (
  projectsApiModel: ProjectApiModel,
): Project => {
  const { _id, ...rest } = projectsApiModel;

  return {
    id: _id,
    ...rest,
  };
};

export const convertToProjects = (
  projectsApiModel: ProjectApiModel[],
): Project[] => {
  return projectsApiModel.map(convertToProject);
};
