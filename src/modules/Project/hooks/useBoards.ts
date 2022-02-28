import { useGetBoardsQuery } from '@/queries/boards';

export const useBoards = () => {
  const options = { refetchInterval: 10000 };
  const { data, refetch, isLoading, ...rest } = useGetBoardsQuery(options);

  return {
    boards: data ?? [],
    refetchBoards: refetch,
    isLoadingBoards: isLoading,
    ...rest,
  };
};
