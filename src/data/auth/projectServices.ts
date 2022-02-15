import {
  ProjectsData,
  NewProject,
  DeleteProject,
  Project,
} from '../../types/project';
import { http } from '../http/http';

export const getAllProjects = async (): Promise<ProjectsData> => {
  const { data } = await http.get<ProjectsData>('/projects');
  return data;
};

export const getProjectById = async (id: string): Promise<Project> => {
  const { data } = await http.get<Project>(`/projects/${id}`);
  return data;
};

export const createNewProject = async (
  project: Partial<Project>,
): Promise<Project> => {
  const { data } = await http.post<Project>('/projects/create', project);
  return data;
};

export const updateProject = async (
  id: string,
  newProject: NewProject,
): Promise<Project> => {
  const { data } = await http.put(`/projects/update/${id}`, newProject);
  return data;
};

export const deleteProject = async (id: string): Promise<DeleteProject> => {
  const { data } = await http.delete<DeleteProject>(`/projects/delete/${id}`);
  return data;
};
