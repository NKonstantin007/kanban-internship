import { useCallback } from 'react';
import { MutateOptions } from 'react-query';
import { useUpdateBoardMutation } from '@/queries/boards';
import { Board } from '@/types/board';

export const useUpdateBoard = (
  options?: MutateOptions<Board, Error, Board>,
) => {
  const { mutate, isLoading, isError } = useUpdateBoardMutation();

  return {
    updateBoard: useCallback(
      (data: Board) => {
        mutate(data, options);
      },
      [mutate, options],
    ),
    isUpdating: isLoading,
    isUpdateError: isError,
  };
};
