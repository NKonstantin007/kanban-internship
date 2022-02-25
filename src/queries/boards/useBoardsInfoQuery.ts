import { useQuery, UseQueryOptions } from 'react-query';
import { Board } from '@/types/board';

export const useBoardsInfoQuery = (queryOptions?: UseQueryOptions<Board[]>) => {
  return useQuery('board', queryOptions);
};
