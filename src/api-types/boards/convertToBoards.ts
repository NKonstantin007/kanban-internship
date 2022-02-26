import { Board } from '@/types/board';

export type BoardApiModel = {
  _id: string;
  name: string;
  color?: string;
  projectId: string;
};

export function convertToBoard({ _id, ...rest }: BoardApiModel): Board {
  return { id: _id, ...rest };
}

export function convertToBoards(boards: BoardApiModel[]): Board[] {
  return boards.map(({ _id, ...rest }) => ({ id: _id, ...rest }));
}
