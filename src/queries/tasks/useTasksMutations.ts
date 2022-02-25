import { UseMutationOptions, useMutation } from 'react-query';
import { createTask, updateTask, deleteTask } from '@/data/tasks';
import { Task, NewTask, UpdateTask, Success } from '@/types/task';

export function useCreateTaskMutation(
  options?: UseMutationOptions<Task, Error, NewTask>,
) {
  return useMutation('create-task-mutation', createTask, options);
}

export function useUpdateTaskMutation(
  options?: UseMutationOptions<Task, Error, UpdateTask>,
) {
  return useMutation('create-task-mutation', updateTask, options);
}

export function useDeleteTaskMutation(
  options?: UseMutationOptions<Success, Error, string>,
) {
  return useMutation('create-task-mutation', deleteTask, options);
}
