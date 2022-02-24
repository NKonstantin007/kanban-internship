import { useGetTasksQuery } from '@/queries/task';

export const useTasks = () => {
  const {
    data: tasks,
    refetch: refetchTasks,
    isLoading: isLoadingTasks,
  } = useGetTasksQuery();
  return { tasks, refetchTasks, isLoadingTasks };
};
