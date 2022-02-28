import { useCallback } from 'react';
import { MutateOptions } from 'react-query';
import { useCreateBoardMutation } from '@/queries/boards';
import { Board, NewBoard } from '@/types/board';

export const useCreateBoard = (
  options?: MutateOptions<Board, Error, NewBoard>,
) => {
  const { mutate, isLoading, isError } = useCreateBoardMutation();

  return {
    createBoard: useCallback(
      (data: NewBoard) => {
        mutate(data, options);
      },
      [mutate, options],
    ),
    isCreating: isLoading,
    isCreateError: isError,
  };
};
