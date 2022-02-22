import { useQuery, UseQueryOptions } from 'react-query';
import { getProjects } from '@/data/projects';
import { Project } from '@/types/projects';

export const useProjectsQuery = (queryOptions?: UseQueryOptions<Project[]>) => {
  return useQuery('projects', getProjects, queryOptions);
};
