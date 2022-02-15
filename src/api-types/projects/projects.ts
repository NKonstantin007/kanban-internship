import { Project } from '@/types/projects';

export type ProjectApiModel = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _id: string;
  name: string;
  description: string;
};

const convertToProject = (projectApiModel: ProjectApiModel): Project => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
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
