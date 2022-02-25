import { Task } from '@/types/task';
import { http } from '../http';

const TASKS_BASE_PATH = '/tasks';

export const getTasks = async (): Promise<Task[]> => {
  const { data } = await http.get<Task[]>(TASKS_BASE_PATH);
  return data;
};
