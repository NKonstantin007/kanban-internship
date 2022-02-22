import { useProjectsQuery } from '@/queries/projects';

export const useProjects = () => {
  const options = { refetchInterval: 1000 };
  const { data, ...rest } = useProjectsQuery(options);

  return {
    projects: data ?? [],
    ...rest,
  };
};
