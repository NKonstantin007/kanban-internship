import { Success } from '@/types/success';
import { Task, NewTask, UpdateTask } from '@/types/task';
import { http } from '../http';

export const createTask = async (newTask: NewTask): Promise<Task> => {
  const { data } = await http.post<Task>(`/tasks/create`, newTask);
  return data;
};

export const updateTask = async (newTask: UpdateTask): Promise<Task> => {
  const { data } = await http.put<Task>(`/tasks/create/${newTask.id}`, newTask);
  return data;
};

export const deleteTask = async (id: string): Promise<Success> => {
  const { data } = await http.delete<Success>(`/tasks/delete/${id}`);
  return data;
};

export const getTasks = async (): Promise<Task[]> => {
  const { data } = await http.get<Task[]>(`tasks/`);
  return data;
};
