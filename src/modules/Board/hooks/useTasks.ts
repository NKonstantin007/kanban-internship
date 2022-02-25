import { useTasksQuery } from '@/queries/tasks';

export const useTasks = () => {
  const { data, ...rest } = useTasksQuery();

  return {
    tasks: data ?? [],
    ...rest,
  };
};
