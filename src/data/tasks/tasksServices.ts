import { Task, NewTask, UpdateTask, Success } from '@/types/task';
import { http } from '../http';

// const TASKS_BASE_PATH = '/tasks';

// export const getTasks = async (): Promise<Task[]> => {
//   const { data } = await http.get<Task[]>(TASKS_BASE_PATH);
//   return data;
// };

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
