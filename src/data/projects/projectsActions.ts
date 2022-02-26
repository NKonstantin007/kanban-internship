import {
  convertToProjects,
  convertToProject,
  ProjectApiModel,
} from '@/api-types/projects';
import { Project, NewProject } from '@/types/projects';
import { Success } from '@/types/success';
import { http } from '../http';

export const getProjects = async (): Promise<Project[]> => {
  const { data } = await http.get<ProjectApiModel[]>('/projects');
  return convertToProjects(data);
};

export const createNewProject = async (
  project: NewProject,
): Promise<Project> => {
  const { data } = await http.post<ProjectApiModel>(
    '/projects/create',
    project,
  );
  return convertToProject(data);
};

export const deleteProject = async (id: string): Promise<Success> => {
  const { data } = await http.delete<Success>(`/projects/delete/${id}`);
  return data;
};

export const getProjectById = async (id: string): Promise<Project> => {
  const { data } = await http.get<ProjectApiModel>(`/projects/${id}`);
  return convertToProject(data);
};

export const updateProject = async ({
  id,
  ...project
}: Project): Promise<Project> => {
  const { data } = await http.put(`/projects/update/${id}`, project);
  return data;
};
