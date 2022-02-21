import { User } from '@/types/user';
import { withDelay } from '@/utils/time';

export const getCurrentUserMock = withDelay((): User[] => {
  return [
    {
      id: 'user1',
      name: 'Alex',
      email: 'amsink@r.com',
      avatarLink: '',
      projectIds: [''],
      boardIds: [''],
    },
    {
      id: 'user2',
      name: 'Boris',
      email: 'boris@a.com',
      avatarLink: '',
      projectIds: [''],
      boardIds: [''],
    },
    {
      id: 'user3',
      name: 'Indent',
      email: 'ind@a.com',
      avatarLink: '',
      projectIds: [''],
      boardIds: [''],
    },
    {
      id: 'user4',
      name: 'Волна 2',
      email: 'wave@wave.com',
      avatarLink: '',
      projectIds: [''],
      boardIds: [''],
    },
    {
      id: 'user5',
      name: 'Малан',
      email: 'stick@wave.com',
      avatarLink: '',
      projectIds: [''],
      boardIds: [''],
    },
  ];
}, 1000);
