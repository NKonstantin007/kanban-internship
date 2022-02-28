import {
  convertToBoard,
  convertToBoards,
  BoardApiModel,
} from '@/api-types/boards';
import { Board, NewBoard } from '@/types/board';
import { Success } from '@/types/success';
import { http } from '../http';

export const createBoard = async (newBoard: NewBoard): Promise<Board> => {
  const { data } = await http.post<BoardApiModel>(`/boards/create`, newBoard);
  return convertToBoard(data);
};

export const updateBoard = async ({
  id,
  ...boardData
}: Board): Promise<Board> => {
  const { data } = await http.put<BoardApiModel>(
    `/boards/update/${id}`,
    boardData,
  );
  return convertToBoard(data);
};

export const deleteBoard = async (id: string): Promise<Success> => {
  const { data } = await http.delete<Success>(`/boards/delete/${id}`);
  return data;
};

export const getBoards = async (): Promise<Board[]> => {
  const { data } = await http.get<BoardApiModel[]>(`boards/`);
  return convertToBoards(data);
};
