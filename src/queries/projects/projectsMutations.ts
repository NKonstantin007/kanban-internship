import { useQuery, UseQueryOptions } from 'react-query';
import { getProjects } from '@/data/projects';
import { Project } from '@/types/projects';

export const useProjectsMutations = (
  queryOptions?: UseQueryOptions<Project[]>,
) => {
  return useQuery('get-projects-mutation', getProjects, queryOptions);
};
