import { convertToBoards, BoardsApiModel } from '@/api-types/boards';
import { Boards } from '@/types/boards';
import { http } from '../http';

const BOARDS_ROOT_PATH = '/boards';

export const getBoards = async (): Promise<Boards[]> => {
  const { data } = await http.get<BoardsApiModel[]>(BOARDS_ROOT_PATH);
  return convertToBoards(data);
};
