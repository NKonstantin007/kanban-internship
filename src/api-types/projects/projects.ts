import { Projects } from '@/types/projects';

export type ProjectsApiModel = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _id: string;
  name: string;
  description: string;
};

const convertToProject = (projectsApiModel: ProjectsApiModel): Projects => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { _id, ...rest } = projectsApiModel;

  return {
    id: _id,
    ...rest,
  };
};

export const convertToProjects = (
  projectsApiModels: ProjectsApiModel[],
): Projects[] => {
  return projectsApiModels.map(convertToProject);
};
