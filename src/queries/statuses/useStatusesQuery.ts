import { useQuery, UseQueryOptions } from 'react-query';
import { getStatuses } from '@/data/statuses';
import { Status } from '@/types/status';

export const useStatusesQuery = (queryOptions?: UseQueryOptions<Status[]>) => {
  return useQuery('get-statuses', getStatuses, queryOptions);
};
