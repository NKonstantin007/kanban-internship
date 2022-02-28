import { convertToTask, convertToTasks, TaskApiModel } from '@/api-types/tasks';
import { Success } from '@/types/success';
import { Task, NewTask, UpdateTask } from '@/types/task';
import { http } from '../http';

const TASKS_PATH = '/tasks';

export const getTasks = async (): Promise<Task[]> => {
  const { data } = await http.get<TaskApiModel[]>(TASKS_PATH);
  return convertToTasks(data);
};

export const updateTask = async ({
  id,
  ...taskData
}: UpdateTask): Promise<Task> => {
  const { data } = await http.put<TaskApiModel>(
    `${TASKS_PATH}/update/${id}`,
    taskData,
  );
  return convertToTask(data);
};

export const createTask = async (newTask: NewTask): Promise<Task> => {
  const { data } = await http.post<TaskApiModel>(`/tasks/create`, newTask);
  return convertToTask(data);
};

export const deleteTask = async (id: string): Promise<Success> => {
  const { data } = await http.delete<Success>(`/tasks/delete/${id}`);
  return data;
};
