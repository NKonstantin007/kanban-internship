import { Project } from '@/types/projects';

export type ProjectsApiModel = {
  _id: string;
  name: string;
  description: string;
};

export const convertToProject = (
  projectsApiModel: ProjectsApiModel,
): Project => {
  const { _id, ...rest } = projectsApiModel;

  return {
    id: _id,
    ...rest,
  };
};

export const convertToProjects = (
  projectsApiModel: ProjectsApiModel[],
): Project[] => {
  return projectsApiModel.map(convertToProject);
};
