import { useCreateTaskMutation } from '@/queries/tasks';

export function useCreateTask() {
  const {
    data: newTask,
    mutate: createTask,
    isLoading: isCreatingTask,
  } = useCreateTaskMutation();
  return { newTask, createTask, isCreatingTask };
}
