import { useUpdateTaskMutation } from '@/queries/tasks';

export function useUpdateTask() {
  const {
    data: updatedTask,
    mutate: updateTask,
    isLoading: isUpdatingTask,
  } = useUpdateTaskMutation();
  return { updatedTask, updateTask, isUpdatingTask };
}
