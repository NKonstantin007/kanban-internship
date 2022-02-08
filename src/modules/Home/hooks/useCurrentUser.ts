import { useCurrentUserQuery } from '@/queries/user';

export function useCurrentUser() {
  return useCurrentUserQuery({
    refetchInterval: 60 * 1000,
    refetchOnWindowFocus: false,
  });
}
