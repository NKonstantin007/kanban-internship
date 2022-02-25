import { useBoardsInfoQuery } from '@/queries/boards';

export const useBoardsInfo = () => {
  const { data, ...rest } = useBoardsInfoQuery();

  return {
    board: data ?? [],
    ...rest,
  };
};
