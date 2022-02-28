import { useQuery, UseQueryOptions } from 'react-query';
import { getALLStatuses } from '@/data/statuses';
import { Status } from '@/types/status';

export const useStatusQuery = (queryOptions?: UseQueryOptions<Status[]>) => {
  return useQuery('projects', getALLStatuses, queryOptions);
};
