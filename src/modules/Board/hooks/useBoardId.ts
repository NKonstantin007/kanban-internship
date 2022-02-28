import { useQuery } from 'react-query';
import { getBoardId } from '@/data/board';

export const useBoardId = (boardId: string) => {
  return useQuery(['board-info', boardId], () => getBoardId(boardId));
};
