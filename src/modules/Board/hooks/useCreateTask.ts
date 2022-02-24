import { useCreateTaskMutation } from '@/queries/task';

export function useCreateTask() {
  const {
    data: newTask,
    mutate: createTask,
    isLoading: isCreatingTask,
  } = useCreateTaskMutation();
  return { newTask, createTask, isCreatingTask };
}
