import { convertToProjects, ProjectsApiModel } from '@/api-types/projects';
import { Projects } from '@/types/projects';
import { http } from '../http';

const PROJECTS_ROOT_PATH = '/projects';

export const getProjects = async (): Promise<Projects[]> => {
  const { data } = await http.get<ProjectsApiModel[]>(PROJECTS_ROOT_PATH);
  return convertToProjects(data);
};
