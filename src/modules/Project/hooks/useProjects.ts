import { useProjectsQuery } from '@/queries/projects';

export const useProjects = () => {
  const options = { refetchInterval: 10000 };
  const { data, ...rest } = useProjectsQuery(options);

  return {
    projects: data ?? [],
    ...rest,
  };
};
