import { useState } from 'react';
import { Task } from '@/types/task';

export function useTasks(
  initialTasks: Task[],
): [Task[], React.Dispatch<React.SetStateAction<Task[]>>] {
  const [tasks, setTasks] = useState(initialTasks);
  return [tasks, setTasks];
}
