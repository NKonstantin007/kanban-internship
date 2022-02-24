import { Task } from '@/types/task';
import { tasks } from './__mocks/tasks';

export function getTasks(): Task[] {
  return tasks;
}
