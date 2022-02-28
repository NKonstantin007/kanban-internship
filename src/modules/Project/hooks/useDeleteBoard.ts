import { useCallback } from 'react';
import { MutateOptions } from 'react-query';
import { useDeleteBoardMutation } from '@/queries/boards';
import { Success } from '@/types/success';

export const useDeleteBoard = (
  options?: MutateOptions<Success, Error, string>,
) => {
  const { mutate, isLoading, isError } = useDeleteBoardMutation();

  return {
    deleteBoard: useCallback(
      (data: string) => {
        mutate(data, options);
      },
      [mutate, options],
    ),
    isDeleting: isLoading,
    isDeleteError: isError,
  };
};
