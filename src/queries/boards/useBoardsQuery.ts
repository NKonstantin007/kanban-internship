import { useQuery, UseQueryOptions } from 'react-query';
import { getBoards } from '@/data/boards';
import { Boards } from '@/types/boards';

const BOARDS_QUERY_KEY = 'boards';

export const useBoardsQuery = (queryOptions?: UseQueryOptions<Boards[]>) => {
  return useQuery(BOARDS_QUERY_KEY, getBoards, queryOptions);
};
