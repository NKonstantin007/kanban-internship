import { useMemo } from 'react';

export const useSomething = () => {
  return useMemo(() => {
    return 'Shared hooks which can be used in all modules';
  }, []);
};
