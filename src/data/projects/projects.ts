import { convertToProjects, ProjectApiModel } from '@/api-types/projects';
import { Project } from '@/types/projects';
import { http } from '../http';

const PROJECTS_ROOT_PATH = '/projects';

export const getProjects = async (): Promise<Project[]> => {
  const { data } = await http.get<ProjectApiModel[]>(PROJECTS_ROOT_PATH);
  return convertToProjects(data);
};
