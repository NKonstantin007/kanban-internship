import { NewProject, DeleteProject, Project } from '../../types/project';
import { http } from '../http/http';

const PROJECTS_BASE_PATH = '/projects';

export const getAllProjects = async (): Promise<Project[]> => {
  const { data } = await http.get<Project[]>(`${PROJECTS_BASE_PATH}`);
  return data;
};

export const getProjectById = async (id: string): Promise<Project> => {
  const { data } = await http.get<Project>(`${PROJECTS_BASE_PATH}/${id}`);
  return data;
};

export const createNewProject = async (
  project: Partial<Project>,
): Promise<Project> => {
  const { data } = await http.post<Project>(
    `${PROJECTS_BASE_PATH}/create`,
    project,
  );
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

export const deleteProject = async (id: string): Promise<DeleteProject> => {
  const { data } = await http.delete<DeleteProject>(
    `${PROJECTS_BASE_PATH}/delete/${id}`,
  );
  return data;
};
