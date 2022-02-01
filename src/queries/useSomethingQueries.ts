import { useMemo } from 'react';

export const useSomethingQuery = () => {
  return useMemo(() => {
    return 'Shared hooks which invoke hooks from react-query and can be used in all modules';
  }, []);
};
