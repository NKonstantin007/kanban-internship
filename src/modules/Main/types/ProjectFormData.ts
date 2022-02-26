export type ProjectFormData = {
  name: string;
  description: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
};

export type DeleteProjectData = {
  id: string;
};

export type DeleteProject = {
  success: boolean;
};
