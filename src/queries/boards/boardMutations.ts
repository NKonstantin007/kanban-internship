import { UseMutationOptions, useMutation } from 'react-query';
import { createBoard, updateBoard, deleteBoard } from '@/data/board';
import { Board, NewBoard } from '@/types/board';
import { Success } from '@/types/success';

export function useCreateTaskMutation(
  options?: UseMutationOptions<Board, Error, NewBoard>,
) {
  return useMutation('create-task-mutation', createBoard, options);
}

export function useUpdateTaskMutation(
  options?: UseMutationOptions<Board, Error, Board>,
) {
  return useMutation('create-task-mutation', updateBoard, options);
}

export function useDeleteTaskMutation(
  options?: UseMutationOptions<Success, Error, string>,
) {
  return useMutation('create-task-mutation', deleteBoard, options);
}
