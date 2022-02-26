import { useProjectsQuery } from '@/queries/projects';

export const useProjects = () => {
  const options = { refetchInterval: 10000 };
  const { data, refetch, isLoading, ...rest } = useProjectsQuery(options);

  return {
    projects: data ?? [],
    refetchProjects: refetch,
    isLoadingProjects: isLoading,
    ...rest,
  };
};
