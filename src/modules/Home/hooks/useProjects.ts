import { useProjectsMutations } from '@/queries/projects';

const REFETCH_INTERVAL_MS = 5000;

export const useProjects = () => {
  const options = { refetchInterval: REFETCH_INTERVAL_MS };
  const { data, ...rest } = useProjectsMutations(options);

  return {
    projects: data ?? [],
    ...rest,
  };
};
