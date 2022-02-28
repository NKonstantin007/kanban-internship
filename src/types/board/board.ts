export type Board = {
  id: string;
  name: string;
  color?: string;
  projectId: string;
};

export type NewBoard = {
  name: string;
  color?: string;
  projectId: string;
};
