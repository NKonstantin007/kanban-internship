import { User } from '@/types/user';
import { withDelay } from '@/utils/time';

export const getCurrentUserMock = withDelay((): User => {
  return {
    name: 'Alex',
  };
}, 1000);
