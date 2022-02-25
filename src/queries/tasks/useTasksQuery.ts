import { useQuery, UseQueryOptions } from 'react-query';
import { getTasks } from '@/data/tasks';
import { Task } from '@/types/task';

export const useTasksQuery = (queryOptions?: UseQueryOptions<Task[]>) => {
  return useQuery('tasks', getTasks, queryOptions);
};
