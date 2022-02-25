export type Success = { success: boolean };

export type Task = {
  id: string;
  name: string;
  description: string;
  creator: string;
  assignedTo: string;
  boardId: string;
  statusId: string;
  createdAt: string;
  updatedAt: string;
  elapsedTime: number;
};

export type NewTask = {
  name: string;
  description: string;
  assignedTo: string;
  boardId: string;
  statusId: string;
  elapsedTime: number;
};

export type UpdateTask = {
  id: string;
  name: string;
  boardId: string;
};
