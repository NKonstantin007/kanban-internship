import { useQuery, UseQueryOptions } from 'react-query';
import { getBoards } from '@/data/board';
import { Board } from '@/types/board';

export function useGetBoardsQuery(
  options?: UseQueryOptions<unknown, Error, Board[]>,
) {
  return useQuery('get-boards-query', getBoards, options);
}
