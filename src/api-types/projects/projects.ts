import { Project } from '@/types/projects';

export type ProjectApiModel = {
  _id: string;
  name: string;
  description: string;
};

const convertToProject = (projectApiModel: ProjectApiModel): Project => {
  const { _id, ...rest } = projectApiModel;

  return {
    id: _id,
    ...rest,
  };
};

export const convertToProjects = (
  projectsApiModels: ProjectApiModel[],
): Project[] => {
  return projectsApiModels.map(convertToProject);
};
