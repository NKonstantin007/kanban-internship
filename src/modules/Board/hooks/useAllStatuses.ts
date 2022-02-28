import { useStatusQuery } from '@/queries/statuses/useStatusQuery';

export const useAllStatuses = () => {
  const { data, ...rest } = useStatusQuery();

  return {
    statuses: data ?? [],
    ...rest,
  };
};
