import { useStatusesQuery } from '@/queries/statuses';

export const useStatuses = () => {
  const { data, ...rest } = useStatusesQuery();

  return {
    statuses: data ?? [],
    ...rest,
  };
};
