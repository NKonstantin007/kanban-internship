import { useProjectsMutations } from '@/queries/projects';

export const useProjects = () => {
  const options = { refetchInterval: 1000 };
  const { data, ...rest } = useProjectsMutations(options);

  return {
    projects: data ?? [],
    ...rest,
  };
};
