import { UseMutationOptions, useMutation } from 'react-query';
import { createBoard, updateBoard, deleteBoard } from '@/data/board';
import { Board, NewBoard } from '@/types/board';
import { Success } from '@/types/success';

export function useCreateBoardMutation(
  options?: UseMutationOptions<Board, Error, NewBoard>,
) {
  return useMutation('create-board-mutation', createBoard, options);
}

export function useUpdateBoardMutation(
  options?: UseMutationOptions<Board, Error, Board>,
) {
  return useMutation('update-board-mutation', updateBoard, options);
}

export function useDeleteBoardMutation(
  options?: UseMutationOptions<Success, Error, string>,
) {
  return useMutation('delete-board-mutation', deleteBoard, options);
}
