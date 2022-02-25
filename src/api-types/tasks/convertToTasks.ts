import { Task } from '@/types/task';

export type TaskApiModel = {
  _id: string;
  name: string;
  description: string;
  creator: string;
  assignedTo: string;
  boardId: string;
  statusId: string;
  createdAt: string;
  updatedAt: string;
  elapsedTime: number;
};

export function convertToTasks(tasks: TaskApiModel[]): Task[] {
  return tasks.map(({ _id, ...restTask }) => ({ id: _id, ...restTask }));
}

export function convertToTask({ _id, ...restTask }: TaskApiModel): Task {
  return { id: _id, ...restTask };
}
