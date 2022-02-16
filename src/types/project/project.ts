export type Project = {
  id: string;
  name: string;
  description: string;
};

export type NewProject = {
  name: string;
  description: string;
};

export type DeleteProject = {
  success: boolean;
};
