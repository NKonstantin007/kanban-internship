import { Boards } from '@/types/boards';

export type BoardsApiModel = {
  _id: string;
  name: string;
  color: string;
  projectId: string;
};

const convertToBoard = (boardsApiModel: BoardsApiModel): Boards => {
  const { _id, ...rest } = boardsApiModel;

  return {
    id: _id,
    ...rest,
  };
};

export const convertToBoards = (boardsApiModel: BoardsApiModel[]): Boards[] => {
  return boardsApiModel.map(convertToBoard);
};
