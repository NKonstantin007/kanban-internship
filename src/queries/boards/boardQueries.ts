import { useQuery, UseQueryOptions } from 'react-query';
import { getBoards } from '@/data/board';
import { Board } from '@/types/board';

export function useGetTasksQuery(
  options?: UseQueryOptions<unknown, Error, Board[]>,
) {
  return useQuery('get-tasks-query', getBoards, options);
}
