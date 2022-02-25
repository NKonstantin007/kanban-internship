import { convertToTask, convertToTasks, TaskApiModel } from '@/api-types/tasks';
import { Success } from '@/types/success';
import { Task, NewTask, UpdateTask } from '@/types/task';
import { http } from '../http';

export const createTask = async (newTask: NewTask): Promise<Task> => {
  const { data } = await http.post<TaskApiModel>(`/tasks/create`, newTask);
  return convertToTask(data);
};

export const updateTask = async ({
  id,
  ...taskData
}: UpdateTask): Promise<Task> => {
  const { data } = await http.put<TaskApiModel>(
    `/tasks/create/${id}`,
    taskData,
  );
  return convertToTask(data);
};

export const deleteTask = async (id: string): Promise<Success> => {
  const { data } = await http.delete<Success>(`/tasks/delete/${id}`);
  return data;
};

export const getTasks = async (): Promise<Task[]> => {
  const { data } = await http.get<TaskApiModel[]>(`tasks/`);
  return convertToTasks(data);
};
