import { useQuery, UseQueryOptions } from 'react-query';
import { getCurrentUser } from '../../data/user';
import { User } from '../../types/user';

export function useCurrentUserQuery(queryOptions: UseQueryOptions<User>) {
  return useQuery(
    'current-user',
    () => {
      return getCurrentUser();
    },
    queryOptions,
  );
}
