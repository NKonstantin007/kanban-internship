import { convertToProjects, ProjectsApiModel } from '../../api-types/projects';
import {
  Project,
  NewProject,
  DeleteProject,
  DeleteProjectData,
} from '../../types/projects';
import { http } from '../http';

const PROJECTS_BASE_PATH = '/projects';

export const getProjects = async (): Promise<Project[]> => {
  const { data } = await http.get<ProjectsApiModel[]>(PROJECTS_BASE_PATH);
  return convertToProjects(data);
};

export const createNewProject = async (
  project: NewProject,
): Promise<Project> => {
  const { data } = await http.post<Project>(
    `${PROJECTS_BASE_PATH}/create`,
    project,
  );
  return data;
};

export const deleteProject = async ({
  id,
}: DeleteProjectData): Promise<DeleteProject> => {
  const { data } = await http.delete<DeleteProject>(
    `${PROJECTS_BASE_PATH}/delete/${id}`,
  );
  return data;
};

export const getProjectById = async (id: string): Promise<Project> => {
  const { data } = await http.get<Project>(`${PROJECTS_BASE_PATH}/${id}`);
  return data;
};

export const updateProject = async (
  id: string,
  newProject: NewProject,
): Promise<Project> => {
  const { data } = await http.put(
    `${PROJECTS_BASE_PATH}/update/${id}`,
    newProject,
  );
  return data;
};
