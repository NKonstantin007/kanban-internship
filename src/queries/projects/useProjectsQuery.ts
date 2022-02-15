import { useQuery, UseQueryOptions } from 'react-query';
import { getProjects } from '@/data/projects';
import { Projects } from '@/types/projects';

const PROJECTS_QUERY_KEY = 'projects';

export const useProjectsQuery = (
  queryOptions?: UseQueryOptions<Projects[]>,
) => {
  return useQuery(PROJECTS_QUERY_KEY, getProjects, queryOptions);
};
