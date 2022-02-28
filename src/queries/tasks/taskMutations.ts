import {
  UseMutationOptions,
  useMutation,
  useQuery,
  UseQueryOptions,
} from 'react-query';
import { createTask, updateTask, deleteTask, getTasks } from '@/data/tasks';
import { Success } from '@/types/success';
import { Task, NewTask, UpdateTask } from '@/types/task';

export function useCreateTaskMutation(
  options?: UseMutationOptions<Task, Error, NewTask>,
) {
  return useMutation('create-task-mutation', createTask, options);
}

export function useUpdateTaskMutation(
  options?: UseMutationOptions<Task, Error, UpdateTask>,
) {
  return useMutation('update-task-mutation', updateTask, options);
}

export function useDeleteTaskMutation(
  options?: UseMutationOptions<Success, Error, string>,
) {
  return useMutation('delete-task-mutation', deleteTask, options);
}

export function useGetTasksQuery(
  options?: UseQueryOptions<unknown, Error, Task[]>,
) {
  return useQuery('get-tasks-query', getTasks, options);
}
