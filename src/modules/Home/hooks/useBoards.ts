import { useBoardsQuery } from '@/queries/boards';

const REFETCH_INTERVAL_MS = 5000;

export const useBoards = () => {
  const options = { refetchInterval: REFETCH_INTERVAL_MS };
  const { data, ...rest } = useBoardsQuery(options);

  return {
    boards: data ?? [],
    ...rest,
  };
};
