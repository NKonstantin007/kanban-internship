import { Board } from '@/types/board';
import { http } from '../http';

const BOARDS_PATH = '/boards';

export const getBoardId = async (id: string): Promise<Board> => {
  const { data } = await http.get<Board>(`${BOARDS_PATH}/${id}`);
  return data;
};
