import { useGetTasksQuery } from '@/queries/tasks';

export const useTasks = () => {
  const {
    data: tasks,
    refetch: refetchTasks,
    isLoading: isLoadingTasks,
  } = useGetTasksQuery();
  return { tasks, refetchTasks, isLoadingTasks };
};
